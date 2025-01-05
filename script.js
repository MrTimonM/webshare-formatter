document.getElementById('formatButton').addEventListener('click', () => {
    const proxyInput = document.getElementById('proxyInput').value.trim();
    const prefix = document.getElementById('prefixInput').value.trim();
    const output = document.getElementById('output');

    if (!proxyInput) {
        alert('Please paste some proxies!');
        return;
    }

    const proxies = proxyInput.split('\n');
    const formattedProxies = proxies.map(proxy => {
        const parts = proxy.split(':');
        if (parts.length !== 4) {
            return `Invalid format: ${proxy}`;
        }
        const [ip, port, user, pass] = parts;
        return `${prefix}${user}:${pass}@${ip}:${port}`;
    });

    output.value = formattedProxies.join('\n');
});

document.getElementById('copyButton').addEventListener('click', () => {
    const output = document.getElementById('output');
    if (!output.value.trim()) {
        alert('Nothing to copy!');
        return;
    }

    output.select();
    document.execCommand('copy');
    alert('Formatted proxies copied to clipboard!');
});
