function select() {
	const optionMenus = document.querySelectorAll('.select__menu');

	optionMenus.forEach(optionMenu => {
		const selectBtn = optionMenu.querySelector('.select__btn');
		const options = optionMenu.querySelectorAll('.select__option');
		const sBtntext = optionMenu.querySelector('.select__input');
		const selBtntext_1 = optionMenu.querySelector('.select__btntext-1');
		const selBtntext_2 = optionMenu.querySelector('.select__btntext-2');

		if (optionMenu) {
			selectBtn.addEventListener("click", function (e) {
				let elem_active = optionMenu.classList.contains("_active")
				optionMenus.forEach(opt => {
					opt.classList.remove('_active');
				})
				optionMenu.classList.toggle("_active", !elem_active)
			});

			options.forEach(option => {
				option.addEventListener("click", function (e) {
					if (e.target.classList.contains('.select__option-text') != null) {
						if (sBtntext) {
							sBtntext.value = e.target.innerText;
						}
					};
					if (selBtntext_2) {
						if (document.querySelector('.select__option-text') != null) {
							selBtntext_2.innerText = option.querySelector('.select__option-name').innerText + option.querySelector('.select__option-number').innerText;
						}
					}
					if (selBtntext_1) {
						if (document.querySelector('.select__option-text') != null) {
							selBtntext_1.innerText = option.querySelector('.select__option-text-data').innerText + option.querySelector('.select__option-text-name').innerText + option.querySelector('.select__option-text-number').innerText + option.querySelector('.select__option-text-name-2').innerText;
						};
					}
					options.forEach(el => { el.classList.remove('_active'); });
					option.classList.add("_active");
					optionMenu.classList.remove("_active")
				});
			});
			window.addEventListener('click', e => {
				const target = e.target
				if (!target.closest('.select__options') && !target.closest('.select__menu')) {
					optionMenu.classList.remove("_active")
				}
			})

		}
	})
}

select()