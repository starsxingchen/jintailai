document.addEventListener('DOMContentLoaded', function() {
    // 头部滚动效果
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // GSAP动画
    gsap.registerPlugin(ScrollTrigger);
    
    // 产品特点动画
    gsap.utils.toArray('.feature-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
    
    // 技术部分动画
    gsap.from('.tech-content', {
        scrollTrigger: {
            trigger: '.technology',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    gsap.from('.tech-image', {
        scrollTrigger: {
            trigger: '.technology',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // 产品展示动画
    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 100,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'back.out(1)'
        });
    });
    
    // 表单验证
    const form = document.getElementById('inquiryForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                alert('请输入有效的电子邮箱地址');
                return;
            }
            
            // 这里可以添加表单提交逻辑
            alert('感谢您的咨询，我们会尽快与您联系！');
            form.reset();
        });
    }
    
    // 蜂窝气孔动画
    const honeycomb = document.querySelector('.animate-honeycomb');
    if (honeycomb) {
        gsap.to(honeycomb, {
            scrollTrigger: {
                trigger: honeycomb,
                start: 'top 80%',
                toggleActions: 'play none none none',
                scrub: true
            },
            scale: 1.05,
            duration: 1,
            ease: 'none'
        });
    }
    
    // 页面加载动画
    gsap.from('body', {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut'
    });
});
