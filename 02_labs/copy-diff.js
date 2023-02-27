const tags = document.querySelectorAll('code.language-diff');

function undiff(line) {
    if (line.startsWith('+') || line.startsWith('-') || line.startsWith(' ')) {
        return line.substring(1);
    }
    return line;
}

tags.forEach(tag => tag.addEventListener('copy', (ev) => {
    const text = document.getSelection().toString();
    const updated = text.split('\n').map(line => undiff(line)).join('\n')
    ev.clipboardData.setData('text', updated);
    ev.preventDefault();
    return false;
}));