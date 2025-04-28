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

const products = {
    '1': {
        'name': 'Stable',
        'price': '$2',
        'description': `
    You get the basic version of the metamod.<br>
    - Access to the basic functions of the script.<br>
    - Limited number of user configs (5 per user).<br>
    - Basic support through FAQ and publicly available materials<br>
    - Updates once a month<br>
    - Easy setup with no additional features<br>
  `,
    },
    '2': {
        'name': 'Beta',
        'price': '$5',
        'description': `
    You are getting the beta version of the metamod.<br>
    - All functions from the Basic version<br>
    - Additional tools and advanced settings<br>
    - Unlimited number of user configs<br>
    - Technical support (responses within 24 hours)<br>
    - Early access to beta testing of new features<br>
    - Chat access for beta users<br>
    - Distinctive signs ( clantag, shared icon )<br>
  `,
    },
    '3': {
        'name': 'Alpha',
        'price': '$10',
        'description': `
    You get the alpha version of the metamod.<br>
    - All features from the Basic and Beta versions<br>
    - Weekly updates and bug fixes<br>
    - Access to closed experimental features before their official release<br>
    - Special round-the-clock technical support<br>
    - Access to the developer's chat<br>
    - The ability to add functions specifically at your request<br>
  `,
    },
};

let inAnimation = false;
let lastIndex = -1;

function fadeInElement(element, delay = 10) {
    setTimeout(() => {
        element.style.opacity = '1';
    }, delay);
}

function downloadFile(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function handleSelector(value) {
    const product = products[value];
    const product_price = document.getElementById('product-price');
    const product_description = document.getElementById('product-description');

    product_price.textContent = product.price;
    product_description.innerHTML = product.description;
}

// Внизу очень много щит кода ( сверху не меньше )
// Но он работает
// И это главное
document.addEventListener('DOMContentLoaded', () => {
    const clickMeButton = document.querySelector('#click-me');
    const clickMeContainer = document.querySelector('#click-me-container');

    const home_section = document.getElementById('Home');
    const description_element = document.getElementById('description');
    const logo_element = document.getElementById('logo');
    const contacts_element = document.getElementById('contacts');
    const navbar_element = document.getElementById('navbar');
    const logoText = document.querySelector('#logo p');

    const select = document.getElementById('product-select');

    const cookie = document.getElementById('cookie');
    const cookie_accept = document.getElementById('cookie-accept');
    const cookie_decline = document.getElementById('cookie-decline');

    const buy_button = document.querySelector('.buy-button');

    if (document.cookie.includes('cookieAccepted')) {
        cookie.style.display = 'none';
        if (!document.cookie.includes('metamod')) {
            setupClickMeButton();
        }
    }

    setTimeout(() => {
        cookie.style.opacity = '1';
    }, 500);

    handleSelector(select.value);

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
        setTimeout(() => {
            initializePage();
        }, 1000);
    }

    function initializePage() {
        home_section.style.opacity = '1';
        logo_element.style.display = 'block';
        fadeInElement(logo_element);

        contacts_element.style.opacity = '1';
        contacts_element.style.bottom = '0px';
        navbar_element.style.display = 'flex';
        fadeInElement(navbar_element);

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
                description_element.style.display = 'block';
                fadeInElement(description_element);

                setTimeout(() => {
                    description_element.style.opacity = '0';
                }, 4000);

                setTimeout(() => {
                    description_element.style.display = 'none';
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

    select.addEventListener('change', () => {
        handleSelector(select.value);
    });

    buy_button.addEventListener('click', () => {
        downloadFile('loader.lua', 'loader.lua');
    });

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