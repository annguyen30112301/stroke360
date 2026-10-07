/* ============================================================
   NỘI DUNG WEBSITE STROKE360 — thành viên không viết mã sửa chữ ở đây.
   Mọi số liệu bám Kế hoạch kinh doanh V3. Nhân vật, nhật ký là minh họa.
   ============================================================ */
window.S360 = {
  contact: {
    hotline: "1900 xxxx",          // TODO: thay số hotline demo
    zaloGroup: "https://zalo.me/g/", // TODO: dán link nhóm Zalo cộng đồng thật
    email: "lienhe@stroke360.vn"
  },

  /* Bảng 5.2 – Kế hoạch V3 */
  services: [
    { code: "S1-N", stage: "S1 · Tại viện", name: "Ca ngày tại viện", time: "07:00–19:00", price: 1100000, unit: "/ngày",
      desc: "Chăm sóc viên chính thức: vệ sinh, cho ăn an toàn (kể cả qua ống thông), xoay trở chống loét, vận động sớm theo hướng dẫn của nhân viên y tế, đi theo khám buồng và ghi lại dặn dò, nhật ký gửi gia đình. Gia đình trực đêm." },
    { code: "S1-T", stage: "S1 · Tại viện", name: "Trọn ngày tại viện", time: "24 giờ", price: 1600000, unit: "/ngày",
      desc: "Ca ngày như S1-N và ca đêm do cộng tác viên đã chứng nhận: túc trực, xoay trở theo lịch, hỗ trợ vệ sinh, báo điều dưỡng khoa khi bất thường; bàn giao có bảng kiểm lúc 07:00 và 19:00." },
    { code: "S2A", stage: "S2 · Tại nhà", name: "Chăm sóc và PHCN tại nhà 8 tuần", time: "8 tuần", price: 9500000, unit: "/gói",
      desc: "16 buổi phục hồi chức năng tại nhà do kỹ thuật viên có giấy phép hành nghề; 4 lần điều dưỡng đến kiểm tra; kế hoạch phục hồi có mục tiêu; mượn dụng cụ tập." },
    { code: "S2B", stage: "S2 · Tại nhà", name: "Hướng dẫn người nhà và theo dõi", time: "Theo tháng", price: 1500000, unit: " + 1.800.000 đ/tháng",
      desc: "2 buổi điều dưỡng hướng dẫn người nhà tại nhà; tài liệu; sau đó theo dõi: 2 lần đến nhà mỗi tháng, gọi video hằng tuần, nhắc thuốc và tái khám." },
    { code: "S3", stage: "S3 · Dài hạn", name: "Kết nối chăm sóc dài hạn", time: "Khi cần", price: 0, unit: "",
      priceText: "Gia đình không trả phí",
      desc: "Giới thiệu cơ sở dưỡng lão đối tác đã được thẩm định; hoa hồng 2.500.000 đ/khách do cơ sở trả và được công khai với gia đình." }
  ],
  priceNote: "Giá đã bao gồm VAT (nếu có). Ngày lễ, Tết cộng 50%. Đặt cọc 3 ngày khi ký hợp đồng, thanh toán theo tuần.",

  /* Mục 5.5 – Kế hoạch V3 */
  promises: [
    ["Thay người trong 12 giờ", "nếu gia đình không hài lòng."],
    ["Nhật ký mỗi tối", "gửi cho tối đa 5 người thân."],
    ["Chăm sóc viên rõ ràng", "thẻ tên, đồng phục, chứng nhận đào tạo, bảo hiểm trách nhiệm nghề nghiệp."],
    ["Công khai mọi khoản phí", "kể cả hoa hồng khi giới thiệu dịch vụ."]
  ],

  /* Mục 7.2 – Website demo. Chỉ tiêu năm 3, KHÔNG phải kết quả đã đạt */
  impact: [
    { value: 1320, label: "gia đình được đồng hành mỗi năm" },
    { value: 79, label: "chăm sóc viên có việc làm ổn định, đủ bảo hiểm" },
    { value: 5, label: "bệnh viện đối tác" },
    { value: 0, label: "sự cố nghiêm trọng do lỗi chăm sóc", prefix: "" },
    { value: 4.6, label: "điểm hài lòng của gia đình (trên 5)", prefix: "≥ ", decimals: 1 },
    { value: 45, label: "khách tiếp tục được chăm sóc tại nhà sau xuất viện", prefix: "≥ ", suffix: "%" }
  ],

  /* Lộ trình học – mục 5.2. ready:true = bài hoàn chỉnh trong bản demo */
  stages: {
    K: "Hiểu về đột quỵ",
    A: "Tuần đầu tại bệnh viện",
    B: "Chuẩn bị xuất viện",
    C: "12 tuần tại nhà",
    T: "Sức khỏe tinh thần"
  },
  /* K và T là chủ đề, không phải giai đoạn – học lúc nào cũng được */
  stageNotes: {
    K: "Kiến thức nền: đột quỵ là gì, diễn biến ra sao, để lại gì và được điều trị thế nào. Nên đọc trước khi vào lộ trình chăm sóc.",
    T: "Cho cả người bệnh và người chăm sóc. Cảm xúc sau đột quỵ là một phần của bệnh, cần được chăm sóc như cơ thể."
  },
  lessons: [
    { id: "K1", stage: "K", ready: true, mins: 5, title: "Đột quỵ là gì? Hai loại chính và yếu tố nguy cơ",
      keywords: "đột quỵ là gì tai biến mạch máu não nhồi máu xuất huyết thiếu máu thoáng qua TIA nguyên nhân huyết áp nguy cơ",
      points: [
        "Đột quỵ (tai biến mạch máu não) xảy ra khi dòng máu nuôi một vùng não bị gián đoạn. Tế bào não thiếu oxy và bắt đầu chết chỉ sau vài phút, vì vậy đột quỵ luôn là cấp cứu.",
        "Nhồi máu não (thiếu máu não cục bộ): mạch máu não bị tắc, thường do cục máu đông. Đây là loại phổ biến nhất, khoảng 8 trong 10 ca.",
        "Xuất huyết não: mạch máu trong não bị vỡ, máu tràn vào mô não. Ít gặp hơn nhưng thường nặng hơn.",
        "Cơn thiếu máu não thoáng qua (TIA): triệu chứng giống đột quỵ rồi tự hết sau vài phút đến vài giờ. Đây là lời cảnh báo đột quỵ thật có thể xảy ra, vẫn phải đi cấp cứu ngay.",
        "Yếu tố nguy cơ thay đổi được: tăng huyết áp (quan trọng nhất), đái tháo đường, mỡ máu cao, rung nhĩ, hút thuốc, rượu bia, ít vận động, thừa cân. Không thay đổi được: tuổi cao, tiền sử gia đình, đã từng đột quỵ."
      ],
      checklist: ["Người thân bị loại đột quỵ nào? (hỏi bác sĩ)", "Vùng não nào bị ảnh hưởng", "Các yếu tố nguy cơ người thân đang có", "Yếu tố nào gia đình có thể cùng thay đổi"],
      quiz: [
        { q: "Loại đột quỵ nào phổ biến nhất?", a: ["Xuất huyết não", "Nhồi máu não do mạch máu bị tắc", "Cả hai bằng nhau"], c: 1 },
        { q: "Ông nói ngọng 10 phút rồi tự hết. Gia đình nên:", a: ["Yên tâm vì đã hết", "Đưa đi cấp cứu ngay vì đây có thể là cơn thiếu máu não thoáng qua", "Chờ sáng mai đi khám"], c: 1 },
        { q: "Yếu tố nguy cơ quan trọng nhất có thể kiểm soát được là:", a: ["Tuổi tác", "Tăng huyết áp", "Giới tính"], c: 1 }
      ] },
    { id: "K2", stage: "K", ready: true, mins: 5, title: "Diễn biến: từ giờ đầu đến những tháng phục hồi",
      keywords: "diễn biến giai đoạn cấp bán cấp mạn thời gian vàng phục hồi bao lâu tiên lượng",
      points: [
        "Vài giờ đầu (tối cấp): “thời gian là não”. Mỗi phút chậm trễ mất thêm hàng triệu tế bào não. Các phương pháp tái thông mạch chỉ làm được khi đến viện sớm.",
        "1–2 tuần đầu (cấp): người bệnh được theo dõi sát tại khoa thần kinh hoặc đơn vị đột quỵ. Tình trạng có thể nặng lên trong những ngày đầu do phù não, chảy máu thêm, viêm phổi do sặc, huyết khối tĩnh mạch hay loét tì đè.",
        "Vài tuần đến khoảng 3 tháng (bán cấp): não tự sắp xếp lại nhanh nhất. Đây là giai đoạn tập phục hồi chức năng mang lại hiệu quả lớn nhất.",
        "Sau 6 tháng (mạn): phục hồi chậm lại nhưng vẫn tiếp tục nếu tập đều. Trọng tâm chuyển sang duy trì, phòng tái phát và thích nghi với cuộc sống mới.",
        "Mỗi người phục hồi một khác, tùy vị trí và kích thước tổn thương, tuổi, bệnh nền và mức độ tập luyện. Hãy hỏi bác sĩ về tiên lượng riêng của người thân."
      ],
      checklist: ["Ngày giờ khởi phát", "Người thân đang ở giai đoạn nào", "Mục tiêu phục hồi tuần này", "Câu hỏi về tiên lượng cần hỏi bác sĩ"],
      quiz: [
        { q: "Vì sao phải đến viện thật sớm khi có dấu hiệu đột quỵ?", a: ["Để được nằm phòng tốt", "Vì điều trị tái thông mạch chỉ hiệu quả trong vài giờ đầu", "Vì bệnh viện đông vào buổi chiều"], c: 1 },
        { q: "Giai đoạn tập phục hồi mang lại hiệu quả lớn nhất thường là:", a: ["Vài tuần đến khoảng 3 tháng đầu", "Sau 2 năm", "Chỉ ngày đầu tiên"], c: 0 },
        { q: "Sau 6 tháng, người bệnh:", a: ["Không thể tiến bộ thêm", "Vẫn có thể tiến bộ chậm nếu tập đều", "Nên ngưng tập"], c: 1 }
      ] },
    { id: "K3", stage: "K", ready: true, mins: 5, title: "Hậu quả thường gặp sau đột quỵ",
      keywords: "hậu quả di chứng liệt nửa người nói khó nuốt khó trí nhớ trầm cảm mệt mỏi tiểu không tự chủ",
      points: [
        "Vận động: yếu hoặc liệt nửa người (bên đối diện với bên não bị tổn thương), mất thăng bằng, co cứng cơ, đau vai bên yếu. Nguy cơ té ngã tăng cao.",
        "Nuốt: khó nuốt làm thức ăn dễ đi lạc vào phổi, gây sặc, viêm phổi, sụt cân. Vì vậy luôn chờ đánh giá nuốt trước khi cho ăn.",
        "Giao tiếp: nói khó, nói ngọng, hoặc nói được mà không hiểu lời người khác (thất ngôn). Người bệnh vẫn có cảm xúc và suy nghĩ như trước.",
        "Nhận thức: giảm trí nhớ, khó tập trung, chậm xử lý; có người “bỏ quên” một bên cơ thể hoặc không gian (thường bên trái).",
        "Cảm xúc: trầm cảm, lo âu, dễ khóc hoặc cười không kiểm soát, cáu gắt, mệt mỏi kéo dài. Đây là hậu quả của tổn thương não, không phải do người bệnh “khó tính”.",
        "Khác: tiểu tiện không tự chủ, đau, rối loạn giấc ngủ; ít gặp hơn là co giật."
      ],
      checklist: ["Vận động: bên nào yếu?", "Nuốt: đã được đánh giá chưa?", "Giao tiếp: nói được / hiểu được?", "Trí nhớ, tập trung có thay đổi?", "Tâm trạng 2 tuần gần đây"],
      quiz: [
        { q: "Người bệnh tổn thương não bên trái thường yếu bên nào?", a: ["Bên trái", "Bên phải", "Cả hai bên"], c: 1 },
        { q: "Mẹ hay khóc bất chợt sau đột quỵ. Điều này có thể là:", a: ["Mẹ cố tình làm nũng", "Hậu quả của tổn thương não, nên báo bác sĩ", "Do ăn uống thiếu chất"], c: 1 },
        { q: "Người bệnh nói khó thì:", a: ["Không còn hiểu gì nữa", "Vẫn có suy nghĩ và cảm xúc, cần kiên nhẫn giao tiếp", "Nên nói thật to"], c: 1 }
      ] },
    { id: "K4", stage: "K", ready: true, mins: 5, title: "Hướng điều trị và phòng tái phát",
      keywords: "điều trị tiêu sợi huyết lấy huyết khối can thiệp mạch phẫu thuật thuốc phòng tái phát phục hồi chức năng",
      points: [
        "Nhồi máu não: nếu đến viện trong “cửa sổ” vài giờ đầu, bác sĩ có thể dùng thuốc tiêu sợi huyết (làm tan cục máu đông) và/hoặc can thiệp lấy huyết khối qua đường mạch máu với tắc mạch lớn. Bác sĩ quyết định dựa trên thời gian khởi phát và kết quả chụp CT/MRI.",
        "Xuất huyết não: kiểm soát huyết áp, điều chỉnh rối loạn đông máu, theo dõi sát; một số trường hợp cần phẫu thuật.",
        "Chăm sóc nâng đỡ: theo dõi huyết áp, đường huyết, nhiệt độ; đánh giá nuốt; phòng viêm phổi, loét tì đè, huyết khối tĩnh mạch. Đây là phần gia đình và chăm sóc viên góp sức nhiều nhất.",
        "Phòng tái phát lâu dài: dùng thuốc đều đặn theo đơn (thuốc chống kết tập tiểu cầu hoặc chống đông, hạ áp, hạ mỡ máu, đường huyết), không tự ngưng; bỏ thuốc lá, hạn chế rượu, ăn nhạt, vận động phù hợp.",
        "Phục hồi chức năng bắt đầu sớm khi người bệnh ổn định và kéo dài nhiều tháng: vật lý trị liệu, hoạt động trị liệu, ngôn ngữ trị liệu và hỗ trợ tâm lý.",
        "STROKE360 không tư vấn thuốc. Mọi câu hỏi về thuốc và phác đồ, gia đình hỏi bác sĩ điều trị."
      ],
      checklist: ["Phương pháp điều trị người thân đã nhận", "Danh sách thuốc phòng tái phát và giờ uống", "Lịch tái khám", "Mục tiêu huyết áp bác sĩ dặn", "Lịch tập phục hồi chức năng"],
      quiz: [
        { q: "Ai quyết định dùng thuốc tiêu sợi huyết hay lấy huyết khối?", a: ["Gia đình", "Bác sĩ, dựa trên thời gian khởi phát và kết quả chụp não", "Chăm sóc viên"], c: 1 },
        { q: "Thấy huyết áp ổn, ba muốn ngưng thuốc. Bạn nên:", a: ["Đồng ý vì đã ổn", "Không tự ngưng, hỏi bác sĩ điều trị", "Giảm còn nửa liều"], c: 1 },
        { q: "Phục hồi chức năng nên bắt đầu khi nào?", a: ["Sớm, ngay khi người bệnh ổn định theo chỉ định", "Sau 1 năm", "Chỉ khi đã về nhà"], c: 0 }
      ] },
    { id: "A1", stage: "A", ready: true, mins: 4, title: "72 giờ đầu: gia đình cần làm gì",
      keywords: "mới đột quỵ cấp cứu bắt đầu ngày đầu",
      points: [
        "Ở bên người bệnh, giữ bình tĩnh. Mọi quyết định điều trị là của bác sĩ; việc của gia đình là cung cấp thông tin chính xác.",
        "Ghi lại giờ khởi phát triệu chứng, các thuốc đang dùng, bệnh nền. Bác sĩ sẽ hỏi lại nhiều lần.",
        "Chưa cho ăn, uống bất cứ thứ gì qua miệng cho đến khi nhân viên y tế kiểm tra khả năng nuốt.",
        "Cử một người làm “đầu mối” nhận thông tin từ bác sĩ, rồi báo lại cho cả nhà để tránh hỏi chồng chéo.",
        "Sắp xếp lịch trực của gia đình ngay từ ngày đầu, kể cả thời gian nghỉ cho người trực."
      ],
      checklist: ["Giờ khởi phát triệu chứng", "Danh sách thuốc đang dùng", "Bệnh nền, dị ứng", "Người đầu mối và số điện thoại", "Lịch trực của gia đình 3 ngày tới"],
      quiz: [
        { q: "Người bệnh vừa nhập viện than khát. Gia đình nên làm gì?", a: ["Cho uống vài ngụm nước ấm", "Hỏi nhân viên y tế đã kiểm tra nuốt chưa, chưa thì không cho uống", "Cho ngậm đá viên"], c: 1 },
        { q: "Thông tin nào bác sĩ thường cần nhất lúc đầu?", a: ["Giờ bắt đầu có triệu chứng", "Người bệnh thích ăn gì", "Số phòng bệnh"], c: 0 },
        { q: "Vì sao nên cử một người đầu mối?", a: ["Để giảm số người vào thăm", "Để thông tin từ bác sĩ được truyền lại chính xác, không chồng chéo", "Để người đó trực cả ngày lẫn đêm"], c: 1 }
      ] },
    { id: "A2", stage: "A", ready: true, mins: 5, title: "Xoay trở và phòng loét tì đè",
      keywords: "loét tì đè nằm lâu xoay người đỏ da lưng mông gót",
      points: [
        "Người nằm lâu dễ bị loét ở xương cùng, gót chân, hông, bả vai. Loét có thể xuất hiện chỉ sau vài giờ tì đè liên tục.",
        "Thay đổi tư thế ít nhất mỗi 2 giờ, hoặc theo hướng dẫn của điều dưỡng khoa.",
        "Kiểm tra da mỗi lần xoay: vùng đỏ không mất đi sau khi hết tì đè là dấu hiệu cần báo điều dưỡng.",
        "Giữ da sạch, khô; ga giường phẳng, không nếp nhăn, không vụn thức ăn.",
        "Dùng gối kê để tránh hai đầu gối, hai mắt cá chạm nhau. Không kéo lê người bệnh trên ga."
      ],
      checklist: ["Giờ xoay trở (mỗi 2 giờ)", "Tư thế: ngửa / nghiêng trái / nghiêng phải", "Có vùng da đỏ không mất đi?", "Ga giường khô, phẳng", "Đã báo điều dưỡng (nếu có bất thường)"],
      quiz: [
        { q: "Bao lâu nên thay đổi tư thế một lần?", a: ["Mỗi 6 giờ", "Ít nhất mỗi 2 giờ hoặc theo hướng dẫn của điều dưỡng", "Chỉ khi người bệnh kêu đau"], c: 1 },
        { q: "Vùng da đỏ không mất đi sau khi hết tì đè nghĩa là gì?", a: ["Bình thường, bỏ qua", "Dấu hiệu sớm của loét, cần báo điều dưỡng", "Do dị ứng ga giường"], c: 1 },
        { q: "Khi di chuyển người bệnh lên đầu giường, nên:", a: ["Kéo lê trên ga cho nhanh", "Nâng người bệnh, dùng tấm lót để hai người cùng nhấc", "Để người bệnh tự trượt"], c: 1 }
      ] },
    { id: "A3", stage: "A", ready: true, mins: 5, title: "Cho ăn an toàn khi khó nuốt và qua ống thông",
      keywords: "sặc ăn uống nuốt khó ống thông dạ dày ho khi ăn mẹ tôi bị sặc",
      points: [
        "Chỉ cho ăn qua miệng khi nhân viên y tế đã cho phép, đúng loại thức ăn được chỉ định (lỏng, sệt, mềm).",
        "Tư thế ngồi thẳng, đầu giường nâng ít nhất 45°, giữ thêm 30 phút sau ăn.",
        "Mỗi lần một thìa nhỏ, chờ người bệnh nuốt hết rồi mới đưa thìa tiếp. Không vừa ăn vừa nói chuyện.",
        "Dấu hiệu sặc: ho, giọng ướt “ọc ọc”, chảy nước mắt, khó thở. Dừng ngay và báo điều dưỡng.",
        "Với ống thông: chỉ thực hiện theo đúng hướng dẫn của điều dưỡng khoa về lượng, tốc độ và tư thế."
      ],
      checklist: ["Đã được phép ăn qua miệng? Loại thức ăn gì?", "Đầu giường ≥ 45°", "Lượng ăn (cả suất / 2/3 / 1/2 / ít)", "Có ho sặc, giọng ướt không?", "Giữ tư thế ngồi 30 phút sau ăn"],
      quiz: [
        { q: "Tư thế an toàn khi cho ăn là:", a: ["Nằm ngửa thẳng", "Ngồi thẳng, đầu giường nâng ít nhất 45°", "Nằm nghiêng"], c: 1 },
        { q: "Người bệnh ho và giọng “ọc ọc” khi đang ăn. Bạn làm gì?", a: ["Cho uống nước để trôi", "Dừng cho ăn và báo điều dưỡng", "Vỗ lưng rồi ăn tiếp"], c: 1 },
        { q: "Sau khi ăn xong nên:", a: ["Cho nằm xuống ngủ ngay", "Giữ tư thế ngồi khoảng 30 phút", "Xoay nghiêng người bệnh"], c: 1 }
      ] },
    { id: "A4", stage: "A", ready: false, mins: 4, title: "Làm việc với bác sĩ, điều dưỡng: hỏi gì khi khám buồng", keywords: "khám buồng bác sĩ hỏi" },
    { id: "B1", stage: "B", ready: false, mins: 5, title: "Chuẩn bị nhà cửa: giường, nhà vệ sinh, chống té ngã", keywords: "nhà cửa té ngã giường" },
    { id: "B2", stage: "B", ready: false, mins: 4, title: "Thuốc và lịch tái khám", keywords: "thuốc tái khám" },
    { id: "B3", stage: "B", ready: true, mins: 3, title: "Nhận biết dấu hiệu tái phát (BE-FAST) và khi nào gọi 115",
      keywords: "be fast befast tái phát dấu hiệu 115 méo miệng yếu tay",
      points: [
        "B – Balance (Thăng bằng): đột ngột chóng mặt, mất thăng bằng, đi loạng choạng.",
        "E – Eyes (Mắt): đột ngột nhìn mờ, mất thị lực một hoặc hai bên.",
        "F – Face (Mặt): méo miệng, xệ một bên mặt khi cười.",
        "A – Arm (Tay): yếu hoặc tê một bên tay, chân; giơ hai tay thì một bên rơi xuống.",
        "S – Speech (Lời nói): nói khó, nói ngọng, không hiểu lời người khác.",
        "T – Time (Thời gian): gọi 115 ngay, ghi lại giờ bắt đầu. Không chờ xem có tự hết không, không tự cho uống thuốc."
      ],
      checklist: ["Dán thẻ BE-FAST ở tủ lạnh", "Số 115 và số bệnh viện gần nhất", "Ghi giờ bắt đầu triệu chứng", "Không cho ăn uống, không tự cho thuốc"],
      quiz: [
        { q: "Chữ T trong BE-FAST nhắc bạn điều gì?", a: ["Uống thuốc đúng giờ", "Thời gian: gọi 115 ngay và ghi giờ khởi phát", "Tập thể dục"], c: 1 },
        { q: "Ba bỗng nói ngọng và yếu tay phải. Bạn nên:", a: ["Cho ba nằm nghỉ, theo dõi thêm", "Gọi 115 ngay", "Cạo gió, cho uống thuốc hạ huyết áp"], c: 1 },
        { q: "Dấu hiệu nào thuộc BE-FAST?", a: ["Méo miệng một bên", "Ho khan", "Ăn ít"], c: 0 }
      ] },
    { id: "C1", stage: "C", ready: true, mins: 5, title: "Vận động hằng ngày theo hướng dẫn chuyên môn",
      keywords: "tập luyện vận động phục hồi chức năng bài tập",
      points: [
        "Chỉ tập những bài mà kỹ thuật viên phục hồi chức năng đã hướng dẫn và kiểm tra cho người bệnh.",
        "Tập đều mỗi ngày, chia nhiều lần ngắn tốt hơn một lần dài. Ghi lại vào nhật ký phục hồi.",
        "Luôn có người đứng bên phía yếu khi người bệnh ngồi dậy, đứng hoặc đi.",
        "Dừng tập và liên hệ nhân viên y tế nếu đau ngực, khó thở, choáng váng, hoặc yếu liệt tăng lên.",
        "Khen từng tiến bộ nhỏ. Động lực là một phần của phục hồi."
      ],
      checklist: ["Bài tập được kỹ thuật viên giao", "Số lần tập / ngày", "Người hỗ trợ đứng bên phía yếu", "Dấu hiệu phải dừng tập", "Tiến bộ trong tuần"],
      quiz: [
        { q: "Bài tập tại nhà nên lấy từ đâu?", a: ["Video bất kỳ trên mạng", "Bài kỹ thuật viên PHCN đã hướng dẫn cho người bệnh", "Tự nghĩ ra"], c: 1 },
        { q: "Khi người bệnh tập đi, người hỗ trợ đứng ở:", a: ["Phía bên yếu", "Phía bên khỏe", "Phía trước cách xa"], c: 0 },
        { q: "Dấu hiệu nào cần dừng tập ngay?", a: ["Hơi mỏi cơ", "Đau ngực hoặc khó thở", "Đổ mồ hôi nhẹ"], c: 1 }
      ] },
    { id: "C2", stage: "C", ready: false, mins: 4, title: "Giao tiếp khi người bệnh nói khó", keywords: "nói khó giao tiếp" },
    { id: "C4", stage: "C", ready: true, mins: 4, title: "Chăm sóc chính mình: người chăm sóc cũng cần nghỉ",
      keywords: "mệt mỏi kiệt sức nghỉ ngơi người chăm sóc stress",
      points: [
        "Kiệt sức ở người chăm sóc là phổ biến, không phải là yếu đuối. Nghỉ ngơi giúp bạn chăm người thân tốt hơn và lâu hơn.",
        "Chia lịch trực trong gia đình; nhận sự giúp đỡ khi có người đề nghị.",
        "Mỗi ngày dành ít nhất 15 phút cho riêng mình: đi bộ, hít thở, gọi cho bạn bè.",
        "Ngủ đủ là ưu tiên. Nếu phải trực đêm nhiều ngày liền, hãy tìm người thay ca.",
        "Khi thấy buồn kéo dài, mất ngủ, cáu gắt, hãy nói với người thân hoặc tìm chuyên gia hỗ trợ."
      ],
      checklist: ["Lịch trực có người thay ca", "15 phút cho mình mỗi ngày", "Số giờ ngủ đêm qua", "Một người để tâm sự"],
      quiz: [
        { q: "Người chăm sóc nghỉ ngơi là:", a: ["Ích kỷ", "Cần thiết để chăm người thân lâu dài", "Chỉ khi người bệnh đã khỏi"], c: 1 },
        { q: "Một cách giảm tải hiệu quả là:", a: ["Một mình trực mọi ca", "Chia lịch trực và nhận giúp đỡ", "Bỏ ngủ để làm thêm"], c: 1 },
        { q: "Buồn kéo dài, mất ngủ nhiều tuần thì nên:", a: ["Cố chịu", "Chia sẻ với người thân hoặc tìm chuyên gia", "Uống thuốc ngủ tự mua"], c: 1 }
      ] },
    { id: "T1", stage: "T", ready: true, mins: 4, title: "Tâm lý người bệnh sau đột quỵ",
      keywords: "tâm lý người bệnh buồn trầm cảm lo âu không muốn tập khóc gánh nặng chán nản",
      points: [
        "Buồn, lo, sợ tái phát, mất tự tin là phản ứng rất thường gặp. Khoảng 1 trong 3 người bệnh có trầm cảm sau đột quỵ, và đây là bệnh điều trị được.",
        "Dấu hiệu cần để ý khi kéo dài hơn 2 tuần: buồn hoặc khóc nhiều, mất hứng thú, không muốn tập, ăn ngủ thay đổi, hay nói “mình là gánh nặng”.",
        "Khóc hoặc cười bất chợt, không kiểm soát có thể do tổn thương não. Người bệnh không cố ý, đừng trách.",
        "Gia đình giúp được nhiều: lắng nghe không phán xét; để người bệnh tự làm những việc nhỏ; đặt mục tiêu nhỏ và khen từng tiến bộ; giữ kết nối với bạn bè, hàng xóm.",
        "Báo bác sĩ khi dấu hiệu kéo dài. Nếu người bệnh nói muốn chết hoặc có ý tự làm hại mình: không để một mình, gọi 115 hoặc đưa đến cơ sở y tế ngay."
      ],
      checklist: ["Tâm trạng người bệnh 2 tuần qua", "Còn hứng thú với điều gì?", "Ăn, ngủ có thay đổi?", "Một việc nhỏ người bệnh tự làm hôm nay", "Đã báo bác sĩ (nếu dấu hiệu kéo dài)"],
      quiz: [
        { q: "Trầm cảm sau đột quỵ:", a: ["Hiếm gặp, không cần quan tâm", "Khá thường gặp và điều trị được", "Tự hết, không cần báo bác sĩ"], c: 1 },
        { q: "Ba không muốn tập, hay nói “ba là gánh nặng” đã 3 tuần. Bạn nên:", a: ["Động viên “cố lên” rồi thôi", "Lắng nghe và báo bác sĩ để được đánh giá", "Để ba tự vượt qua"], c: 1 },
        { q: "Cách nào giúp người bệnh lấy lại tự tin?", a: ["Làm hết mọi việc thay người bệnh", "Để người bệnh tự làm việc nhỏ và khen tiến bộ", "Tránh nhắc tới việc tập luyện"], c: 1 }
      ] },
    { id: "T2", stage: "T", ready: true, mins: 4, title: "Người chăm sóc: nhận biết sớm kiệt sức",
      keywords: "kiệt sức người chăm sóc stress căng thẳng mệt mỏi cáu gắt tội lỗi mất ngủ quá tải",
      points: [
        "Dấu hiệu kiệt sức: mệt dù đã ngủ, cáu gắt, mất kiên nhẫn, hay thấy tội lỗi, ngại gặp bạn bè, đau đầu, đau lưng, hay ốm vặt.",
        "Thương, giận, buồn, tội lỗi có thể đến cùng lúc. Cảm xúc trái chiều như vậy là bình thường, không làm bạn trở thành người con tệ.",
        "Mỗi tối tự chấm “nhiệt kế căng thẳng” từ 0 đến 10. Nếu 3 ngày liền từ 7 trở lên, đó là lúc cần thay đổi: nhờ người thay ca, nghỉ một buổi, hoặc nói chuyện với chuyên viên tâm lý.",
        "Nhờ giúp cụ thể: thay vì “ai rảnh thì giúp”, hãy nhờ “chiều thứ Bảy trực giúp 4 tiếng”.",
        "Tìm hỗ trợ chuyên môn khi: mất ngủ kéo dài, buồn chán nhiều tuần, phải dùng rượu hoặc thuốc ngủ để chịu đựng, hay có ý nghĩ làm hại mình."
      ],
      checklist: ["Nhiệt kế căng thẳng hôm nay (0–10)", "3 ngày gần nhất có ngày nào ≥ 7?", "Một việc cụ thể sẽ nhờ người khác", "Lần gần nhất được nghỉ trọn một buổi"],
      quiz: [
        { q: "Bạn vừa thương vừa giận người bệnh. Điều này:", a: ["Chứng tỏ bạn là người xấu", "Là cảm xúc bình thường của người chăm sóc", "Cần giấu đi"], c: 1 },
        { q: "Nhiệt kế căng thẳng 3 ngày liền ở mức 8. Bạn nên:", a: ["Cố thêm vài tuần", "Nhờ người thay ca hoặc nói chuyện với chuyên viên tâm lý", "Uống cà phê nhiều hơn"], c: 1 },
        { q: "Cách nhờ giúp hiệu quả hơn là:", a: ["“Ai rảnh thì giúp”", "“Chiều thứ Bảy trực giúp 4 tiếng”", "Không nhờ ai cả"], c: 1 }
      ] },
    { id: "T3", stage: "T", ready: true, mins: 3, title: "5 phút lấy lại bình tĩnh tại giường bệnh",
      keywords: "thư giãn hít thở bình tĩnh lo âu hoảng sợ hồi hộp căng thẳng thở 5-4-3-2-1",
      points: [
        "Thở 4–6: hít vào bằng mũi đếm 4, thở ra chậm bằng miệng đếm 6. Lặp 5–10 lần. Thở ra dài hơn hít vào giúp cơ thể dịu lại.",
        "Kỹ thuật 5-4-3-2-1: gọi tên 5 thứ bạn thấy, 4 thứ bạn chạm được, 3 âm thanh, 2 mùi, 1 vị. Cách này kéo tâm trí về hiện tại khi đang hoảng.",
        "Thả lỏng cơ: gồng hai vai lên 5 giây rồi buông; làm tiếp với bàn tay, bắp chân.",
        "Viết 3 dòng: điều mình lo nhất; phần nào mình kiểm soát được; một việc nhỏ làm ngay bây giờ.",
        "Người bệnh tỉnh táo cũng có thể làm cùng bạn khi lo âu. Nếu hồi hộp kèm đau ngực, khó thở kéo dài, hãy báo nhân viên y tế."
      ],
      checklist: ["Thở 4–6 × 5 lần", "5-4-3-2-1", "Thả lỏng vai, tay, chân", "3 dòng: lo gì / kiểm soát được gì / làm gì ngay"],
      quiz: [
        { q: "Trong bài thở 4–6, phần nào dài hơn?", a: ["Hít vào", "Thở ra", "Nín thở"], c: 1 },
        { q: "Kỹ thuật 5-4-3-2-1 giúp:", a: ["Đưa tâm trí về hiện tại khi đang hoảng", "Đếm số lần xoay trở", "Tính liều thuốc"], c: 0 },
        { q: "Hồi hộp kèm đau ngực, khó thở kéo dài thì:", a: ["Tiếp tục tập thở", "Báo nhân viên y tế", "Đi ngủ"], c: 1 }
      ] },
    { id: "T4", stage: "T", ready: true, mins: 4, title: "Nói chuyện khi người thân buồn hoặc cáu",
      keywords: "giao tiếp cảm xúc cáu gắt buồn nói chuyện an ủi tranh cãi động viên",
      points: [
        "Ngồi ngang tầm mắt, nói chậm, câu ngắn, mỗi lần một ý. Cho người bệnh thời gian trả lời.",
        "Gọi tên cảm xúc thay họ: “Ba đang bực vì chưa tự cài nút áo được, phải không?” Được hiểu đúng giúp người bệnh dịu lại.",
        "Tránh “có gì đâu mà buồn”, “cố lên đi”. Thay bằng “Con ở đây với ba”, “Hôm nay ba đã làm được…”.",
        "Khi người bệnh cáu: không tranh cãi, tạm lùi ra vài phút, quay lại khi cả hai đã bình tĩnh.",
        "Cho người bệnh được chọn (ăn cháo hay súp, tập trước hay tắm trước) để giữ cảm giác tự chủ."
      ],
      checklist: ["Một câu gọi tên cảm xúc đã dùng hôm nay", "Một lựa chọn đã để người bệnh tự quyết", "Một tiến bộ nhỏ đã khen", "Câu nên tránh: “có gì đâu mà buồn”"],
      quiz: [
        { q: "Câu nào giúp người bệnh thấy được thấu hiểu?", a: ["“Có gì đâu mà buồn”", "“Mẹ đang mệt vì tập lâu, phải không?”", "“Cố lên đi mẹ”"], c: 1 },
        { q: "Ba đang cáu và nói nặng lời. Bạn nên:", a: ["Cãi lại cho rõ đúng sai", "Tạm lùi ra vài phút, quay lại khi cả hai bình tĩnh", "Bỏ đi cả ngày"], c: 1 },
        { q: "Vì sao nên để người bệnh tự chọn việc nhỏ?", a: ["Để giữ cảm giác tự chủ", "Để gia đình đỡ việc", "Không có lý do"], c: 0 }
      ] }
  ],
  lessonDisclaimer: "Nội dung mang tính hướng dẫn chăm sóc, không thay thế chỉ định của bác sĩ.",
  lessonSources: "Tham khảo: tài liệu hướng dẫn chăm sóc người bệnh của Bộ Y tế; World Stroke Organization; American Stroke Association (BE-FAST). Bản demo – bác sĩ cố vấn sẽ duyệt trước khi phát hành.",

  /* Tư vấn tâm lý – chuyên viên tâm lý lâm sàng đối tác. Không phát sinh doanh thu cho STROKE360 */
  counseling: [
    { id: "tl-nguoi-nha", for: "Người chăm sóc", name: "Tư vấn 1–1 cho người nhà", format: "Trực tuyến (video hoặc điện thoại) · 45 phút",
      desc: "Nói ra điều khó nói với người trong nhà: mệt mỏi, tội lỗi, lo lắng về tiền bạc và công việc. Cùng chuyên viên tìm cách giữ sức lâu dài.",
      price: "Theo giá niêm yết của chuyên viên đối tác, gia đình trả trực tiếp. STROKE360 không thu phí kết nối." },
    { id: "tl-nguoi-benh", for: "Người bệnh", name: "Tư vấn 1–1 cho người bệnh", format: "Tại nhà hoặc trực tuyến · 45 phút",
      desc: "Đánh giá tâm trạng, hỗ trợ khi buồn chán, lo âu, mất động lực tập. Chuyên viên phối hợp với kỹ thuật viên PHCN và giới thiệu bác sĩ khi cần.",
      price: "Theo giá niêm yết của chuyên viên đối tác, gia đình trả trực tiếp. STROKE360 không thu phí kết nối." },
    { id: "tl-gia-dinh", for: "Cả gia đình", name: "Buổi gia đình", format: "Trực tuyến hoặc tại nhà · 60 phút",
      desc: "Cả nhà ngồi lại cùng chuyên viên: chia việc công bằng, nói về cảm xúc, thống nhất kế hoạch chăm sóc dài hạn.",
      price: "Theo giá niêm yết của chuyên viên đối tác, gia đình trả trực tiếp. STROKE360 không thu phí kết nối." },
    { id: "tl-nhom", for: "Người chăm sóc", name: "Nhóm hỗ trợ người nhà", format: "Tối Chủ nhật, 20:00–21:30 · Trực tuyến · 6–10 người",
      desc: "Chuyên viên tâm lý điều phối, có “người đồng hành” là người nhà đi trước. Nghe và được nghe, không phán xét.",
      price: "Miễn phí", free: true }
  ],
  counselingNote: "Chuyên viên tư vấn tâm lý không kê đơn thuốc. Khi cần, chuyên viên sẽ khuyên gặp bác sĩ chuyên khoa.",
  crisisNote: "Nếu bạn hoặc người thân có ý nghĩ tự làm hại mình: không ở một mình, gọi 115 hoặc đến cơ sở y tế gần nhất ngay.",

  /* Cộng đồng – nhân vật minh họa */
  stories: [
    { who: "Chị Lan, 38 tuổi", role: "Con gái, nhân viên văn phòng", stage: "Đang ở viện",
      quote: "Ban ngày em đi làm mà không thấp thỏm nữa. 18:30 là nhận nhật ký, biết mẹ ăn được bao nhiêu, bác sĩ dặn gì.",
      body: "Mẹ chị Lan đột quỵ vào thứ Hai. Chị chọn Ca ngày, tối vào trực với mẹ. Sau 12 ngày, mẹ ngồi dậy được và về nhà với gói S2B." },
    { who: "Anh Tuấn, 45 tuổi", role: "Từ Long An lên TP.HCM", stage: "Đang ở viện",
      quote: "Tôi không quen ai ở bệnh viện thành phố. Có người lo trọn ngày, tôi mới dám về quê lo việc nhà.",
      body: "Ba anh Tuấn cần người túc trực 24 giờ. Gói Trọn ngày giúp gia đình xoay xở trong 2 tuần đầu khó khăn nhất." },
    { who: "Cô Hạnh, 62 tuổi", role: "Người bệnh đang phục hồi", stage: "Mới về nhà",
      quote: "Tuần thứ 6, tôi tự cầm muỗng ăn cơm. Nhỏ thôi, nhưng cả nhà vỗ tay.",
      body: "Cô Hạnh tập 16 buổi với kỹ thuật viên tại nhà. Con gái cô học bài C1 để cùng mẹ tập mỗi tối." },
    { who: "Anh Minh, 41 tuổi", role: "Con trai, chăm ba 2 năm", stage: "Chăm sóc lâu dài",
      quote: "Có lúc tôi kiệt sức mà không dám nói. Nhóm người nhà là nơi tôi được nghe: anh cũng cần nghỉ.",
      body: "Anh Minh nay là “người đồng hành” cho các gia đình mới trong nhóm Zalo." },
    { who: "Bà Sáu, 70 tuổi", role: "Vợ người bệnh", stage: "Mới về nhà",
      quote: "Tấm thẻ BE-FAST dán ở tủ lạnh. Cháu nội tôi 10 tuổi cũng thuộc.",
      body: "Sau buổi hướng dẫn người nhà, cả gia đình bà Sáu biết nhận ra dấu hiệu tái phát và khi nào gọi 115." }
  ],
  groups: [
    { name: "Đang ở viện", desc: "Hỏi về thủ tục, ăn uống, xoay trở trong tuần đầu." },
    { name: "Mới về nhà", desc: "Chuẩn bị nhà cửa, tập luyện, thuốc và tái khám." },
    { name: "Chăm sóc lâu dài", desc: "Giữ sức cho người chăm sóc, chia sẻ kinh nghiệm dài hạn." }
  ],
  faqs: [
    ["Mẹ tôi hay ho khi uống nước, có sao không?", "Ho khi uống có thể là dấu hiệu sặc. Hãy dừng cho uống và báo điều dưỡng khoa hoặc bác sĩ để được đánh giá nuốt. Xem thêm bài A3."],
    ["Bao lâu thì nên xoay người cho ba một lần?", "Thông thường ít nhất mỗi 2 giờ, hoặc theo hướng dẫn của điều dưỡng khoa. Xem bài A2."],
    ["Ba tôi đỏ da ở mông, tôi có nên xoa bóp không?", "Không xoa bóp vùng da đỏ. Giảm tì đè vùng đó và báo điều dưỡng để được hướng dẫn."],
    ["Khi nào cần gọi 115 sau khi đã xuất viện?", "Khi có bất kỳ dấu hiệu BE-FAST nào xuất hiện đột ngột. Ghi lại giờ bắt đầu và gọi ngay. Xem bài B3."],
    ["Có nên tự mua thuốc bổ não cho mẹ?", "STROKE360 không tư vấn thuốc. Mọi thuốc cần hỏi bác sĩ điều trị."],
    ["Tôi trực đêm nhiều ngày, rất mệt. Phải làm sao?", "Bạn cần được nghỉ. Chia lịch trực, cân nhắc ca hỗ trợ, và xem bài C4."],
    ["Nhà tôi chật, có tập phục hồi tại nhà được không?", "Được. Kỹ thuật viên sẽ đến đánh giá không gian và chọn bài tập phù hợp."],
    ["Ba tôi buồn, không muốn tập sau khi về nhà. Có phải trầm cảm không?", "Buồn kéo dài trên 2 tuần, mất hứng thú, không muốn tập có thể là trầm cảm sau đột quỵ, một biến chứng điều trị được. Hãy báo bác sĩ điều trị; xem bài T1 và đặt lịch tư vấn tâm lý ở trang Học."],
    ["Ai trả lời các câu hỏi ở đây?", "Điều dưỡng giám sát của STROKE360, mỗi tối thứ Năm. Câu hỏi về chẩn đoán, thuốc sẽ được khuyên hỏi bác sĩ điều trị."]
  ],
  events: [
    { date: "29/10", title: "Ngày Đột quỵ Thế giới: “1 phút nhận biết đột quỵ (BE-FAST)”", where: "Trực tuyến + nhóm Zalo", hot: true },
    { date: "Thứ Ba hằng tuần", title: "Lớp hướng dẫn người nhà miễn phí", where: "Tại bệnh viện đối tác" },
    { date: "Tối thứ Năm", title: "Hỏi điều dưỡng", where: "Nhóm Zalo cộng đồng" },
    { date: "Tối Chủ nhật", title: "Nhóm hỗ trợ người nhà cùng chuyên viên tâm lý", where: "Trực tuyến" },
    { date: "Tháng 12", title: "Ngày hội phục hồi: gặp gỡ các gia đình đi trước", where: "TP.HCM" }
  ],

  /* Nhật ký mô phỏng – theo Phụ lục C */
  diary: [
    { t: "07:00", title: "Nhận bàn giao ca", note: "Đã nhận bàn giao từ người nhà, đọc nhật ký đêm. Đêm ngủ được khoảng 5 giờ.", tag: "Ký nhận" },
    { t: "07:30", title: "Vệ sinh răng miệng, thân thể", note: "Kiểm tra da vùng tì đè: không có vùng đỏ.", tag: "Da bình thường" },
    { t: "08:00", title: "Ăn sáng (ngồi 50°)", note: "Cháo xay theo chỉ định. Ăn 2/3 suất, không ho sặc.", tag: "Ăn 2/3" },
    { t: "09:15", title: "Đi theo khám buồng", note: "Bác sĩ dặn: tiếp tục thuốc như cũ, bắt đầu tập ngồi dậy 2 lần/ngày.", tag: "Dặn dò", hl: true },
    { t: "10:00", title: "Tập ngồi dậy", note: "Ngồi mép giường 5 phút có hỗ trợ, theo hướng dẫn của kỹ thuật viên. Không choáng.", tag: "5 phút" },
    { t: "12:00", title: "Ăn trưa", note: "Ăn hết suất, uống nước sệt 150 ml. Không ho sặc.", tag: "Ăn cả suất" },
    { t: "15:00", title: "Tập ngồi lần 2", note: "Ngồi 7 phút, tự giữ thăng bằng tốt hơn buổi sáng.", tag: "7 phút" },
    { t: "17:30", title: "Ăn tối", note: "Ăn 1/2 suất, mệt nhẹ. Đã báo điều dưỡng khoa, sinh hiệu ổn định.", tag: "Ăn 1/2" },
    { t: "18:30", title: "Tóm tắt gửi gia đình", note: "Mẹ ăn tốt, không sặc. Đã xoay trở 6 lần, da bình thường. Bác sĩ dặn tập ngồi 2 lần/ngày: hôm nay mẹ ngồi được 7 phút. Tối nay nhắc mẹ uống đủ nước.", tag: "Tóm tắt", summary: true }
  ]
};
