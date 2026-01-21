document.addEventListener("DOMContentLoaded", function () {
    // تفعيل تأثيرات على البطاقات المختلفة
    addScaleEffect(".social-card");
    addScaleEffect(".info-card");
});



/**
 * إضافة تأثيرات عند ظهور البطاقات
 * @param {string} selector
 */
function addScaleEffect(selector) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.style.transform = entry.isIntersecting ? "scale(1.05)" : "scale(1)";
            entry.target.style.transition = "transform 0.5s ease-in-out";
        });
    });

    elements.forEach(element => observer.observe(element));
}



document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".stat h3");
    const speed = 200; // سرعة العداد

    const startCounting = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {
            const increment = target / speed;
            if (count < target) {
                count += increment;
                counter.innerText = `${Math.floor(count)}`;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = `${target}`;
            }
        };

        updateCounter();
    };

    const observeElements = () => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startCounting(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach((counter) => {
            observer.observe(counter);
        });
    };

    observeElements();
});
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden, .fade-in, .slide-left, .slide-right");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
});




document.addEventListener("DOMContentLoaded", function () {
    // عند الضغط على زر "من نحن"
    document.querySelector(".about-button").addEventListener("click", function (e) {
        e.preventDefault(); // منع السلوك الافتراضي

        // تحريك الصفحة إلى الأعلى بسلاسة
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function revealElements() {
        let elements = document.querySelectorAll(".reveal");

        elements.forEach(element => {
            let windowHeight = window.innerHeight;
            let elementTop = element.getBoundingClientRect().top;
            let revealPoint = 100; // مقدار التمرير المطلوب لإظهار العنصر

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    }

    // استدعاء الوظيفة عند تحميل الصفحة والتمرير
    window.addEventListener("scroll", revealElements);
    revealElements(); // استدعاء الوظيفة مرة عند التحميل لضمان ظهور العناصر القريبة
});
// دالة للتمرير السلس إلى الأقسام عند الضغط على الأيقونات
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50, 
            behavior: 'smooth'
        });
    }
}
// دالة للتمرير السلس إلى الأقسام عند الضغط على الأيقونات
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50, 
            behavior: 'smooth'
        });
    }
}

// دالة للكشف عن العناصر عند التمرير إليها
function revealOnScroll() {
    const cards = document.querySelectorAll('.info-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            card.classList.add('show');
        }
    });
}

// استدعاء الكشف عند تحميل الصفحة والتمرير
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".info-card");

    function reveal() {
        cards.forEach((card) => {
            const top = card.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.9) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();
});


