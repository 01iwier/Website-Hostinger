function openGmail() {
    const url = "https://mail.google.com/mail/?view=cm&fs=1&to=wiecko.oli@gmail.com";
    const width = 800;
    const height = 600;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    window.open(url, 'GmailWindow', `width=${width},height=${height},top=${top},left=${left}`);
}