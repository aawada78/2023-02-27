// Taken out of the docsify copy plugin

function copy_init() {
  const targetElms = Array.apply(null, document.querySelectorAll('pre'));
  const i18n = {
    buttonText: 'Copy to clipboard',
    errorText: 'Error',
    successText: 'Copied',
  };

  const template = [
    '<button class="docsify-copy-code-button">',
    `<span class="label">Copy Code</span>`,
    `<span class="error">Error</span>`,
    `<span class="success">Success</span>`,
    '</button>',
  ].join('');

  targetElms.forEach((elm) => {
    elm.insertAdjacentHTML('beforeend', template);
  });
}

function copy_mounted() {
  const listenerHost = document.querySelector('body');

  listenerHost.addEventListener('click', function (evt) {
    const isCopyCodeButton = evt.target.classList.contains('docsify-copy-code-button');

    if (isCopyCodeButton) {
      const buttonElm = evt.target.tagName === 'BUTTON' ? evt.target : evt.target.parentNode;
      const range = document.createRange();
      const preElm = buttonElm.parentNode;
      const codeElm = preElm.querySelector('code');

      let selection = window.getSelection();

      range.selectNode(codeElm);
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        // Copy selected text
        const successful = document.execCommand('copy');

        if (successful) {
          buttonElm.classList.add('success');
          setTimeout(function () {
            buttonElm.classList.remove('success');
          }, 1000);
        }
      } catch (err) {
        // eslint-disable-next-line
        console.error(`docsify-copy-code: ${err}`);

        buttonElm.classList.add('error');
        setTimeout(function () {
          buttonElm.classList.remove('error');
        }, 1000);
      }

      selection = window.getSelection();

      if (typeof selection.removeRange === 'function') {
        selection.removeRange(range);
      } else if (typeof selection.removeAllRanges === 'function') {
        selection.removeAllRanges();
      }
    }
  });
}

copy_init();
copy_mounted();
