// ==================== DATA TỪ VỰNG ====================
const vocabularyData = [
  // Bài 4
  { id: 1, hiragana: "おきます", kanji: "", meaning: "thức dậy" },
  { id: 2, hiragana: "ねます", kanji: "寝ます", meaning: "ngủ" },
  { id: 3, hiragana: "はたらきます", kanji: "働きます", meaning: "làm việc" },
  { id: 4, hiragana: "やすみます", kanji: "休みます", meaning: "nghỉ ngơi" },
  { id: 5, hiragana: "べんきょうします", kanji: "勉強します", meaning: "học tập" },
  { id: 6, hiragana: "おわります", kanji: "終わります", meaning: "kết thúc" },
  { id: 7, hiragana: "デパート", kanji: "", meaning: "cửa hàng bách hóa" },
  { id: 8, hiragana: "ぎんこう", kanji: "銀行", meaning: "ngân hàng" },
  { id: 9, hiragana: "ゆうびんきょく", kanji: "郵便局", meaning: "bưu điện" },
  { id: 10, hiragana: "としょかん", kanji: "図書館", meaning: "thư viện" },
  { id: 11, hiragana: "びじゅつかん", kanji: "美術館", meaning: "viện bảo tàng" },
  { id: 12, hiragana: "でんわばんごう", kanji: "電話番号", meaning: "số điện thoại" },
  { id: 13, hiragana: "なんばん", kanji: "何番", meaning: "số mấy" },
  { id: 14, hiragana: "いま", kanji: "今", meaning: "bây giờ" },
  { id: 15, hiragana: "～じ", kanji: "～時", meaning: "~giờ" },
  { id: 16, hiragana: "～ふん / ～ぷん", kanji: "～分", meaning: "～phút" },
  { id: 17, hiragana: "はん", kanji: "半", meaning: "phân nửa" },
  { id: 18, hiragana: "なんじ", kanji: "何時", meaning: "mấy giờ" },
  { id: 19, hiragana: "なんぷん", kanji: "何分", meaning: "mấy phút" },
  { id: 20, hiragana: "ごぜん", kanji: "午前", meaning: "sáng (AM: trước 12 giờ)" },
  { id: 21, hiragana: "ごご", kanji: "午後", meaning: "chiều (PM: sau 12 giờ)" },
  { id: 22, hiragana: "あさ", kanji: "朝", meaning: "sáng" },
  { id: 23, hiragana: "ひる", kanji: "昼", meaning: "trưa" },
  { id: 24, hiragana: "ばん", kanji: "晩", meaning: "tối" },
  { id: 25, hiragana: "よる", kanji: "夜", meaning: "tối" },
  { id: 26, hiragana: "おととい", kanji: "", meaning: "ngày hôm kia" },
  { id: 27, hiragana: "きのう", kanji: "", meaning: "ngày hôm qua" },
  { id: 28, hiragana: "きょう", kanji: "今日", meaning: "hôm nay" },
  { id: 29, hiragana: "あした", kanji: "明日", meaning: "ngày mai" },
  { id: 30, hiragana: "あさって", kanji: "", meaning: "ngày mốt" },
  { id: 31, hiragana: "けさ", kanji: "今朝", meaning: "sáng nay" },
  { id: 32, hiragana: "こんばん", kanji: "", meaning: "tối nay" },
  { id: 33, hiragana: "ゆうべ", kanji: "", meaning: "tối hôm qua" },
  { id: 34, hiragana: "やすみ", kanji: "休み", meaning: "nghỉ ngơi (danh từ)" },
  { id: 35, hiragana: "ひるやすみ", kanji: "昼休み", meaning: "nghỉ trưa" },
  { id: 36, hiragana: "まいあさ", kanji: "毎朝", meaning: "mỗi sáng" },
  { id: 37, hiragana: "まいばん", kanji: "毎晩", meaning: "mỗi tối" },
  { id: 38, hiragana: "まいにち", kanji: "毎日", meaning: "mỗi ngày" },
  { id: 39, hiragana: "ペキン", kanji: "", meaning: "Bắc Kinh" },
  { id: 40, hiragana: "バンコク", kanji: "", meaning: "Bangkok" },
  { id: 41, hiragana: "ロンドン", kanji: "", meaning: "Luân Đôn" },
  { id: 42, hiragana: "ロサンゼルス", kanji: "", meaning: "Los Angeles" },
  { id: 43, hiragana: "たいへんですね", kanji: "大変ですね", meaning: "vất vả nhỉ" },
  { id: 44, hiragana: "ばんごうあんない", kanji: "", meaning: "dịch vụ 116 (hỏi số điện thoại)" },
  { id: 45, hiragana: "おといあわせ", kanji: "", meaning: "(số điện thoại) bạn muốn biết / hỏi là" },

  // Bài 5
  { id: 46, hiragana: "ばんせん", kanji: "―番線", meaning: "sân ga số –" },
  { id: 47, hiragana: "いきます", kanji: "行きます", meaning: "đi" },
  { id: 48, hiragana: "きます", kanji: "来ます", meaning: "đến" },
  { id: 49, hiragana: "かえります", kanji: "帰ります", meaning: "về" },
  { id: 50, hiragana: "がっこう", kanji: "学校", meaning: "trường học" },
  { id: 51, hiragana: "スーパー", kanji: "", meaning: "siêu thị" },
  { id: 52, hiragana: "えき", kanji: "駅", meaning: "ga, nhà ga" },
  { id: 53, hiragana: "ひこうき", kanji: "飛行機", meaning: "máy bay" },
  { id: 54, hiragana: "ふね", kanji: "船", meaning: "thuyền, tàu thủy" },
  { id: 55, hiragana: "でんしゃ", kanji: "電車", meaning: "tàu điện" },
  { id: 56, hiragana: "ちかてつ", kanji: "地下鉄", meaning: "tàu điện ngầm" },
  { id: 57, hiragana: "しんかんせん", kanji: "新幹線", meaning: "tàu Shinkansen (tàu điện siêu tốc của Nhật)" },
  { id: 58, hiragana: "バス", kanji: "", meaning: "xe Buýt" },
  { id: 59, hiragana: "タクシー", kanji: "", meaning: "tắc-xi" },
  { id: 60, hiragana: "じてんしゃ", kanji: "自転車", meaning: "xe đạp" },
  { id: 61, hiragana: "あるいて", kanji: "歩いて", meaning: "đi bộ" },
  { id: 62, hiragana: "ひと", kanji: "人", meaning: "người" },
  { id: 63, hiragana: "ともだち", kanji: "友達", meaning: "bạn, bạn bè" },
  { id: 64, hiragana: "かれ", kanji: "彼", meaning: "anh ấy, bạn trai" },
  { id: 65, hiragana: "かのじょ", kanji: "彼女", meaning: "chị ấy, bạn gái" },
  { id: 66, hiragana: "かぞく", kanji: "家族", meaning: "gia đình" },
  { id: 67, hiragana: "せんしゅう", kanji: "先週", meaning: "tuần trước" },
  { id: 68, hiragana: "こんしゅう", kanji: "今週", meaning: "tuần này" },
  { id: 69, hiragana: "らいしゅう", kanji: "来週", meaning: "tuần sau" },
  { id: 70, hiragana: "せんげつ", kanji: "先月", meaning: "tháng trước" },
  { id: 71, hiragana: "こんげつ", kanji: "今月", meaning: "tháng này" },
  { id: 72, hiragana: "らいげつ", kanji: "来月", meaning: "tháng sau" },
  { id: 73, hiragana: "きょねん", kanji: "去年", meaning: "năm ngoái" },
  { id: 74, hiragana: "ことし", kanji: "", meaning: "năm nay" },
  { id: 75, hiragana: "らいねん", kanji: "来年", meaning: "năm sau" },
  { id: 76, hiragana: "―がつ", kanji: "―月", meaning: "tháng –" },
  { id: 77, hiragana: "なんがつ", kanji: "何月", meaning: "tháng mấy" },
  { id: 78, hiragana: "ついたち", kanji: "１日", meaning: "ngày mồng 1" },
  { id: 79, hiragana: "ふつか", kanji: "２日", meaning: "ngày mồng 2, 2 ngày" },
  { id: 80, hiragana: "みっか", kanji: "３日", meaning: "ngày mồng 3, 3 ngày" },
  { id: 81, hiragana: "よっか", kanji: "４日", meaning: "ngày mồng 4, 4 ngày" },
  { id: 82, hiragana: "いつか", kanji: "５日", meaning: "ngày mồng 5, 5 ngày" },
  { id: 83, hiragana: "むいか", kanji: "６日", meaning: "ngày mồng 6, 6 ngày" },
  { id: 84, hiragana: "なのか", kanji: "７日", meaning: "ngày mồng 7, 7 ngày" },
  { id: 85, hiragana: "ようか", kanji: "８日", meaning: "ngày mồng 8, 8 ngày" },
  { id: 86, hiragana: "ここのか", kanji: "９日", meaning: "ngày mồng 9, 9 ngày" },
  { id: 87, hiragana: "とおか", kanji: "１０日", meaning: "ngày mồng 10, 10 ngày" },
  { id: 88, hiragana: "じゅうよっか", kanji: "１４日", meaning: "ngày 14, 14 ngày" },
  { id: 89, hiragana: "はつか", kanji: "２０日", meaning: "ngày 20, 20 ngày" },
  { id: 90, hiragana: "にじゅうよっか", kanji: "２４日", meaning: "ngày 24, 24 ngày" },
  { id: 91, hiragana: "―にち", kanji: "―日", meaning: "ngày -, – ngày" },
  { id: 92, hiragana: "なんにち", kanji: "何日", meaning: "ngày mấy, ngày bao nhiêu, mấy ngày, bao nhiêu ngày" },
  { id: 93, hiragana: "いつ", kanji: "", meaning: "bao giờ, khi nào" },
  { id: 94, hiragana: "たんじょうび", kanji: "誕生日", meaning: "sinh nhật" },
  { id: 95, hiragana: "ふつう", kanji: "普通", meaning: "tàu thường (dừng cả ở các ga lẻ)" },
  { id: 96, hiragana: "きゅうこう", kanji: "急行", meaning: "tàu tốc hành" },
  { id: 97, hiragana: "とっきゅう", kanji: "特急", meaning: "tàu tốc hành đặc biệt" },
  { id: 98, hiragana: "つぎの", kanji: "次の", meaning: "tiếp theo" },
  { id: 99, hiragana: "どういたしまして", kanji: "", meaning: "Không có chi" },

  // Bài 6
  { id: 100, hiragana: "たべます", kanji: "食べます", meaning: "ăn" },
  { id: 101, hiragana: "のみます", kanji: "飲みます", meaning: "uống" },
  { id: 102, hiragana: "すいます [たばこを～]", kanji: "吸います", meaning: "hút [thuốc lá]" },
  { id: 103, hiragana: "みます", kanji: "見ます", meaning: "xem, nhìn, trông" },
  { id: 104, hiragana: "ききます", kanji: "聞きます", meaning: "nghe" },
  { id: 105, hiragana: "よみます", kanji: "読みます", meaning: "đọc" },
  { id: 106, hiragana: "かきます", kanji: "書きます", meaning: "viết, vẽ" },
  { id: 107, hiragana: "かいます", kanji: "買います", meaning: "mua" },
  { id: 108, hiragana: "とります [しゃしんを～]", kanji: "撮ります [写真を～]", meaning: "chụp [ảnh]" },
  { id: 109, hiragana: "します", kanji: "", meaning: "làm" },
  { id: 110, hiragana: "あいます [ともだちに～]", kanji: "会います [友達に～]", meaning: "gặp [bạn]" },
  { id: 111, hiragana: "ごはん", kanji: "", meaning: "cơm, bữa ăn" },
  { id: 112, hiragana: "あさごはん", kanji: "朝ごはん", meaning: "cơm sáng" },
  { id: 113, hiragana: "ひるごはん", kanji: "昼ごはん", meaning: "cơm trưa" },
  { id: 114, hiragana: "ばんごはん", kanji: "晩ごはん", meaning: "cơm tối" },
  { id: 115, hiragana: "パン", kanji: "", meaning: "bánh mì" },
  { id: 116, hiragana: "たまご", kanji: "卵", meaning: "trứng" },
  { id: 117, hiragana: "にく", kanji: "肉", meaning: "thịt" },
  { id: 118, hiragana: "さかな", kanji: "魚", meaning: "cá" },
  { id: 119, hiragana: "やさい", kanji: "野菜", meaning: "rau" },
  { id: 120, hiragana: "くだもの", kanji: "果物", meaning: "hoa quả, trái cây" },
  { id: 121, hiragana: "みず", kanji: "水", meaning: "nước" },
  { id: 122, hiragana: "おちゃ", kanji: "お茶", meaning: "trà (nói chung)" },
  { id: 123, hiragana: "こうちゃ", kanji: "紅茶", meaning: "trà đen" },
  { id: 124, hiragana: "ぎゅうにゅう (ミルク)", kanji: "牛乳", meaning: "sữa bò" },
  { id: 125, hiragana: "ジュース", kanji: "", meaning: "nước hoa quả" },
  { id: 126, hiragana: "ビール", kanji: "", meaning: "bia" },
  { id: 127, hiragana: "[お]さけ", kanji: "[お]酒", meaning: "rượu, rượu sake" },
  { id: 128, hiragana: "ビデオ", kanji: "", meaning: "video, băng video, đầu video" },
  { id: 129, hiragana: "えいが", kanji: "映画", meaning: "phim, điện ảnh" },
  { id: 130, hiragana: "ＣＤ", kanji: "", meaning: "đĩa CD" },
  { id: 131, hiragana: "てがみ", kanji: "手紙", meaning: "thư" },
  { id: 132, hiragana: "レポート", kanji: "", meaning: "báo cáo" },
  { id: 133, hiragana: "しゃしん", kanji: "写真", meaning: "ảnh" },
  { id: 134, hiragana: "みせ", kanji: "店", meaning: "cửa hàng, tiệm" },
  { id: 135, hiragana: "レストラン", kanji: "", meaning: "nhà hàng" },
  { id: 136, hiragana: "にわ", kanji: "庭", meaning: "vườn" },
  { id: 137, hiragana: "しゅくだい", kanji: "宿題", meaning: "bài tập về nhà (～をします: làm bài tập)" },
  { id: 138, hiragana: "テニス", kanji: "", meaning: "quần vợt (～をします: đánh quần vợt)" },
  { id: 139, hiragana: "サッカー", kanji: "", meaning: "bóng đá (～をします: chơi bóng đá)" },
  { id: 140, hiragana: "[お]はなみ", kanji: "[お]花見", meaning: "việc ngắm hoa anh đào (～をします: ngắm hoa anh đào)" },
  { id: 141, hiragana: "なに", kanji: "何", meaning: "cái gì, gì" },
  { id: 142, hiragana: "いっしょに", kanji: "", meaning: "cùng, cùng nhau" },
  { id: 143, hiragana: "ちょっと", kanji: "", meaning: "một chút" },
  { id: 144, hiragana: "いつも", kanji: "", meaning: "luôn luôn, lúc nào cũng" },
  { id: 145, hiragana: "ときどき", kanji: "時々", meaning: "thỉnh thoảng" },
  { id: 146, hiragana: "それから", kanji: "", meaning: "sau đó, tiếp theo" },
  { id: 147, hiragana: "ええ", kanji: "", meaning: "vâng, được (cách nói thân mật của 「はい」)" },
  { id: 148, hiragana: "いいですね。", kanji: "", meaning: "Được đấy nhỉ./ hay quá." },
  { id: 149, hiragana: "わかりました。", kanji: "", meaning: "Tôi hiểu rồi/ vâng ạ." },
  { id: 150, hiragana: "なんですか", kanji: "何ですか。", meaning: "Có gì đấy ạ?/ cái gì vậy?/ vâng có tôi. (câu trả lời khi ai đó gọi tên mình)" },
  { id: 151, hiragana: "じゃ、また[あした]。", kanji: "", meaning: "Hẹn gặp lại [ngày mai]." },
  { id: 152, hiragana: "メキシコ", kanji: "", meaning: "Mexico" },

  // Bài 7
  { id: 153, hiragana: "きる", kanji: "切る", meaning: "cắt" },
  { id: 154, hiragana: "おくる", kanji: "送る", meaning: "gửi" },
  { id: 155, hiragana: "あげる", kanji: "", meaning: "tặng" },
  { id: 156, hiragana: "もらう", kanji: "", meaning: "nhận" },
  { id: 157, hiragana: "かす", kanji: "貸す", meaning: "cho mượn" },
  { id: 158, hiragana: "かりる", kanji: "借りる", meaning: "mượn" },
  { id: 159, hiragana: "かける", kanji: "", meaning: "mang" },
  { id: 160, hiragana: "て", kanji: "手", meaning: "tay" },
  { id: 161, hiragana: "はし", kanji: "", meaning: "cầu" },
  { id: 162, hiragana: "スプーン", kanji: "", meaning: "muỗng" },
  { id: 163, hiragana: "ナイフ", kanji: "", meaning: "con dao" },
  { id: 164, hiragana: "フォーク", kanji: "", meaning: "nĩa" },
  { id: 165, hiragana: "はさみ", kanji: "", meaning: "cái kéo" },
  { id: 166, hiragana: "ファクス", kanji: "", meaning: "máy fax" },
  { id: 167, hiragana: "ワープロ", kanji: "", meaning: "máy đánh chữ" },
  { id: 168, hiragana: "パソコン", kanji: "", meaning: "máy tính" },
  { id: 169, hiragana: "パンチ", kanji: "", meaning: "cái đục lỗ" },
  { id: 170, hiragana: "ホッチキス", kanji: "", meaning: "cái dập ghim" },
  { id: 171, hiragana: "セロテープ", kanji: "", meaning: "băng dính" },
  { id: 172, hiragana: "けしゴム", kanji: "", meaning: "cục tẩy" },
  { id: 173, hiragana: "かみ", kanji: "", meaning: "tóc" },
  { id: 174, hiragana: "はな", kanji: "花", meaning: "hoa" },
  { id: 175, hiragana: "シャツ", kanji: "", meaning: "áo sơ mi" },
  { id: 176, hiragana: "プレゼント", kanji: "", meaning: "quà tặng" },
  { id: 177, hiragana: "にもつ", kanji: "荷物", meaning: "hàng hóa" },
  { id: 178, hiragana: "おかね", kanji: "お金", meaning: "tiền" },
  { id: 179, hiragana: "きっぷ", kanji: "", meaning: "vé (tàu ,xe)" },
  { id: 180, hiragana: "クリスマス", kanji: "", meaning: "Lễ Giáng sinh" },
  { id: 181, hiragana: "ちち", kanji: "父", meaning: "cha mình" },
  { id: 182, hiragana: "はは", kanji: "母", meaning: "mẹ mình" },
  { id: 183, hiragana: "これから", kanji: "", meaning: "từ bây giờ-" },
  { id: 184, hiragana: "おとうさん", kanji: "お父さん", meaning: "cha ( người khác)" },
  { id: 185, hiragana: "おかあさん", kanji: "お母さん", meaning: "mẹ ( người khác)" },
  { id: 186, hiragana: "もう", kanji: "", meaning: "đã rồi" },
  { id: 187, hiragana: "まだ", kanji: "", meaning: "vẫn còn , vẫn chưa" },
  { id: 188, hiragana: "ごめん‌な‌さい", kanji: "", meaning: "xin lỗi" },
  { id: 189, hiragana: "いらっしゃい", kanji: "", meaning: "xin mời" },
  { id: 190, hiragana: "いってきます", kanji: "", meaning: "tôi đi đây" },
  { id: 191, hiragana: "しつれします", kanji: "", meaning: "xin thất lễ" },
  { id: 192, hiragana: "りょこう", kanji: "旅行", meaning: "du lịch" },
  { id: 193, hiragana: "おみやげ", kanji: "お土産", meaning: "quà lưu niệm" },

  // Bài 8
  { id: 194, hiragana: "みにくい", kanji: "", meaning: "Xấu" },
  { id: 195, hiragana: "ハンサム(な)", kanji: "", meaning: "đẹp trai" },
  { id: 196, hiragana: "きれい(な)", kanji: "", meaning: "(cảnh) đẹp, đẹp (gái), sạch" },
  { id: 197, hiragana: "しずか(な)", kanji: "静か(な)", meaning: "yên tĩnh" },
  { id: 198, hiragana: "にぎやか(な)", kanji: "賑やか(な)", meaning: "nhộn nhịp" },
  { id: 199, hiragana: "ゆうめい(な)", kanji: "有名(な)", meaning: "nổi tiếng" },
  { id: 200, hiragana: "しんせつ(な)", kanji: "親切(な)", meaning: "tử tế" },
  { id: 201, hiragana: "げんき(な)", kanji: "元気(な)", meaning: "khỏe" },
  { id: 202, hiragana: "ひま(な)", kanji: "暇(な)", meaning: "rảnh rỗi" },
  { id: 203, hiragana: "いそがしい", kanji: "忙しい", meaning: "bận rộn" },
  { id: 204, hiragana: "べんり(な)", kanji: "便利(な)", meaning: "tiện lợi" },
  { id: 205, hiragana: "すてき(な)", kanji: "", meaning: "tuyệt vời" },
  { id: 206, hiragana: "おおきい", kanji: "大きい", meaning: "to, lớn" },
  { id: 207, hiragana: "ちいさい", kanji: "小さい", meaning: "nhỏ, bé" },
  { id: 208, hiragana: "あたらしい", kanji: "新しい", meaning: "mới" },
  { id: 209, hiragana: "ふるい", kanji: "古い", meaning: "cũ" },
  { id: 210, hiragana: "いい", kanji: "", meaning: "tốt" },
  { id: 211, hiragana: "わるい", kanji: "悪い", meaning: "xấu" },
  { id: 212, hiragana: "あつい", kanji: "熱い", meaning: "nóng" },
  { id: 213, hiragana: "つめたい", kanji: "冷たい", meaning: "lạnh" },
  { id: 214, hiragana: "あつい", kanji: "暑い", meaning: "(trời) nóng (dùng cho thời tiết)" },
  { id: 215, hiragana: "さむい", kanji: "寒い", meaning: "(trời) lạnh (dùng cho thời tiết)" },
  { id: 216, hiragana: "むずかしい", kanji: "難しい", meaning: "khó" },
  { id: 217, hiragana: "やさしい", kanji: "優しい", meaning: "dễ" },
  { id: 218, hiragana: "きびしい", kanji: "", meaning: "nghiêm khắc" },
  { id: 219, hiragana: "やさしい", kanji: "", meaning: "dịu dàng, hiền từ" },
  { id: 220, hiragana: "たかい", kanji: "高い", meaning: "đắt" },
  { id: 221, hiragana: "やすい", kanji: "安い", meaning: "rẻ" },
  { id: 222, hiragana: "ひくい", kanji: "低い", meaning: "thấp" },
  { id: 223, hiragana: "たかい", kanji: "高い", meaning: "cao" },
  { id: 224, hiragana: "おもしろい", kanji: "", meaning: "thú vị" },
  { id: 225, hiragana: "おいしい", kanji: "", meaning: "ngon" },
  { id: 226, hiragana: "たのしい", kanji: "楽しい", meaning: "vui vẻ" },
  { id: 227, hiragana: "しろい", kanji: "白い", meaning: "trắng" },
  { id: 228, hiragana: "くろい", kanji: "黒い", meaning: "đen" },
  { id: 229, hiragana: "あかい", kanji: "赤い", meaning: "đỏ" },
  { id: 230, hiragana: "あおい", kanji: "青い", meaning: "xanh" },
  { id: 231, hiragana: "さくら", kanji: "桜", meaning: "hoa anh đào" },
  { id: 232, hiragana: "やま", kanji: "山", meaning: "núi" },
  { id: 233, hiragana: "まち", kanji: "町", meaning: "thành phố" },
  { id: 234, hiragana: "たべもの", kanji: "食べ物", meaning: "thức ăn" },
  { id: 235, hiragana: "ところ", kanji: "所", meaning: "chỗ" },
  { id: 236, hiragana: "りょう", kanji: "", meaning: "ký túc xá" },
  { id: 237, hiragana: "べんきょう", kanji: "勉強", meaning: "học tập ( danh từ )" },
  { id: 238, hiragana: "せいかつ", kanji: "生活", meaning: "cuộc sống" },
  { id: 239, hiragana: "(お)しごと", kanji: "お仕事", meaning: "công việc" },
  { id: 240, hiragana: "どう", kanji: "", meaning: "như thế nào" },
  { id: 241, hiragana: "どんな", kanji: "", meaning: "～nào" },
  { id: 242, hiragana: "どれ", kanji: "", meaning: "cái nào" }
];

