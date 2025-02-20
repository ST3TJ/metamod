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

var inAnimation = false;

document.addEventListener('DOMContentLoaded', () => {
    const click_me = document.querySelector('#Home button')

    setTimeout(() => {
        click_me.style.padding = "20vh 20vw"
        click_me.style.opacity = "1"
        click_me.style.borderWidth = "1px"
    }, 500)

    click_me.addEventListener('click', () => {
        click_me.style.padding = "0px"
        click_me.style.opacity = "0"
        click_me.style.borderWidth = "10px"
        click_me.style.transform = "scale(0)"

        const desc = document.getElementById('description')
        const logo = document.getElementById('logo')
        const contacts = document.getElementById('contacts')
        const navbar = document.getElementById('navbar')

        setTimeout(() => {
            click_me.style.display = 'none'
            desc.style.display = 'block'

            setTimeout(() => {
                desc.style.opacity = '1'
            }, 10);
        }, 2000)

        setTimeout(() => {
            desc.style.opacity = '0'
            desc.style.padding = '0px'
        }, 4000)

        setTimeout(() => {
            desc.style.display = 'none';
            logo.style.display = 'block'

            setTimeout(() => {
                logo.style.opacity = '1';
            }, 10);

            contacts.style.opacity = '1'
            contacts.style.bottom = '40px'
            navbar.style.display = 'flex'

            setTimeout(() => {
                navbar.style.opacity = '1';
            }, 10);
        }, 6000)
    });

    const logoText = document.querySelector('#logo p');
    let lastIndex = -1;

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
            if (inAnimation) {
                return
            }

            const prevSelected = document.querySelector('#navbar button.selected');
            prevSelected.classList.remove('selected')

            const prevTab = document.getElementById(prevSelected.textContent)

            const selectedTab = document.getElementById(button.textContent)
            button.classList.add('selected');

            if (button.textContent == 'Shop') {
                selectedTab.style.display = 'grid'
            } else {
                selectedTab.style.display = 'block'
            }

            prevTab.style.opacity = '0'

            setTimeout(() => {
                selectedTab.style.opacity = '1'
            }, 500)

            inAnimation = true

            setTimeout(() => {
                prevTab.style.display = 'none'
                inAnimation = false
            }, 1000)
        });
    });

})