document.addEventListener("DOMContentLoaded", function () {
    const ruleCards = document.querySelectorAll(".rule-card");

    function reveal() {
        ruleCards.forEach((card) => {
            const top = card.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.9) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();
});
document.addEventListener("DOMContentLoaded", function () {
    const ruleCards = document.querySelectorAll(".rule-card");

    ruleCards.forEach((card) => {
        const header = card.querySelector(".rule-header");
        const content = card.querySelector(".rule-content");

        header.addEventListener("click", () => {
            // إغلاق جميع القوانين الأخرى
            ruleCards.forEach((otherCard) => {
                if (otherCard !== card) {
                    otherCard.classList.remove("active");
                    otherCard.querySelector(".rule-content").style.display = "none";
                }
            });

            // فتح أو إغلاق القانون الحالي
            if (card.classList.contains("active")) {
                card.classList.remove("active");
                content.style.display = "none";
            } else {
                card.classList.add("active");
                content.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const ruleCards = document.querySelectorAll(".rule-card");
    const rulesContainer = document.querySelector(".rules-container");
    const fadeInElements = document.querySelectorAll(".fade-in");

    // تطبيق تأثير التحريك عند تحميل الصفحة
    setTimeout(() => {
        rulesContainer.classList.add("show");
        fadeInElements.forEach((el) => {
            el.classList.add("show");
        });
    }, 500); // تأخير بسيط لتعزيز التأثير

    ruleCards.forEach((card) => {
        const header = card.querySelector(".rule-header");
        const content = card.querySelector(".rule-content");

        header.addEventListener("click", () => {
            // إغلاق جميع القوانين الأخرى
            ruleCards.forEach((otherCard) => {
                if (otherCard !== card) {
                    otherCard.classList.remove("active");
                    otherCard.querySelector(".rule-content").style.display = "none";
                }
            });

            // فتح أو إغلاق القانون الحالي
            if (card.classList.contains("active")) {
                card.classList.remove("active");
                content.style.display = "none";
            } else {
                card.classList.add("active");
                content.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const ruleCards = document.querySelectorAll(".rule-card");
    const rulesContainer = document.querySelector(".rules-container");

    // تأثير ظهور الصفحة
    setTimeout(() => {
        rulesContainer.classList.add("show");
    }, 500);

    // جعل القوانين تفتح فقط عند الضغط وليس التحويم
    ruleCards.forEach((card) => {
        const header = card.querySelector(".rule-header");
        const content = card.querySelector(".rule-content");

        header.addEventListener("click", () => {
            // إغلاق القوانين الأخرى عند فتح واحدة جديدة
            ruleCards.forEach((otherCard) => {
                if (otherCard !== card) {
                    otherCard.classList.remove("active");
                    otherCard.querySelector(".rule-content").style.display = "none";
                }
            });

            // تبديل حالة البطاقة الحالية
            if (card.classList.contains("active")) {
                card.classList.remove("active");
                content.style.display = "none";
            } else {
                card.classList.add("active");
                content.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const ruleHeaders = document.querySelectorAll(".rule-header");

    ruleHeaders.forEach(header => {
        header.addEventListener("click", function () {
            // إغلاق جميع القوانين المفتوحة
            ruleHeaders.forEach(h => {
                if (h !== header) {
                    h.classList.remove("active");
                    h.nextElementSibling.classList.remove("active");
                }
            });

            // فتح أو إغلاق القانون الحالي
            header.classList.toggle("active");
            header.nextElementSibling.classList.toggle("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".info-card");

    function showCards() {
        cards.forEach((card) => {
            if (card.getBoundingClientRect().top < window.innerHeight - 50) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showCards);
    showCards();
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // لضمان تفعيل العناصر الظاهرة عند تحميل الصفحة
});
// كود لإظهار التأثير الحركي عند التمرير
document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");

    function reveal() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
});
document.addEventListener("DOMContentLoaded", function() {
    let reveals = document.querySelectorAll(".job-card");

    function revealOnScroll() {
        reveals.forEach((card) => {
            let windowHeight = window.innerHeight;
            let elementTop = card.getBoundingClientRect().top;
            let elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // لتشغيل التحريك عند تحميل الصفحة
});
function toggleContent(element) {
    element.classList.toggle("active");
}
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.9)";
        header.style.padding = "10px 0";
    } else {
        header.style.background = "rgba(0, 0, 0, 0.7)";
        header.style.padding = "15px 0";
    }
});
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// تغيير لون الشريط عند التمرير
window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// تغيير لون الشريط عند التمرير
window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// في ملف script.js
document.addEventListener("DOMContentLoaded", function () {
    // توحيد إعدادات الشريط
    const header = document.querySelector("header");
    const navbar = document.querySelector(".navbar");
    
    // وظيفة موحدة لتحديث الشريط
    function updateNavbar() {
        const isScrolled = window.scrollY > 50;
        
        // الحفاظ على أبعاد ثابتة
        navbar.style.padding = "15px 0";
        header.style.padding = "15px 0";
        
        // تغيير الخلفية فقط عند التمرير
        if (isScrolled) {
            header.style.background = "rgba(0, 0, 0, 0.9)";
        } else {
            header.style.background = "rgba(0, 0, 0, 0.7)";
        }
    }

    // تفعيل عند التمرير والتحميل
    window.addEventListener("scroll", updateNavbar);
    updateNavbar(); // تهيئة أولية
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".info-card");

    const revealCards = () => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 200);
        });
    };

    revealCards();
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".info-card");

    const revealCards = () => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 200);
        });
    };

    revealCards();
});
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll(".info-card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 300); // تأخير بسيط لكل عنصر لجعل الحركة تدريجية
    });
});
document.querySelectorAll('.side-nav li').forEach(dot => {
    dot.addEventListener('click', () => {
      const id = dot.getAttribute('data-target');
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.rules-group');
    let currentIndex = 0;
  
    sections.forEach((section, index) => {
      const top = section.getBoundingClientRect().top;
      if (top <= window.innerHeight / 2) {
        currentIndex = index;
      }
    });
  
    document.querySelectorAll('.side-nav li').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  });
  // التنقل عند الضغط على النقاط
document.querySelectorAll('.dot-nav li').forEach(dot => {
    dot.addEventListener('click', () => {
      const target = document.getElementById(dot.getAttribute('data-target'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // تتبع التمرير لتحديث النقطة النشطة
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
  
    sections.forEach(section => {
      const dot = document.querySelector(`.dot-nav li[data-target="${section.id}"]`);
      if (
        scrollY >= section.offsetTop - 200 &&
        scrollY < section.offsetTop + section.offsetHeight
      ) {
        document.querySelectorAll('.dot-nav li').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      }
    });
  });
  const navItems = document.querySelectorAll(".side-nav li");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight current section in nav
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelectorAll("section").forEach((section, i) => {
    if (scrollY >= section.offsetTop - window.innerHeight / 2) {
      navItems.forEach(li => li.classList.remove("active"));
      navItems[i].classList.add("active");
    }
  });
});

        const canvas = document.getElementById('particles-bg');
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
      
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      
        window.addEventListener('resize', () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initParticles();
        });
      
        class Particle {
          constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 0.3 - 0.15;
            this.speedY = Math.random() * 0.3 - 0.15;
          }
          update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
            }
          }
          draw() {
            ctx.fillStyle = 'rgba(212, 175, 55, 0.3)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      
        function initParticles() {
          particlesArray = [];
          for (let i = 0; i < 120; i++) {
            particlesArray.push(new Particle());
          }
        }
      
        function animateParticles() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particlesArray.forEach(p => {
            p.update();
            p.draw();
          });
          requestAnimationFrame(animateParticles);
        }
      
        initParticles();
        animateParticles();
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('show');
        }
        
        