// ==================== CODE CHÍNH ====================
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const popup = document.getElementById("subject-popup");
const timerEl = document.getElementById("timer");
const pointEl = document.querySelector(".point span");
const streakEl = document.querySelector(".point2 span");

// Elements cho phần tự luận
const essayContainer = document.getElementById("essay-container");
const essayQuestionEl = document.getElementById("essay-question");
const essayInputEl = document.getElementById("essay-input");
const essaySubmitBtn = document.getElementById("essay-submit");
const essayFeedbackEl = document.getElementById("essay-feedback");

// Elements cho phần trắc nghiệm
const quizContainer = document.querySelector(".quiz-container");

let correctAnswer = "";
let explanationText = "";
let selectedSubject = "";
let timerInterval = null;
let userScore = 0;
let userStreak = 0; 
let maxStreak = 0; 
let currentQuestionType = ""; // "multiple-choice" - "essay"

// Quản lý lịch sử câu hỏi
let questionHistory = [];

function saveQuestionToHistory(questionText) {
  if (!questionHistory.includes(questionText)) {
    questionHistory.push(questionText);
    if (questionHistory.length > 50) {
      questionHistory.shift();
    }
  }
}

function getAvoidListPrompt() {
  if (questionHistory.length === 0) return "";
  return `\nTránh lặp lại các câu hỏi sau:\n- ${questionHistory.join('\n- ')}\n`;
}

