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

document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('text')

    setTimeout(() => {
        text.style.padding = "20vh 20vw"
        text.style.opacity = "1"
        text.style.borderWidth = "1px"
    }, 500)

    document.getElementById('click_me').addEventListener('click', () => {
        text.style.padding = "0px"
        text.style.opacity = "0"
        text.style.borderWidth = "10px"
        text.style.transform = "scale(0)"

        const desc = document.getElementById('description')
        const logo = document.getElementById('logo')
        const contacts = document.getElementById('contacts')
        const navbar = document.getElementById('navbar')

        setTimeout(() => {
            text.style.display = 'none'
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
            contacts.style.bottom = '30px'
            navbar.style.display = 'block'

            setTimeout(() => {
                navbar.style.opacity = '1';
            }, 10);
        }, 6000)

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
    });
})