function changeLanguage(lang) {
            // Set language preference in local storage
            localStorage.setItem('lang', lang);
            
            // Update text content for elements with specific class
            const elements = document.querySelectorAll('.lang');
            elements.forEach(element => {
              const key = element.getAttribute('id');
              element.textContent = translations[key][lang];
            });

          }
          const translations = {
            home: {
              en: 'HOME',
              th: 'หน้าแรก'
            },  
            about: {
              en: 'ABOUT',
              th: 'เกี่ยวกับ'
            },
            contact : {
                en: 'CONTACT',
                th : 'ติดต่อ'
            },
            foreign : {
                en: 'FOREIGN',
                th: 'ชาวต่างชาติ'
            },
            thai : {
                en: 'THAI',
                th: 'คนไทย'
            },
            enter : {
                en: 'PLEASE ENTER THE PLACE OF ORIGIN AND DESTINATION',
                th: 'กรุณาใส่ต้นทางและจุดหมายปลายทาง'
            },
            btn1 : {
                en: 'NEXT',
                th: 'ถัดไป'
            },
            taxi : {
                en: 'TAXI-METER',
                th: 'แท็กซี่-มิเตอร์'
            },
            limousine : {
                en: 'LIMOUSINE',
                th: 'รถลีมูซีน'
            },
            btn2 : {
                en: 'CALCULATE',
                th: 'คำนวณราคา'
            },
            btn3 : {
                en: 'SHOW ROUTE',
                th: 'ดูปลายทาง'
            },
            destination : {
                en: 'DESTINATION',
                th: 'ปลายทาง'
            },
            price : {
                en: 'PRICE',
                th: 'ราคา'
            },
            unit : {
                en: 'UNIT',
                th: 'หน่วย'
            },
            detail : {
                en: 'DETAIL',
                th: 'รายละเอียดเส้นทาง'
            },
            btn : {
                en: 'MAP',
                th: 'แผนที่'
            },
            btn4 : {
                en: 'CALCULATE',
                th: 'คำนวณราคา'
            },
            name : {
                en: 'COMPANY NAME',
                th: 'ชื่อบริษัท'
            },
            place : {
                en: 'SERVICE LOCATION',
                th: 'สถานที่ที่ให้บริการ'
            },
            tel : {
                en: 'TEL',
                th: 'เบอร์ติดต่อ'
            },
            information : {
                en: 'CONTACT DETAILS',
                th: 'รายละเอียดการติดต่อ'
            },
            link : {
                en: 'LINK WEBSITE',
                th: 'ลิงก์เว็บไซต์'
            }
            
            
          };

       


        

 

       
    
       
      

