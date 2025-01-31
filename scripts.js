async function chatWithCyberdoc() {
    let userMessage = document.getElementById("userInput").value;

    let response = await fetch("https://gravity30-cyberwise.hf.space/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    });

    let data = await response.json();
    document.getElementById("chatResponse").innerText = data.response || "Error";
}
