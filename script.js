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

document.addEventListener('DOMContentLoaded', () => {
    const clickMeButton = document.querySelector('#click_me');
    const homeSection = document.getElementById('Home');
    const descriptionElement = document.getElementById('description');
    const logoElement = document.getElementById('logo');
    const contactsElement = document.getElementById('contacts');
    const navbarElement = document.getElementById('navbar');
    const logoText = document.querySelector('#logo p');

    function fadeInElement(element, delay = 10) {
        setTimeout(() => {
            element.style.opacity = '1';
        }, delay);
    }

    if (document.cookie.includes('metamod')) {
        initializePage();
    } else {
        setupClickMeButton();
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
            clickMeButton.style.padding = '20vh 20vw';
            clickMeButton.style.opacity = '1';
            clickMeButton.style.borderWidth = '1px';
        }, 500);

        clickMeButton.addEventListener('click', () => {
            clickMeButton.style.padding = '0px';
            clickMeButton.style.opacity = '0';
            clickMeButton.style.borderWidth = '10px';
            clickMeButton.style.transform = 'scale(0)';

            setTimeout(() => {
                clickMeButton.style.display = 'none';
                descriptionElement.style.display = 'block';
                fadeInElement(descriptionElement);

                setTimeout(() => {
                    descriptionElement.style.opacity = '0';
                }, 4000);

                setTimeout(() => {
                    descriptionElement.style.display = 'none';
                    initializePage();
                    document.cookie = 'metamod=true;';
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