function updateScore() {
  if (pointEl) {
    pointEl.textContent = userScore;
  }
}

function updateStreak() {
  if (streakEl) {
    streakEl.textContent = userStreak;
  }
}

function addPoint() {
  userScore++;
  updateScore();

  if (pointEl) {
    pointEl.style.transform = "scale(1.3)";
    pointEl.style.color = "#8f39ff";
    pointEl.style.textShadow = "0 0 12px rgba(143,57,255,0.95)";
    pointEl.style.boxShadow = "0 6px 20px rgba(143,57,255,0.25)";
    pointEl.style.transition = "transform 0.2s ease, box-shadow 0.3s ease, text-shadow 0.3s ease";
    setTimeout(() => {
      pointEl.style.transform = "scale(1)";
      pointEl.style.color = "";
    }, 300);
  }
}

function increaseStreak() {
  userStreak++;
  if (userStreak > maxStreak) {
    maxStreak = userStreak;
  }
  updateStreak();


  // Cập nhật stats cho leaderboard
  if (window.leaderboardSystem) {
    window.leaderboardSystem.updatePlayerStats(userStreak, userScore);
  }

  // Hiệu ứng animation cho streak
  if (streakEl) {
    streakEl.style.transform = "scale(1.3)";
    streakEl.style.color = "#FF6B35";
    setTimeout(() => {
      streakEl.style.transform = "scale(1)";
      streakEl.style.color = "";
    }, 300);
  }

  // Hiển thị thông báo milestone
  if (userStreak === 5) {
    showStreakMilestone("🔥 Streak x5! Bạn đang rất tốt!");
  } else if (userStreak === 10) {
    showStreakMilestone("🔥🔥 Streak x10! Xuất sắc!");
  } else if (userStreak === 20) {
    showStreakMilestone("🔥🔥🔥 Streak x20! Bạn là cao thủ!");
  } else if (userStreak % 50 === 0 && userStreak > 0) {
    showStreakMilestone(`🏆 Streak x${userStreak}! Không thể tin được!`);
  }
}

