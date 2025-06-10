//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Dây chuyền kim cương',
            img: './assets/img/products/day-chuyen-kim-cuong.jpg',
            category: 'Dây chuyền',
            price: 9000000,
            desc: 'Hơn cả một món trang sức, đây là một biểu tượng trường tồn, một tuyệt tác vượt thời gian mà bạn sẽ trân trọng suốt đời. Chiếc vòng cổ vàng nguyên khối 14k ôm trọn viên kim cương огранки tròn ethically sourced, tỏa sáng rạng ngời trong ореол bezel tinh tế.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Dây chuyền vệ tinh',
            img: './assets/img/products/day-chuyen-ve-tinh.jpg',
            category: 'Dây chuyền',
            price: 3300000,
            desc: 'Chiếc vòng cổ dễ thương nhất mà bạn từng sở hữu. Được làm thủ công bằng vermeil, một lớp vàng 18k dày trên bạc sterling với đá sapphire trắng. Một món đồ sẽ phù hợp với áo phông hoặc váy dự tiệc yêu thích của bạn.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Dây chuyền Sapphire nổi',
            img: './assets/img/products/day-chuyen-sapphire-noi.jpg',
            category: 'Dây chuyền',
            price: 3300000,
            desc: 'Viên sapphire lấp lánh, tựa như một vì sao đêm được chạm khắc tinh xảo, sẽ biến món trang sức này thành tâm điểm của mọi ánh nhìn, thu hút mọi sự chú ý vào vẻ đẹp quyến rũ của bạn.'
        },
        {
            id: 4,
            status: 1, title: 'Dây chuyền Topaz tròn',
            img: './assets/img/products/day-chuyen-topaz-tron.jpg',
            category: 'Dây chuyền',
            price: 2500000,
            desc: 'Hãy dành tặng người ấy một món trang sức mới mẻ tinh tế, sang trọng và rõ ràng phù hợp với mọi thứ họ đang sở hữu. Mỗi thiết kế được chế tác thủ công bằng vàng vermeil 18k, nổi bật với viên đá topaz cắt tròn lấp lánh một điểm nhấn nhẹ nhàng nhưng đầy cuốn hút cho mọi phong cách.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Dây chuyền Baguette nhiều lớp',
            img: './assets/img/products/day-chuyen-baguette-nhieu-lop.jpg',
            category: 'Dây chuyền',
            price: 3800000,
            desc: 'Bạn sẽ nhận được gì khi kết hợp đá quý yêu thích với kiểu cắt yêu thích của mình? Tất nhiên là chiếc vòng cổ nhiều lớp trong mơ của bạn rồi. Thiết kế này mang đậm dấu ấn cá nhân, nổi bật và tinh tế, phù hợp cho cả những khoảnh khắc đời thường lẫn những dịp đặc biệt.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Vòng cổ ngọc trai Sloan',
            img: './assets/img/products/vong-co-ngoc-trai-sloan.jpg',
            category: 'Dây chuyền',
            price: 12500000,
            desc: 'Một tác phẩm nghệ thuật với ngọc trai và mắt xích bạc cong. Vòng cổ ngọc trai Sloan sẽ đồng hành cùng bạn khi ra phố. Những viên ngọc trai nút có nhiều kích cỡ khác nhau nằm phẳng trên ngực bạn và phản chiếu ánh sáng để bạn thu hút mọi ánh nhìn. Được tạo ra để khiến bạn cảm thấy đặc biệt.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Nhẫn kim cương',
            category: 'Nhẫn',
            img: './assets/img/products/nhan-kim-cuong.jpg',
            price: 10000000,
            desc: 'Thiết kế tinh tế nhất mà bạn từng thấy. Chiếc nhẫn này kết hợp hoàn hảo với bất kỳ mẫu nhẫn Stacker nào của chúng tôi và dễ dàng nâng cấp mọi trang phục, từ giản dị đến trang trọng. Một điểm nhấn nhỏ nhưng đủ sức tạo nên sự khác biệt.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Nhẫn hình vòm',
            img: './assets/img/products/nhan-hinh-vom.jpg',
            category: 'Nhẫn',
            price: 2500000,
            desc: 'Một tác phẩm mở và hấp dẫn lấy cảm hứng từ chuyển động chậm rãi, có chủ đích. Mỗi đường cong phản ánh góc độ độc đáo của riêng nó và của bạn.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Nhẫn kim cương nhân tạo',
            category: "Nhẫn",
            img: './assets/img/products/nhan-kim-cuong-nhan-tao.jpg',
            price: 3800000,
            desc: 'Hai thì tốt hơn một. Với vành bezel, những viên kim cương Kimberly Process 0,03 carat này sẽ nhảy múa. Thiết kế mở khiến chiếc nhẫn này nổi bật ngay cả khi xếp chồng lên nhau, như Stacker, Twist hoặc Beaded Rings.',
        },
        {
            id: 10,
            status: 1, 
            title: 'Bộ nhẫn xếp chồng Wishbone',
            category: "Nhẫn",
            img: './assets/img/products/bo-nhan-xep-chong-wishbone.jpg',
            price: 10200000,
            desc: 'Bộ nhẫn xếp chồng Wishbone mang đến vẻ thanh lịch tối giản nhưng đầy cuốn hút. Dù đeo riêng lẻ hay kết hợp cùng nhau, chúng đều tỏa sáng theo cách riêng biệt và nâng tầm mọi phong cách.',
        },
        {
            id: 11,
            status: 1, 
            title: 'Nhẫn hạt',
            category: 'Nhẫn',
            img: './assets/img/products/nhan-hat.jpg',
            price: 3300000,
            desc: 'Chiếc nhẫn đính hạt này tạo nên một tuyên bố đủ nổi bật để đeo một mình, nhưng cũng linh hoạt để kết hợp cùng những món khác. Được chế tác thủ công từ vàng trắng 14k mạ rhodium, với độ dày 1,3 mm, chiếc nhẫn đủ bền để đồng hành cùng bạn trong mọi hành trình.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Nhẫn ống hỗn hợp',
            img: './assets/img/products/nhan-ong-hon-hop.jpg',
            category: 'Nhẫn',
            price: 2500000,
            desc: 'Một bài học tinh tế về sự tương phản với thiết kế ống kim loại hỗn hợp với hai chiều rộng và hai tông màu mang đến vẻ ngoài độc đáo, đầy cá tính. Được chế tác thủ công từ vàng vermeil 18k và bạc nguyên chất, mẫu trang sức này cho phép bạn thoải mái thể hiện phong cách riêng bằng cách xếp chồng các chất liệu yêu thích ở vị trí trung tâm.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Khuyên tai vòng Deia',
            img: './assets/img/products/khuyen-tai-vong-deia.jpg',
            category: 'Khuyên tai',
            price: 4000000,
            desc: 'Lấp lánh vừa đủ, tinh tế đúng lúc – hoa tai vòng Deia là điểm nhấn hoàn hảo cho mọi phong cách. Với thiết kế mảnh nhẹ, đường cong mềm mại và độ sáng nổi bật, Deia mang đến cảm giác thanh lịch nhưng không hề đơn điệu.'
        },
        {
            id: 14,
            status: 1, 
            title: 'Khuyên tai xoắn ốc xoay độc đáo ',
            img: './assets/img/products/khuyen-tai-xoan-oc-xoay-doc-dao.jpg',
            category: 'Khuyên tai',
            price: 2500000,
            desc: 'Khác biệt từ cái nhìn đầu tiên – đôi hoa tai xoắn ốc với cơ chế xoay độc đáo mang đến một trải nghiệm đeo mới lạ và cuốn hút. Thiết kế xoắn mềm mại ôm sát tai, tạo cảm giác hiện đại, tinh tế nhưng vẫn đầy cá tính.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Khuyên tai giọt nước đôi ',
            img: './assets/img/products/khuyen-tai-giot-nuoc-doi.jpg',
            category: 'Khuyên tai',
            price: 1800000,
            desc: 'Khuyên tai giọt nước đôi mang đến vẻ đẹp mềm mại và thanh thoát với hai tầng giọt nước chuyển động tinh tế theo từng cử chỉ. Thiết kế nhẹ nhàng nhưng đầy điểm nhấn, lý tưởng để tô điểm cho phong cách hàng ngày hoặc thêm phần nổi bật trong những dịp đặc biệt.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Khuyên tai vòng xoắn bạc Nappa',
            img: './assets/img/products/khuyen-tai-vong-xoan-bac-nappa.jpg',
            category: 'Khuyên tai',
            price: 2000000,
            desc: 'Khuyên tai vòng xoắn bạc Nappa nổi bật với thiết kế tinh tế và đường xoắn mềm mại, tạo nên vẻ đẹp hiện đại đầy cuốn hút. Chất liệu bạc sáng bóng kết hợp cùng kiểu dáng độc đáo giúp bạn dễ dàng phối hợp với mọi phong cách, từ năng động thường ngày đến những dịp đặc biệt.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Khuyên tai vòng cong kim cương bạc',
            img: './assets/img/products/khuyen-tai-vong-cong-kim-cuong-bac.jpg',
            category: 'Khuyên tai',
            price: 3500000,
            desc: 'Vẻ đẹp thanh lịch với một chút lấp lánh, khuyên tai vòng cong kim cương bạc là điểm nhấn hoàn hảo cho mọi phong cách. Được chế tác từ bạc sáng bóng và đính đá CZ tinh xảo, thiết kế uốn cong mềm mại ôm sát tai tạo cảm giác vừa hiện đại vừa nữ tính.'
        },
        {
            id: 18,
            status: 1, 
            title: 'Khuyên tai đinh tán nút bạc',
            img: './assets/img/products/khuyen-tai-dinh-tan-nut-bac.jpg',
            category: 'Khuyên tai',
            price: 1200000,
            desc: 'Khuyên tai đinh tán nút bạc mang đến vẻ đẹp hiện đại với thiết kế tối giản và tinh tế. Kiểu dáng nhỏ gọn, dễ đeo hàng ngày nhưng vẫn đủ nổi bật để tạo điểm nhấn cho phong cách của bạn.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Vòng tay xích mỏ neo',
            img: './assets/img/products/vong-tay-xich-mo-neo.jpg',
            category: 'Vòng tay',
            price: 4500000,
            desc: 'Được làm thủ công bằng vàng nguyên khối 14k, chiếc vòng này được đặt tên theo cách các mắt xích kết nối với nhau giống như một sợi dây xích của tàu giữ một mỏ neo.'
        },
        {
            id: 20,
            status: 1, 
            title: 'Vòng tay hoa sen',
            img: './assets/img/products/vong-tay-hoa-sen.jpg',
            category: 'Vòng tay',
            price: 2500000,
            desc: 'Vòng tay hoa sen được chế tác từ vàng Vermeil 18k, kết hợp cùng đá sapphire trắng tinh khiết, mang đến vẻ đẹp thanh khiết và đầy ý nghĩa. Hình ảnh hoa sen tượng trưng cho sự thanh cao và bình an, là món trang sức nhẹ nhàng nhưng giàu cảm xúc, lý tưởng để đeo mỗi ngày hoặc dành tặng người bạn trân quý.'
        },
        {
            id: 21,
            status: 1, 
            title: 'Vòng tay mắt quỷ kim cương Pavé',
            category: 'Vòng tay',
            img: './assets/img/products/vong-tay-mat-quy-kim-cuong-pave.jpg',
            price: 7000000,
            desc: 'Biểu tượng mắt ác mang ý nghĩa sâu sắc trong nhiều nền văn hóa, được tin là có khả năng bảo vệ người đeo khỏi sự đố kỵ và năng lượng tiêu cực. Với hình ảnh đặc trưng, nó được cho là phản chiếu và bẻ cong điều xấu trở lại nơi nó bắt nguồn, như một lá bùa hộ mệnh vừa bí ẩn vừa mạnh mẽ.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Vòng tay Pavé Diamond Sunburst',
            category: 'Vòng tay',
            img: './assets/img/products/vong-tay-pave-diamond-sunburst.jpg',
            price: 4500000,
            desc: 'Vòng tay Pavé Diamond Sunburst là sự kết hợp rực rỡ giữa vàng 14k và những viên kim cương thiên nhiên lấp lánh. Lấy cảm hứng từ ánh mặt trời tỏa sáng, thiết kế pavé tinh xảo tạo nên hiệu ứng lấp lánh nổi bật, mang đến cảm giác ấm áp, sang trọng và đầy năng lượng tích cực cho người đeo.'
        },

        {
            id: 23,
            status: 1, 
            title: 'Vòng tay Geo Station',
            category: 'Vòng tay',
            img: './assets/img/products/vong-tay-geo-station.jpg',
            price: 5600000,
            desc: 'Phá vỡ sự bình thường. Vòng tay Geo Station có viên đá Topaz xanh London được gắn trên kim loại mô phỏng hình dạng và mặt cắt của đá quý thô.'
        },

        {
            id: 24,
            status: 1, 
            title: 'Vòng tay chuỗi Serpentine',
            img: './assets/img/products/vong-tay-chuoi-serpentine.jpg',
            category: 'Vòng tay',
            price: 950000,
            desc: 'Thanh thoát, quyến rũ và nổi bật—mọi thứ bạn cần trong một sợi dây chuyền có mắt xích dẹt, một được thiết kế để bạn thoải mái đeo cả ngày.'
        },
        {
            id: 25,
            status: 1, 
            title: 'Lắc chân đá quý ba bóng',
            img: './assets/img/products/lac-chan-da-quy-ba-bong.jpg',
            category: 'Lắc chân',
            price: 2500000,
            desc: 'Lắc chân đá quý ba bóng mang vẻ đẹp nhẹ nhàng và tinh tế với ba viên đá được chọn lọc kỹ lưỡng, tạo điểm nhấn lấp lánh trên từng bước chân. T'
        },

        {
            id: 26,
            status: 1, 
            title: 'Vòng tay đá quý hình oval',
            category: 'Vòng tay',
            img: './assets/img/products/vong-tay-da-quy-hinh-oval.jpg',
            price: 3900000,
            desc: 'Vòng tay đá quý hình oval nổi bật với những viên đá cắt dáng oval mềm mại, mang đến vẻ đẹp thanh lịch và đầy nữ tính. '
        },

        {
            id: 27,
            status: 1, 
            title: 'Lắc chân ngọc trai',
            category: 'Lắc chân',
            img: './assets/img/products/lac-chan-ngoc-trai.jpg',
            price: 4200000,
            desc:'Lắc chân ngọc trai có móc khóa tôm hùm bằng đồng thanh lịch và dây chuyền tinh tế được chế tác từ đồng và ngọc trai giả bóng. Sang trọng và vượt thời gian, chúng mang đến nét tinh tế cho mọi phong cách.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Lắc tay dây rút hoa tuyết',
            category: 'Vòng tay',
            img: './assets/img/products/lac-tay-day-rut-hoa-tuyet.jpg',
            price: 3500000,
            desc: 'Sự kết hợp hoàn hảo giữa vẻ đẹp tinh khôi và thiết kế linh hoạt. Họa tiết hoa tuyết được chế tác tỉ mỉ, gợi cảm giác nhẹ nhàng và thanh thoát, trong khi phần dây rút giúp dễ dàng điều chỉnh vừa vặn với mọi cổ tay. '
        },

        {
            id: 29,
            status: 1, 
            title: 'Lắc chân hoa bong bóng',
            category: 'Lắc chân',
            img: './assets/img/products/lac-chan-hoa-bong-tron.jpg',
            price: 1500000,
            desc: 'Vẻ đẹp tròn đầy và mềm mại của những cánh hoa được tái hiện tinh tế qua từng chi tiết nhỏ. Thiết kế mang đến cảm giác nhẹ nhàng, nữ tính và luôn nổi bật dù kết hợp với bất kỳ trang phục nào, từ đơn giản đến dịu dàng, thanh lịch.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Lắc chân Marcia',
            category: 'Lắc chân',
            img: './assets/img/products/lac-chan-marcia.jpg',
            price: 5500000,
            desc: 'Lắc chân Marcia có móc khóa tôm hùm bằng đồng sang trọng và dây chuyền tuyệt đẹp được chế tác từ đồng và đá cubic zirconia lấp lánh. Thanh lịch và đa năng, chúng tạo thêm nét rực rỡ cho bất kỳ trang phục nào. '
        },

        {
            id: 31,
            status: 1,
            title: 'Hạt Charm bạc đính đá',
            category: 'Khác',
            img: './assets/img/products/hat-charm-bac-dinh-da.jpg',
            price: 590000,
            desc: 'Được chế tác từ bạc sáng bóng và đính đá tinh xảo, hạt charm này mang đến điểm nhấn lấp lánh đầy cuốn hút cho vòng tay của bạn. '
        },

        {
            id: 32,
            status: 1, 
            title: 'Hạt charm xỏ hình dẹt tròn hoa',
            category: 'Khác',
            img: './assets/img/products/hat-charm-xo-hinh-det-tron-hoa.jpg',
            price: 300000,
            desc: 'Thiết kế hình dẹt tròn kết hợp họa tiết hoa tinh tế mang đến vẻ đẹp nhẹ nhàng và đầy nữ tính. Hạt charm này là điểm nhấn hoàn hảo để thêm phần mềm mại và thanh thoát cho bất kỳ chiếc vòng nào, đồng thời thể hiện gu thẩm mỹ dịu dàng và tinh tế của bạn.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Hạt charm xỏ hình dẹt tròn',
            category: 'Khác',
            img: './assets/img/products/hat-charm-xo-hinh-det-tron.jpg',
            price: 270000,
            desc: 'Với dáng tròn dẹt đơn giản nhưng tinh tế, hạt charm này mang lại vẻ thanh lịch hiện đại cho mọi kiểu vòng. Dễ dàng kết hợp với các charm khác, đây là lựa chọn lý tưởng để tạo nên một thiết kế riêng mang đậm dấu ấn cá nhân.'
        },

        {
            id: 34,
            status: 1, 
            title: 'Hạt Charm bạc đính đá cánh bướm',
            category: 'Khác',
            img: './assets/img/products/hat-charm-bac-dinh-da-canh-buom.jpg',
            price: 590000,
            desc: 'Lấy cảm hứng từ vẻ đẹp mong manh và bay bổng của cánh bướm, hạt charm bạc đính đá này được chế tác tinh xảo để tỏa sáng nhẹ nhàng trên cổ tay. '
        },

        {
            id: 35,
            status: 1, 
            title: 'Hạt Charm bạc đính đá trái tim',
            category: 'Khác',
            img: './assets/img/products/hat-charm-bac-dinh-da-trai-tim.jpg',
            price: 490000,
            desc: 'Hạt charm bạc đính đá hình trái tim là biểu tượng dịu dàng của tình yêu và sự gắn kết. Với thiết kế tinh xảo và những viên đá lấp lánh, món charm này không chỉ làm đẹp cho vòng tay mà còn là cách thể hiện cảm xúc một cách tinh tế và ý nghĩa.'
        },

        {
            id: 36,
            status: 1, 
            title: 'Hạt Charm bạc đính đá xoay bướm',
            category: 'Khác',
            img: './assets/img/products/hat-charm-bac-dinh-da-xoay-buom.jpg',
            price: 450000,
            desc: 'Lấy cảm hứng từ sự nhẹ nhàng và tự do, thiết kế xoay linh hoạt kết hợp cùng những viên đá lấp lánh tạo nên nét duyên dáng đầy sinh động. Món trang sức này không chỉ tô điểm mà còn mang đến cảm giác sống động, giúp bạn thể hiện cá tính.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Hạt Charm bạc tim gấu',
            category: 'Khác',
            img: './assets/img/products/hat-charm-bac-tim-gau.jpg',
            price: 450000,
            desc: 'Thiết kế dễ thương và tinh tế hòa quyện trong hình dáng trái tim cùng họa tiết gấu nhỏ xinh, tạo nên điểm nhấn ngọt ngào và độc đáo cho chiếc vòng tay. Món charm này mang lại vẻ đáng yêu nhưng không kém phần tinh tế, thể hiện nét cá tính trẻ trung và đầy sức sống.'
        },
        {
            id: 38,
            status: 1, 
            title: 'Hạt Charm bạc tim khóa',
            category: 'Khác',
            img: './assets/img/products/hat-charm-bac-tim-khoa.jpg',
            price: 590000,
            desc: 'Hình trái tim tượng trưng cho tình yêu vững bền được thể hiện qua thiết kế charm bạc với chi tiết chiếc khóa tinh xảo.'
        },
        {
            id: 39,
            status: 1, 
            title: 'Hạt Charm bạc tim Baby',
            category: 'Khác',
            img: './assets/img/products/hat-charm-bac-tim-baby.jpg',
            price: 590000,
            desc: 'Thiết kế charm bạc hình trái tim Baby mang đến vẻ ngọt ngào và dịu dàng với đường nét mềm mại, tinh tế. Món trang sức này như lời nhắn nhủ yêu thương nhẹ nhàng, phù hợp để làm điểm nhấn tinh tế cho chiếc vòng tay của bạn hoặc dành tặng người thân yêu.'
        },

        {
            id: 40,
            status: 1, 
            title: 'Hạt Charm bạc trái tim lấp lánh',
            category: 'Khác',
            img: './assets/img/products/hat-charm-bac-trai-tim-lap-lanh.jpg',
            price: 450000,
            desc: ' Charm với thiết kế trái tim mềm mại, điểm nhấn là viên đá tím cắt hình trái tim lấp lánh tinh tế.'
        },
        {
            id: 41,
            status: 1, 
            title: 'Hạt Charm bạc tim nơ',
            category: 'Khác',
            img: './assets/img/products/hat-charm-bac-tim-no.jpg',
            price: 410000,
            desc: 'Thiết kế trái tim mềm mại kết hợp cùng chi tiết nơ nhỏ xinh tạo nên vẻ đẹp ngọt ngào và đầy nữ tính.'
        },
        {
            id: 42,
            status: 1, 
            title: 'Hạt Charm bạc mũi tên tình yêu',
            category: 'Khác',
            img: './assets/img/products/hat-charm-bac-mui-ten-tinh-yeu.jpg',
            price: 450000,
            desc: 'Lấy cảm hứng từ mũi tên của thần Cupid, thiết kế charm này gợi nhắc đến những rung động đầu đời và tình yêu chân thành.',
        },
        {
            id: 43,
            status: 1, 
            title: 'Hạt Charm bạc cánh bướm tím',
            category: "Khác",
            img: './assets/img/products/hat-charm-bac-canh-buom-tim.jpg',
            price: 490000,
            desc: 'Thiết kế cánh bướm với sắc tím dịu dàng gợi cảm giác tự do và bay bổng, như một lời nhắc về sự đổi thay và vẻ đẹp của hành trình trưởng thành. ',
        },
        {
            id: 44,
            status: 1, 
            title: 'Hạt Charm bạc gấu sao đính đa',
            category: "Khác",
            img: './assets/img/products/hat-charm-bac-gau-sao-dinh-da.jpg',
            price: 690000,
            desc: 'Hình ảnh chú gấu ôm ngôi sao được đính đá lấp lánh mang đến cảm giác ấm áp và mơ mộng. Thiết kế đáng yêu này là biểu tượng của những ước mơ ngọt ngào, lý tưởng để làm điểm nhấn tinh tế và đầy cảm xúc cho chiếc vòng tay của bạn.',
        },
        {
            id: 45,
            status: 1, 
            title: 'Hạt Charm bạc đính đá dây chân pet',
            category: "Khác",
            img: './assets/img/products/hat-charm-bacdinh-da-day-chan-pet-.jpg',
            price: 790000,
            desc: 'Thiết kế lấy cảm hứng từ dấu chân thú cưng, kết hợp cùng những viên đá lấp lánh tạo nên món charm vừa đáng yêu vừa ý nghĩa.',
        },
        {
            id: 46,
            status: 1, 
            title: 'Hạt Charm bạc chú chó bóng bay',
            category: "Khác",
            img: './assets/img/products/hat-charm-bac-chu-cho-bong-bay.jpg',
            price: 490000,
            desc: ' Lấy cảm hứng từ hình ảnh chú chó bong bóng vui nhộn, thiết kế charm này mang đến cảm giác tươi mới và tinh nghịch.',
        },
        {
            id: 47,
            status: 1, 
            title: 'Hạt Charm bạc gấu xanh',
            category: "Khác",
            img: './assets/img/products/hat-charm-bac-gau-xanh.jpg',
            price: 590000,
            desc: 'Với hình dáng chú gấu nhỏ đáng yêu cùng sắc xanh nổi bật, thiết kế charm này mang đến cảm giác tươi vui và ấm áp. Là món phụ kiện lý tưởng để thể hiện sự hồn nhiên và nét dễ thương trong phong cách của bạn.',
        },
        {
            id: 48,
            status: 1, 
            title: 'Hạt Charm bạc dây cỏ bốn lá đính đá',
            category: "Khác",
            img: './assets/img/products/hat-charm-bac-day-co-bon-la-dinh-da.jpg',
            price: 890000,
            desc: 'Biểu tượng cỏ bốn lá may mắn được tái hiện tinh xảo trên nền bạc sáng cùng những viên đá lấp lánh. Thiết kế mang đến thông điệp tích cực và hy vọng, là điểm nhấn ý nghĩa cho chiếc vòng tay bạn luôn mang theo bên mình.',
        },
        {
            id: 49,
            status: 1, 
            title: 'Hạt Charm bạc bông hoa đính đá',
            category: "Khác",
            img: './assets/img/products/hat-charm-bac-bong-hoa-dinh-da.jpg',
            price: 450000,
            desc: 'Thiết kế bông hoa thanh thoát được tô điểm bằng những viên đá lấp lánh, tạo nên vẻ đẹp rạng rỡ và nữ tính. ',
        },
        {
            id: 50,
            status: 1, 
            title: 'Hạt Charm bạc ngôi sao đính đá',
            category: "Khác",
            img: './assets/img/products/hat-charm-bac-ngoi-sao-dinh-da.jpg',
            price: 610000,
            desc: 'Lấp lánh như một vì sao nhỏ giữa bầu trời đêm, thiết kế charm bạc đính đá này mang đến vẻ đẹp rạng rỡ và cuốn hút.',
        },
        {
            id: 51,
            status: 1, 
            title: 'Trâm cài áo vest cành oliu đính đá zircon',
            category: "Khác",
            img: './assets/img/products/tram-cai-ao-vest-canh-oliu-dinh-da-zircon.jpg',
            price: 490000,
            desc: 'Lấy cảm hứng từ cành oliu – biểu tượng của hòa bình và chiến thắng – thiết kế trâm cài này mang vẻ đẹp thanh lịch và đầy ý nghĩa. Những viên đá zircon lấp lánh được đính tỉ mỉ trên nền kim loại sáng, tạo nên điểm nhấn sang trọng cho áo vest hay bất kỳ trang phục trang nhã nào.',
        },
        {
            id: 52,
            status: 1, 
            title: 'Trâm cài áo lông vũ tinh khôi khảm đá ',
            category: "Khác",
            img: './assets/img/products/tram-cai-ao-long-vu-tinh-khoi-kham-da.jpg',
            price: 410000,
            desc: 'Thiết kế lông vũ mềm mại khảm đá tinh xảo mang đến cảm giác nhẹ nhàng, thanh thoát và đầy cuốn hút. Trâm cài không chỉ là điểm nhấn tinh tế cho trang phục mà còn gợi lên vẻ đẹp tự do và bay bổng trong phong cách của bạn.',
        },
        {
            id: 53,
            status: 1, 
            title: 'Trâm cài áo vòng hoa bướm đính đá pha lê xanh blue',
            category: "Khác",
            img: './assets/img/products/tram-cai-ao-vong-hoa-buom-dinh-da-pha-le-xanh-blue.jpg',
            price: 890000,
            desc: 'Thiết kế vòng hoa kết hợp cùng hình ảnh cánh bướm đính đá pha lê xanh tạo nên vẻ đẹp tươi mát và đầy sức sống.',
        },
        {
            id: 54,
            status: 1, 
            title: 'Trâm cài áo vòng nguyệt quế đính đá ',
            category: "Khác",
            img: './assets/img/products/tram-cai-ao-vong-nguyet-que-dinh-da.jpg',
            price: 320000,
            desc: 'Lấy cảm hứng từ vòng nguyệt quế – biểu tượng của vinh quang và chiến thắng – thiết kế trâm cài này được đính đá tỉ mỉ, tạo nên vẻ ngoài sang trọng và tinh tế. Món phụ kiện hoàn hảo để tôn lên phong thái tự tin và đẳng cấp trong từng chi tiết.',
        },
        {
            id: 55,
            status: 1, 
            title: 'Trâm cài áo cánh bướm đính đá pha lê ánh dương',
            category: "Khác",
            img: './assets/img/products/tram-cai-ao-canh-buom-dinh-da-pha-le-anh-duong.jpg',
            price: 890000,
            desc: 'Thiết kế cánh bướm khảm đá pha lê ánh dương gợi cảm giác rực rỡ và tràn đầy sức sống như ánh nắng buổi sớm.',
        },
        {
            id: 56,
            status: 1, 
            title: 'Trâm Phượng Hoàng Cổ Thi tua rua đèn lồng gắn ngọc',
            category: "Khác",
            img: './assets/img/products/tram-cai-phuong-hoang-co-thi-tua-rua-den-long-gan-ngoc.jpg',
            price: 2900000,
            desc: 'Mang hơi thở hoài cổ và vẻ đẹp quyền quý, thiết kế trâm Phượng Hoàng được tô điểm bằng tua rua đèn lồng và điểm xuyết ngọc tinh tế. Món phụ kiện này không chỉ tôn vinh nét duyên dáng mà còn thể hiện sự sang trọng và khí chất nổi bật trong từng chi tiết.',
        },
        {
            id: 57,
            status: 1, 
            title: 'Trâm Sen Ngào Ngạt',
            category: "Khác",
            img: './assets/img/products/tram-sen-ngao-ngat.jpg',
            price: 1200000,
            desc: 'Hương sen thanh khiết hòa quyện cùng vị trà tinh tế, mang đến trải nghiệm thư giãn dịu dàng và thanh tao trong từng ngụm thưởng thức.',
        },
        {
            id: 58,
            status: 1, 
            title: 'Trâm Mai Phú Qúy',
            category: "Khác",
            img: './assets/img/products/tram-mai-phu-quy.jpg',
            price: 1300000,
            desc: 'Chế tác tỉ mỉ, kết hợp hài hòa giữa hoa mai tinh xảo và chất liệu cao cấp, mang đến vẻ đẹp sang trọng và đẳng cấp. ',
        },
        {
            id: 59,
            status: 1, 
            title: 'Trâm bạc cài tóc gắn ngọc, đá thạch anh tự nhiên',
            img: './assets/img/products/tram-bac-cai-toc-gan-ngoc-da-thach-anh-tu-nhien.jpg',
            category: 'Khác',
            price: 130000,
            desc:'Trâm bạc cài tóc truyền thống được chế tác tinh tế, kết hợp hài hòa giữa ngọc và đá thạch anh tự nhiên, tôn vinh vẻ đẹp sang trọng và quý phái.'
        },
        {
            id: 60,
            status: 1, 
            title: 'Xược cài tóc Phượng Hoàng',
            img: './assets/img/products/xuoc-cai-toc-phuong-hoang.jpg',
            category: 'Khác',
            price: 1500000,
            desc: 'Thiết kế tinh xảo với họa tiết phượng hoàng uy nghi, sử dụng chất liệu cao cấp và đá quý tự nhiên, tạo nên vẻ đẹp sang trọng và quyền quý. Đây không chỉ là món trang sức mà còn biểu tượng của sự thịnh vượng, phú quý và sự kiêu hãnh vượt thời gian.'
        },
        {
            id: 61,
            status: 1, 
            title: 'Dây chuyền pha lê ORBIT',
            img: './assets/img/products/day-chuyen-pha-le-orbit.jpg',
            category: 'Dây chuyền',
            price: 10500000,
            desc: 'Dây chuyền ORBIT nổi bật với thiết kế hai vòng tròn lồng vào nhau, trong đó một vòng được đính pha lê lấp lánh, tạo điểm nhấn tinh tế và thanh lịch. Sản phẩm mang ý nghĩa gắn kết bền chặt, phù hợp để làm quà tặng hoặc phụ kiện hàng ngày, dễ dàng phối cùng nhiều phong cách thời trang khác nhau.'
        },
        {
            id: 62,
            status: 1, 
            title: 'Dây chuyền đá TSAVORITE',
            img: './assets/img/products/day-chuyen-da-tsavorite.jpg',
            category: 'Dây chuyền',
            price: 6700000,
            desc: 'Dây chuyền nổi bật với mặt tròn nhỏ mạ vàng, được đính viên đá tsavorite xanh lục ở giữa, tạo điểm nhấn sang trọng và quý phái. Thiết kế đơn giản nhưng tinh tế, thích hợp để đeo hàng ngày hoặc làm quà tặng ý nghĩa cho người thân yêu.'
        },
        {
            id: 63,
            status: 1, 
            title: 'Nhẫn đá TOPAZ',
            img: './assets/img/products/nhan-da-topaz.jpg',
            category: 'Nhẫn',
            price: 5600000,
            desc: 'Chiếc nhẫn được thiết kế với hai vòng song song tinh tế, trong đó một vòng được đính đá Topaz trắng lấp lánh, tạo hiệu ứng nổi bật nhưng vẫn giữ được nét thanh lịch. Chất liệu bạc sáng bóng mang lại vẻ hiện đại, phù hợp cho cả trang phục thường ngày lẫn trang trọng.'
        },
        {
            id: 64,
            status: 1, 
            title: 'Nhẫn kim cương PAVE',
            img: './assets/img/products/nhan-kim-cuong-pave.jpg',
            category: 'Nhẫn',
            price: 3900000,
            desc: 'Chiếc nhẫn được chế tác từ bạc 925, thiết kế độc đáo với kiểu dáng hở và điểm nhấn là viên đá chủ cắt hình vuông tinh xảo. Bề mặt nhẫn được đính dày các viên đá pave lấp lánh, mang đến vẻ đẹp hiện đại, sang trọng và thu hút mọi ánh nhìn. Phù hợp làm nhẫn đôi, nhẫn kỷ niệm hoặc phụ kiện thời trang cao cấp.'
        },
        {
            id: 65,
            status: 1, 
            title: 'Khuyên tai kim cương xanh',
            img: './assets/img/products/khuyen-tai-kim-cuong-xanh.jpg',
            category: 'Khuyên tai',
            price: 11900000,
            desc: 'Đôi khuyên tai tinh xảo chế tác từ bạc 925, nổi bật với hàng đá kim cương xanh rực rỡ đính trên vòng tròn và điểm nhấn là viên đá giọt lệ trắng lấp lánh đung đưa. Thiết kế hiện đại, thanh lịch, tôn lên vẻ đẹp sang trọng và quyến rũ cho người đeo.'
        },
        {
            id: 66,
            status: 1, 
            title: 'Khuyên tai ngọc trai',
            img: './assets/img/products/khuyen-tai-ngoc-trai.jpg',
            category: 'Khuyên tai',
            price: 2150000,
            desc: 'Khuyên tai bạc thiết kế vòng xoắn tinh tế, kết hợp cùng viên ngọc trai tự nhiên dáng tròn giọt lệ, mang đến vẻ đẹp nhẹ nhàng, thanh lịch và đầy nữ tính. Phù hợp với nhiều phong cách từ dịu dàng đến sang trọng.'
        },



        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Chu Thị Hà Thu",
            phone: "0368249123",
            password: "123456",
            address: 'https://github.com/hathu1485',
            email: 'hathu1485@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Phạm Thanh Bình",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();
