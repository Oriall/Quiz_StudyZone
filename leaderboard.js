// ==================== CẤU HÌNH JSONBIN ====================
// HƯỚNG DẪN LẤY API KEY:
// 1. Đăng nhập https://jsonbin.io
// 2. Vào Dashboard → API Keys (góc trên bên phải)
// 3. Copy "Access Key" (dạng: $2b$10$... hoặc $2a$10$...)
// 4. QUAN TRỌNG: Phải copy TOÀN BỘ key, bao gồm cả ký tự đặc biệt

const JSONBIN_CONFIG = {
  binId: "6933fe07ae596e708f87252c",  // Thay bằng Bin ID của bạn
  accessKey: "$2a$10$e4JzkEKkno0sbI0nF/y08ujeA70ISgyY.UzrLJf4Cbxfx6P2WwN3i", // X-Access-Key từ JSONBin
  masterKey: "$2a$10$mzoA.ijU1UI.bWQIc4xn2.sBKp/ups4a3rgCBo3tjiIlFSVZrZh6a"  // X-Master-Key (nếu cần write)
};


// ==================== LEADERBOARD MANAGER ====================
class LeaderboardManager {
  constructor() {
    this.baseUrl = `https://api.jsonbin.io/v3/b/${JSONBIN_CONFIG.binId}`;
    this.currentPlayer = {
      name: "",
      maxStreak: 0,
      currentStreak: 0,
      totalScore: 0,
      lastPlayed: ""
    };
  }

