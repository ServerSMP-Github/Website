const converter = new showdown.Converter({
    extensions: [
        'anchor',
    ]
});

converter.setFlavor('github');

document.getElementById("subContainer").innerHTML = converter.makeHtml(document.getElementById("content").value);