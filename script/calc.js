var calc_form = document.getElementById('main-form');
calc_form.addEventListener('submit', event => {
    event.preventDefault();
    let inputs = [document.getElementById('weight').value,
    document.getElementById('height').value,
    document.getElementById('age').value,
    document.getElementById('obw').value,
    document.getElementById('activity').value,
    document.getElementById('sex-form').value];

    let max_values;
    if (inputs[5] == 0) {
        max_values = [[17, 35], [6, 35]];
    } else {
        max_values = [[17, 35], [8, 50]];
    }

    //BMI
    let bmi = inputs[0] / ((inputs[1] / 100) * (inputs[1] / 100)).toFixed(2);

    //BF
    let a = 4.15 * inputs[3];
    let b = a / 2.54;
    let c = 0.082 * inputs[0] * 2.2;
    let d;
    if (inputs[inputs.length - 1] === 0) {
        d = b - c - 98.42;
    } else {
        d = b - c - 76.76;
    }
    let e = inputs[0] * 2.2;

    let bf = d / e * 100;
    console.log(bf);

    //BMR
    let bmr;

    if (inputs[5] == 0) {
        bmr = 66 + (13.7 * inputs[0]) + (5 * inputs[1]) - (6.8 * inputs[2]);

    }
    else {
        bmr = 655 + (9.6 * inputs[0]) + (1.8 * inputs[1]) - (4.7 * inputs[2]);
    }

    let activities = [1.2, 1.375, 1.55, 1.725, 1.9];

    bmr = bmr * activities[parseInt(inputs[4])];

    console.log(bmr);

    //Show BMI
    let bmi_pointer = document.querySelector('#bmi .pointer');
    let bmi_pointer_text = document.querySelector('#bmi .scale-text');
    var bmi_result = (bmi / max_values[0][1]) * 100;
    bmi_pointer_text.textContent = Math.round(bmi);
    if (bmi_result > 100) {
        bmi_result = 100;
    }
    bmi_pointer.style.left = bmi_result + '%';

    //Show BF
    let bf_pointer = document.querySelector('#bf .pointer');
    let bf_pointer_text = document.querySelector('#bf .scale-text');
    var bf_result = (bf / max_values[1][1]) * 100;
    bf_pointer_text.textContent = Math.round(bf) + '%';
    if (bf_result > 100) {
        bf_result = 100;
    }
    bf_pointer.style.left = bf_result + '%';

    //Show BMR
    let bmr_text = document.querySelector('#bmr .bmr');
    bmr_text.textContent = 'Twoje zapotrzebowanie kaloryczne to ' + Math.round(bmr) + 'kcal';
});