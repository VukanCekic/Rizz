// If required CSS changes take place, code code be shorter in certian places


const themeSwitchCheckBox = document.querySelector<HTMLInputElement>('#theme-switch-checkbox');
const themeSwitchSpan = document.querySelector<HTMLSpanElement>('#theme-switch-span');

const responseTypeCheckBox = document.querySelector<HTMLInputElement>('#response-type-checkbox');
const responseTypeSpan = document.querySelector<HTMLSpanElement>('#response-type-span');

const rizzLogo = document.querySelector<HTMLImageElement>('#logo');

const root = document.querySelector<HTMLElement>(':root');

function switchTheme(): void {
  if (themeSwitchCheckBox == null || root == null || themeSwitchSpan == null || rizzLogo == null) {
    return;
  }

  if (themeSwitchCheckBox.checked) {
    root.style.setProperty('--color-text', '#ffffff');
    root.style.setProperty('--background', 'rgba(51, 51, 51, 0.8)');
    root.style.setProperty(
      '--gradient',
      'linear-gradient(180deg, #1E1E1E 0%, rgba(51, 51, 51, 0.4) 100%), url(assets/rizz-bg.jpg), #333333'
    );
    root.style.setProperty('--color-checkbox-theme', '#ee3e75');
    root.style.setProperty('--color-checkbox-type', '#ffffff');
    root.style.setProperty('--color-checkbox-circle', '#333333');

    themeSwitchSpan.style.setProperty('--check-before-right', '4.26%');
    themeSwitchSpan.style.setProperty('--check-before-left', '51.06%');
    rizzLogo.setAttribute('src', '/assets/rizz-logo-white.svg');
  } else {
    root.style.setProperty('--color-text', '#333333');
    root.style.setProperty('--background', 'rgba(255, 255, 255, 0.8)');
    root.style.setProperty('--color-checkbox-theme', '#333333');
    root.style.setProperty('--color-checkbox-type', '#ee3e75');
    root.style.setProperty('--color-checkbox-circle', '#ffffff');
    root.style.setProperty(
      '--gradient',
      'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 100%), url(assets/rizz-bg.jpg), #333333'
    );

    themeSwitchSpan.style.setProperty('--check-before-right', '51.06%');
    themeSwitchSpan.style.setProperty('--check-before-left', '4.26%');
    rizzLogo.setAttribute('src', '/assets/rizz-logo-black.svg');
  }
}

if (themeSwitchCheckBox != null && themeSwitchSpan != null) {
  themeSwitchSpan.addEventListener('click', () => {
    themeSwitchCheckBox.checked = !themeSwitchCheckBox.checked;
    switchTheme();
  });
}

if (responseTypeCheckBox != null && responseTypeSpan != null) {
  responseTypeSpan.addEventListener('click', () => {
    responseTypeCheckBox.checked = !responseTypeCheckBox.checked;

    if (responseTypeCheckBox.checked) {
      responseTypeSpan.style.setProperty('--check-before-right', '4.26%');
      responseTypeSpan.style.setProperty('--check-before-left', '51.06%');
    } else {
      responseTypeSpan.style.setProperty('--check-before-right', '51.06%');
      responseTypeSpan.style.setProperty('--check-before-left', '4.26%');
    }
  });
}
