const adv = [
    'best anti-aim builder',
    'best user interface system',
    '100% selfcode',
    'unmatched performance',
    'customizable to the max',
    'next-level anti-aim',
    'smoothest experience',
    'built for domination',
    'optimized for all playstyles',
    'lightweight & powerful',
    'crafted with precision',
    'elevate your gameplay',
    'innovation in every line',
    'designed to win',
    'next-gen scripting solutions',
    'your advantage, your rules',
    'the future of scripting',
    'superior resolver logic',
    'smart exploit management',
    'breaking the hvh meta',
    'next-level desync control',
    'unique anti-aim algorithms',
    'dominate every hvh server',
    'next-gen resolver technology',
    'adaptive fakelag system',
];

let inAnimation = false;
let lastIndex = -1;

function fadeInElement(element, delay = 10) {
    setTimeout(() => {
        element.style.opacity = '1';
    }, delay);
}

// Внизу очень много щит кода
// Но он работает
// И это главное
document.addEventListener('DOMContentLoaded', () => {
    const clickMeButton = document.querySelector('#click-me');
    const clickMeContainer = document.querySelector('#click-me-container');

    const homeSection = document.getElementById('Home');
    const descriptionElement = document.getElementById('description');
    const logoElement = document.getElementById('logo');
    const contactsElement = document.getElementById('contacts');
    const navbarElement = document.getElementById('navbar');
    const logoText = document.querySelector('#logo p');

    const cookie = document.getElementById('cookie');
    const cookie_accept = document.getElementById('cookie-accept');
    const cookie_decline = document.getElementById('cookie-decline');

    if (document.cookie.includes('cookieAccepted')) {
        cookie.style.display = 'none';
    }

    setTimeout(() => {
        cookie.style.opacity = '1';
    }, 500);

    cookie_accept.addEventListener('click', () => {
        document.cookie = 'cookieAccepted=true;';
        cookie.style.opacity = '0';
        setTimeout(() => {
            cookie.style.display = 'none';
            setupClickMeButton();
        }, 500);
    });

    cookie_decline.addEventListener('click', () => {
        cookie.style.opacity = '0';
        setTimeout(() => {
            cookie.style.display = 'none';
            setupClickMeButton();
        }, 500);
    });

    if (document.cookie.includes('metamod')) {
        initializePage();
    }

    function initializePage() {
        homeSection.style.opacity = '1';
        logoElement.style.display = 'block';
        fadeInElement(logoElement);

        contactsElement.style.opacity = '1';
        contactsElement.style.bottom = '0px';
        navbarElement.style.display = 'flex';
        fadeInElement(navbarElement);

        let newIndex = Math.floor(Math.random() * adv.length);
        lastIndex = newIndex;

        logoText.textContent = adv[newIndex];
        logoText.style.opacity = '1';
    }

    function setupClickMeButton() {
        setTimeout(() => {
            clickMeButton.style.opacity = '1';

            clickMeContainer.style.padding = '20vh 20vw';
            clickMeContainer.style.borderWidth = '1px';
            clickMeContainer.style.opacity = '1';
        }, 500);

        clickMeButton.addEventListener('click', () => {
            clickMeContainer.style.padding = '0px';
            clickMeContainer.style.borderWidth = '10px';
            clickMeContainer.style.opacity = '0';
            clickMeContainer.style.transform = 'scale(0)';

            clickMeButton.style.opacity = '0';
            clickMeButton.style.transform = 'scale(0)';

            setTimeout(() => {
                clickMeButton.style.display = 'none';
                clickMeContainer.style.display = 'none';
                descriptionElement.style.display = 'block';
                fadeInElement(descriptionElement);

                setTimeout(() => {
                    descriptionElement.style.opacity = '0';
                }, 4000);

                setTimeout(() => {
                    descriptionElement.style.display = 'none';
                    initializePage();
                    if (document.cookie.includes('cookieAccepted')) {
                        document.cookie = 'metamod=true;';
                    }
                }, 6000);
            }, 2000);
        });
    }

    setInterval(() => {
        logoText.style.opacity = '0';

        setTimeout(() => {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * adv.length);
            } while (newIndex === lastIndex);

            lastIndex = newIndex;
            logoText.textContent = adv[newIndex];
            logoText.style.opacity = '1';
        }, 500);
    }, 3000);

    const buttons = document.querySelectorAll('#navbar button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (inAnimation) return;

            const prevSelectedButton = document.querySelector('#navbar button.selected');
            const prevTab = document.getElementById(prevSelectedButton.textContent);
            const selectedTab = document.getElementById(button.textContent);

            prevSelectedButton.classList.remove('selected');
            button.classList.add('selected');

            if (prevTab === selectedTab) return;

            if (button.textContent === 'Shop') {
                selectedTab.style.display = 'grid';
            } else {
                selectedTab.style.display = 'block';
            }

            prevTab.style.opacity = '0';

            inAnimation = true;

            setTimeout(() => {
                selectedTab.style.opacity = '1';
            }, 500);

            setTimeout(() => {
                prevTab.style.display = 'none';
                inAnimation = false;
            }, 1000);
        });
    });
});