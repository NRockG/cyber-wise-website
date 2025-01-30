import gradio as gr

with gr.Blocks() as demo:
    gr.HTML(open("index.html").read())

demo.launch()