// Reset streak khi trả lời sai
function resetStreak() {
  if (userStreak > 0) {
    // Hiệu ứng mất streak
    if (streakEl) {
      streakEl.style.transform = "scale(0.8)";
      streakEl.style.color = "#f44336";
      setTimeout(() => {
        userStreak = 0;
        updateStreak();
        streakEl.style.transform = "scale(1)";
        streakEl.style.color = "";
      }, 300);
    } else {
      userStreak = 0;
      updateStreak();
    }
  }
}

// Hiển thị thông báo milestone
function showStreakMilestone(message) {
  const milestone = document.createElement("div");
  milestone.className = "streak-milestone";
  milestone.textContent = message;
  milestone.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: linear-gradient(135deg, #FF6B35, #F7931E);
    color: white;
    padding: 20px 40px;
    border-radius: 15px;
    font-size: 24px;
    font-weight: bold;
    z-index: 10000;
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.5);
    animation: milestonePopup 2s ease-out forwards;
  `;

  document.body.appendChild(milestone);

  setTimeout(() => {
    milestone.remove();
  }, 2000);
}

// Thêm CSS animation cho milestone
const style = document.createElement("style");
style.textContent = `
  @keyframes milestonePopup {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 1;
    }
    70% {
      transform: translate(-50%, -50%) scale(0.95);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Chọn môn học
function selectSubject(subject) {
  selectedSubject = subject;
  popup.style.display = "none";

  // Reset streak khi đổi môn
  userStreak = 0;
  updateStreak();

  loadQuestion();
}

// Đếm giờ
function startTimer(duration) {
  clearInterval(timerInterval);
  let timeLeft = duration;
  updateTimerDisplay(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timerEl.textContent = `${mins}:${secs}`;
}

function handleTimeout() {
  // Reset streak khi hết giờ
  resetStreak();

  if (currentQuestionType === "multiple-choice") {
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
    questionEl.textContent = "Hết giờ! Đáp án đúng đã được hiển thị.";
  } else if (currentQuestionType === "essay") {
    essaySubmitBtn.disabled = true;
    essayInputEl.disabled = true;
    essayFeedbackEl.textContent = `⏰ Hết giờ! Đáp án đúng là: ${correctAnswer}`;
    essayFeedbackEl.style.color = "#ff9800";
  }

  showExplanation();
}

// ==================== CHỌN LOẠI CÂU HỎI ====================
function chooseQuestionType() {
  // Chỉ áp dụng cho môn tiếng Nhật
  if (selectedSubject !== "japanese") {
    return "multiple-choice";
  }

  // Ngẫu nhiên 50-50 giữa trắc nghiệm và tự luận
  return Math.random() < 0.5 ? "multiple-choice" : "essay";
}

// ==================== SHOW/HIDE CONTAINERS ====================
function showMultipleChoiceContainer() {
  if (quizContainer) quizContainer.style.display = "block";
  if (essayContainer) essayContainer.style.display = "none";
}

function showEssayContainer() {
  if (quizContainer) quizContainer.style.display = "none";
  if (essayContainer) essayContainer.style.display = "block";
}

// ==================== TẠO CÂU HỎI TRẮC NGHIỆM ====================
function generateJapaneseMultipleChoice() {
  const availableWords = vocabularyData.filter(word =>
    !questionHistory.includes(word.hiragana)
  );

  if (availableWords.length < 4) {
    questionHistory = [];
  }

  const wordsToUse = availableWords.length >= 4 ? availableWords : vocabularyData;
  const correctWord = wordsToUse[Math.floor(Math.random() * wordsToUse.length)];

  const wrongWords = [];
  while (wrongWords.length < 3) {
    const randomWord = vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (randomWord.id !== correctWord.id &&
      !wrongWords.find(w => w.id === randomWord.id)) {
      wrongWords.push(randomWord);
    }
  }

  const allOptions = [correctWord, ...wrongWords]
    .sort(() => Math.random() - 0.5)
    .map(word => word.hiragana);

  const questionData = {
    question: `"${correctWord.meaning}" trong tiếng Nhật là gì?`,
    options: allOptions,
    answer: correctWord.hiragana,
    explanation: `Đáp án đúng là "${correctWord.hiragana}"${correctWord.kanji ? ` (${correctWord.kanji})` : ''} có nghĩa là "${correctWord.meaning}".`
  };

  saveQuestionToHistory(correctWord.hiragana);
  return questionData;
}

// ==================== TẠO CÂU HỎI TỰ LUẬN ====================
function generateJapaneseEssay() {
  const availableWords = vocabularyData.filter(word =>
    !questionHistory.includes(word.hiragana)
  );

  if (availableWords.length === 0) {
    questionHistory = [];
  }

  const wordsToUse = availableWords.length > 0 ? availableWords : vocabularyData;
  const correctWord = wordsToUse[Math.floor(Math.random() * wordsToUse.length)];

  const questionData = {
    question: `Hãy viết từ "${correctWord.meaning}" bằng chữ Hiragana:`,
    answer: correctWord.hiragana,
    explanation: `Đáp án đúng là "${correctWord.hiragana}"${correctWord.kanji ? ` (${correctWord.kanji})` : ''} có nghĩa là "${correctWord.meaning}".`,
    kanji: correctWord.kanji
  };

  saveQuestionToHistory(correctWord.hiragana);
  return questionData;
}

// ==================== LOAD CÂU HỎI ====================
async function loadQuestion() {
  // Reset feedback tự luận
  if (essayFeedbackEl) essayFeedbackEl.textContent = "";
  if (essayInputEl) {
    essayInputEl.value = "";
    essayInputEl.disabled = false;
  }
  if (essaySubmitBtn) essaySubmitBtn.disabled = false;

  timerEl.textContent = "";

  let questionData;

  if (selectedSubject === "japanese") {
    // Chọn loại câu hỏi ngẫu nhiên
    currentQuestionType = chooseQuestionType();

    if (currentQuestionType === "essay") {
      showEssayContainer();
      questionData = generateJapaneseEssay();

      essayQuestionEl.textContent = questionData.question;
      correctAnswer = questionData.answer;
      explanationText = questionData.explanation;

      // Focus vào ô input
      setTimeout(() => essayInputEl.focus(), 100);

      startTimer(30); // 30 giây cho câu tự luận
      return;
    } else {
      showMultipleChoiceContainer();
      questionData = generateJapaneseMultipleChoice();
    }
  } else {
    // Các môn khác vẫn dùng trắc nghiệm
    showMultipleChoiceContainer();
    currentQuestionType = "multiple-choice";
    questionEl.textContent = "Đang tải câu hỏi...";
    optionsEl.innerHTML = "";
    questionData = await fetchQuestionFromGemini();
  }

  if (!questionData || !questionData.question) {
    questionEl.textContent = "Không thể tải câu hỏi.";
    return;
  }

  if (selectedSubject !== "japanese") {
    saveQuestionToHistory(questionData.question);
  }

  questionEl.textContent = questionData.question;
  correctAnswer = questionData.answer;
  explanationText = questionData.explanation || "Không có giải thích.";

  // Tạo các nút trắc nghiệm
  optionsEl.innerHTML = "";
  questionData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => {
      clearInterval(timerInterval);
      handleAnswer(btn, option);
    };
    optionsEl.appendChild(btn);
  });

  if (selectedSubject === "it" || selectedSubject === "english" || selectedSubject === "japanese") {
    startTimer(10);
  } else {
    startTimer(60);
  }
}

// ==================== XỬ LÝ TRẮC NGHIỆM ====================
function handleAnswer(button, selectedOption) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selectedOption === correctAnswer) {
    button.classList.add("correct");
    addPoint();
    increaseStreak(); // Tăng streak khi đúng
  } else {
    button.classList.add("incorrect");
    resetStreak(); // Reset streak khi sai
    buttons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  showExplanation();
}

