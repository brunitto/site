// Log a message to the console
console.log("Hello from script.js!");

document.addEventListener('DOMContentLoaded', () => {
    const markdownDiv = document.getElementById('markdown-content');
    if (markdownDiv) {
        const markdownText = markdownDiv.textContent;
        const htmlContent = marked.parse(markdownText);
        console.log("Rendered HTML:", htmlContent);
        markdownDiv.innerHTML = htmlContent;
    }
});