  // Lấy dữ liệu leaderboard từ JSONBin
  async fetchLeaderboard() {
    try {
      const response = await fetch(`${this.baseUrl}/latest`, {
        method: 'GET',
        headers: {
          'X-Access-Key': JSONBIN_CONFIG.accessKey
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.record || { players: [] };
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      return { players: [] };
    }
  }

  // Cập nhật leaderboard lên JSONBin
  async updateLeaderboard(data) {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': JSONBIN_CONFIG.masterKey
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error("Error updating leaderboard:", error);
      return false;
    }
  }

  // Lưu streak mới vào leaderboard
  async saveStreak(playerName, streak, score) {
    console.log(`💾 Đang lưu: ${playerName} - Streak: ${streak} - Score: ${score}`);
    
    const data = await this.fetchLeaderboard();
    
    // Tìm người chơi trong danh sách
    let playerIndex = data.players.findIndex(p => p.name === playerName);
    
    if (playerIndex === -1) {
      // Người chơi mới
      data.players.push({
        name: playerName,
        maxStreak: streak,
        totalScore: score,
        lastPlayed: new Date().toISOString(),
        gamesPlayed: 1
      });
      console.log(`✅ Thêm người chơi mới: ${playerName}`);
    } else {
      // Cập nhật người chơi cũ
      const player = data.players[playerIndex];
      player.maxStreak = Math.max(player.maxStreak, streak);
      player.totalScore += score;
      player.lastPlayed = new Date().toISOString();
      player.gamesPlayed = (player.gamesPlayed || 0) + 1;
      console.log(`✅ Cập nhật người chơi: ${playerName}`);
    }

    // Sắp xếp theo maxStreak giảm dần, giữ top 50
    data.players.sort((a, b) => b.maxStreak - a.maxStreak);
    data.players = data.players.slice(0, 50);

    const success = await this.updateLeaderboard(data);
    
    if (success) {
      console.log(`✅ Đã lưu thành công lên server!`);
    } else {
      console.error(`❌ Lỗi khi lưu lên server!`);
    }
    
    return success;
  }

  // Lấy top N người chơi
  async getTopPlayers(limit = 10) {
    const data = await this.fetchLeaderboard();
    return data.players.slice(0, limit);
  }

  // Lấy vị trí của người chơi
  async getPlayerRank(playerName) {
    const data = await this.fetchLeaderboard();
    const index = data.players.findIndex(p => p.name === playerName);
    return index === -1 ? null : index + 1;
  }
}

// ==================== KHỞI TẠO ====================
const leaderboard = new LeaderboardManager();

// ==================== UI FUNCTIONS ====================

// Hiển thị form nhập tên
function showNameInputPopup() {
  const popup = document.getElementById("name-input-popup");
  if (popup) {
    popup.style.display = "flex";
  }
}

// Xử lý khi người dùng nhập tên
function submitPlayerName() {
  const nameInput = document.getElementById("player-name-input");
  const playerName = nameInput.value.trim();
  
  if (playerName === "") {
    alert("Vui lòng nhập tên của bạn!");
    return;
  }
  
  if (playerName.length > 20) {
    alert("Tên không được quá 20 ký tự!");
    return;
  }
  
  leaderboard.currentPlayer.name = playerName;
  document.getElementById("name-input-popup").style.display = "none";
  
  // Hiển thị tên người chơi
  const displayName = document.getElementById("current-player-name");
  if (displayName) {
    displayName.textContent = playerName;
  }
}

// Hiển thị bảng xếp hạng
async function showLeaderboard() {
  const popup = document.getElementById("leaderboard-popup");
  const tbody = document.getElementById("leaderboard-tbody");
  
  if (!popup || !tbody) return;
  
  tbody.innerHTML = '<tr><td colspan="4">Đang tải...</td></tr>';
  popup.style.display = "flex";
  
  const topPlayers = await leaderboard.getTopPlayers(10);
  
  if (topPlayers.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4">Chưa có dữ liệu</td></tr>';
    return;
  }
  
  tbody.innerHTML = topPlayers.map((player, index) => {
    const medal = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "";
    const isCurrentPlayer = player.name === leaderboard.currentPlayer.name;
    const rowClass = isCurrentPlayer ? "current-player-row" : "";
    
    return `
      <tr class="${rowClass}">
        <td>${medal} #${index + 1}</td>
        <td>${escapeHtml(player.name)}</td>
        <td>🔥 ${player.maxStreak}</td>
        <td>⭐ ${player.totalScore}</td>
      </tr>
    `;
  }).join("");
}

// Đóng popup leaderboard
function closeLeaderboard() {
  const popup = document.getElementById("leaderboard-popup");
  if (popup) {
    popup.style.display = "none";
  }
}

// Lưu kết quả khi kết thúc game hoặc đạt milestone
async function saveGameResult() {
  if (leaderboard.currentPlayer.name === "") {
    return; // Chưa nhập tên
  }
  
  // Chỉ lưu khi có streak đáng kể (>=5) hoặc điểm cao
  if (leaderboard.currentPlayer.maxStreak >= 5 || leaderboard.currentPlayer.totalScore >= 10) {
    await leaderboard.saveStreak(
      leaderboard.currentPlayer.name,
      leaderboard.currentPlayer.maxStreak,
      leaderboard.currentPlayer.totalScore
    );
    
    console.log("✅ Đã lưu kết quả lên leaderboard");
  }
}

// Cập nhật thông tin người chơi khi streak thay đổi
function updatePlayerStats(currentStreak, totalScore) {
  leaderboard.currentPlayer.currentStreak = currentStreak;
  leaderboard.currentPlayer.maxStreak = Math.max(
    leaderboard.currentPlayer.maxStreak,
    currentStreak
  );
  leaderboard.currentPlayer.totalScore = totalScore;
  
  // Tự động lưu khi đạt milestone
  if (currentStreak > 0 && currentStreak % 10 === 0) {
    saveGameResult();
  }
}

// Escape HTML để tránh XSS
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// ==================== EVENT LISTENERS ====================

// Tự động hiện form nhập tên khi load trang
window.addEventListener('load', () => {
  showNameInputPopup();
});

// Lưu kết quả khi người dùng rời trang
window.addEventListener('beforeunload', () => {
  if (leaderboard.currentPlayer.maxStreak > 0) {
    saveGameResult();
  }
});

// Cho phép nhấn Enter để submit tên
const nameInput = document.getElementById("player-name-input");
if (nameInput) {
  nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      submitPlayerName();
    }
  });
}

// ==================== EXPORT FUNCTIONS ====================
// Các function này sẽ được gọi từ code chính
window.leaderboardSystem = {
  updatePlayerStats,
  saveGameResult,
  showLeaderboard,
  closeLeaderboard,
  submitPlayerName
};