// ==================== XỬ LÝ TỰ LUẬN ====================
function submitEssayAnswer() {
  clearInterval(timerInterval);

  const userAnswer = essayInputEl.value.trim();
  essayInputEl.disabled = true;
  essaySubmitBtn.disabled = true;

  if (userAnswer === "") {
    essayFeedbackEl.textContent = "⚠️ Bạn chưa nhập câu trả lời!";
    essayFeedbackEl.style.color = "#ff9800";
    resetStreak(); // Reset streak khi không trả lời
    showExplanation();
    return;
  }

  // So sánh câu trả lời (không phân biệt hoa thường, loại bỏ khoảng trắng)
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    essayFeedbackEl.textContent = "✅ Chính xác! Bạn đã trả lời đúng.";
    essayFeedbackEl.style.color = "#4CAF50";
    addPoint();
    increaseStreak(); // Tăng streak khi đúng
  } else {
    essayFeedbackEl.textContent = `❌ Sai rồi! Đáp án đúng là: ${correctAnswer}`;
    essayFeedbackEl.style.color = "#f44336";
    resetStreak(); // Reset streak khi sai
  }

  showExplanation();
}

// Gắn sự kiện cho nút submit và Enter key
if (essaySubmitBtn) {
  essaySubmitBtn.onclick = submitEssayAnswer;
}

