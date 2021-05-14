const scrollToSection = () => {
    const topMenuList = document.querySelector('.top-menu-list');

    const findSection = (href) => {
        const id = href.match(/#\D+/)[0];
        const section = document.querySelector(`${id}`);
        return section;
    };

    const scrollToUp = (endPosition) => {

        const scrolling = setInterval(() => {

            if (document.documentElement.scrollTop > (endPosition - 50)) {

                scrollBy(0, -20);
                
            } else {

                clearInterval(scrolling);

            }

        }, 1);

    };

    const scrollToDown = (endPosition) => {
        
        const scrolling = setInterval(() => {
            
            
            if (document.documentElement.scrollTop < (endPosition - 50)) {

                scrollBy(0, 20);
                
            } else {

                clearInterval(scrolling);

            }

        }, 1);

    };

    topMenuList.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('a')) {
            const href = target.href;

            const section = findSection(href);
            const sectionPosition = section.offsetTop;

            const currentPosition = document.documentElement.scrollTop;

            if (currentPosition < sectionPosition) {
                scrollToDown(sectionPosition);
            } else {
                scrollToUp(sectionPosition);
            }            

        }

    });

};

export default scrollToSection;