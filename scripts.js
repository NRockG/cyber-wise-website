<script>
async function chatWithCyberdoc() {
    let userMessage = document.getElementById("userInput").value;
    
    let response = await fetch("https://YOUR-HF-SPACE/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    });

    let data = await response.json();
    document.getElementById("chatResponse").innerText = data.response || "Error";
}
</script>

<input type="text" id="userInput" placeholder="Ask Cyberdoc something...">
<button onclick="chatWithCyberdoc()">Send</button>
<p id="chatResponse"></p>