if (essayInputEl) {
  essayInputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !essaySubmitBtn.disabled) {
      submitEssayAnswer();
    }
  });
}

// ==================== GỌI GEMINI API ====================
async function fetchQuestionFromGemini() {
  const avoidList = getAvoidListPrompt();
  let prompt = "";

  if (selectedSubject === "it") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về kiến thức Tin học lớp 12 (Việt Nam), bao gồm các chủ đề như: Cơ sở dữ liệu, hệ quản trị cơ sở dữ liệu, Python, C+++, thuật toán, Html, web, mạng,...
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến kiến thức Tin học lớp 12.
- Ngẫu nhiên chọn một trong các chủ đề trên.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Giải thích bằng tiếng Việt.
- Trả về JSON:
{ "question": "...", "options": [...], "answer": "...", "explanation": "..." }`;
  } else if (selectedSubject === "math") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về kiến thức Toán học lớp 12 (Việt Nam) theo chương trình mới 2018,...
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến kiến thức Toán học lớp 12.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Trả về JSON:
{ "question": "...", "options": [...], "answer": "...", "explanation": "..." }`;
  } else if (selectedSubject === "physics") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về kiến thức Vật lý lớp 12 (Việt Nam) theo chương trình mới 2018,...
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến kiến thức Vật lý lớp 12.
- Ngẫu nhiên chọn một trong các chủ đề.
- Tránh lặp lại câu hỏi.
- Câu hỏi có 4 lựa chọn, 1 đúng.
- Giải thích 1-5 câu.
- Trả về JSON:
{ "question": "...", "options": [...], "answer": "...", "explanation": "..." }`;
  }

  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCbWfOla29VASM0_jlfPIhUCqeCyaZA5jU", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    return null;
  }

  const data = await response.json();
  let textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  textResponse = textResponse.replace(/```json|```/g, "").trim();

  try {
    return JSON.parse(textResponse);
  } catch (e) {
    console.error("JSON parse error:", e, "Raw response:", textResponse);
    return null;
  }
}

function showExplanation() {
  document.getElementById("explanation-text").textContent = explanationText;
  document.getElementById("explanation-popup").style.display = "flex";
}

function closeExplanation() {
  document.getElementById("explanation-popup").style.display = "none";
}

// Khởi tạo điểm và streak ban đầu
updateScore();
updateStreak();