const counters = document.querySelectorAll('.counter__content__box--counter');

counters.forEach(counter => {
    counter.innerHTML = '0';

    const updateCounter = () => {
        // GET EVERY DATA-TARGET OF HTML DIV COUNTER ELEMENT
        const targetData = Number(counter.getAttribute('data-target'));
        // console.log(targetData);

        // STARTING VALUE
        const startValue = Number(counter.innerHTML);
        // DEFINING VALUE OF INCREMENT FOR EACH DATA-TARGET
        const increment = targetData / 200;
        console.log(increment)

        // CHECK IF START VALUE (0) IS LESS THEN TARGET VALUE
        if (startValue < targetData) {
            counter.innerHTML = `${Math.ceil(startValue + increment)}`;

            setTimeout(() => {
                updateCounter();
            }, 10);

        } else {
            counter.innerHTML = targetData;
        }
    }
    updateCounter()
})

