document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('show');
});

function showAndSet(code) {
    document.querySelector('.overlay').classList.add('show');
    document.querySelector('.overlay-content').innerHTML = code;
}

document.getElementById('minecraft').addEventListener('click', () => {
    showAndSet(`
        <h1 class="center">Minecraft Clients Test/Opinion</h1>
        <div class="buttons max grid">
            <button onclick="showAndSet(\`<h1 class='center'>Badlion</h1><p class='center'>Badlion has a lot of versions of Minecraft it supports and mods but it's not as smooth, the FPS it not so good (75-200 FPS in the lobby).</p>\`)" class="button">Badlion</button>
            <button onclick="showAndSet(\`<h1 class='center'>Lunar</h1><p class='center'>Lunar does not have a lot of mods but it is smooth and has Great FPS (100-600 FPS in the lobby) [Note Lunar does not support WindowsXP].</p>\`)" class="button">Lunar</button>
            <button onclick="showAndSet(\`<h1 class='center'>PvPLounge</h1><p class='center'>PvPLounge has lots of mods like Badlion and is smooth but lunar is more, but it has some lag spikes and has good FPS (100-300 FPS in the lobby).</p>\`)" class="button">PvPLounge</button>
            <button onclick="showAndSet(\`<h1 class='center'>LabyMod</h1><p class='center'>LabyMod has other mods that Badlion does not have, has Forge support and it's smooth but not as good as lunar and PvPLounge but better them Badlion, Ok FPS (90-200 FPS on the lobby but it can go lower).</p>\`)" class="button">LabyMod</button>
            <button onclick="showAndSet(\`<h1 class='center'>SkullProject</h1><p class='center'>Skull Project has like 5 mods it's the same smooth as LabyMod FPS is Good (100-200 FPS on the hypixel lobby).</p>\`)" class="button">SkullProject</button>
            <button onclick="showAndSet(\`<h1 class='center'>BatMod</h1><p class='center'>BatMod has some mods less them lunar it's as smooth as LabyMod FPS is Ok (90-250 FPS in the lobby).</p>\`)" class="button">BatMod</button>
            <button onclick="showAndSet(\`<h1 class='center'>Hyperium</h1><p class='center'>Hyperium has a lot of mods mostly made for hypixel it's as smooth as LabyMod FPS is not so good (40-200 FPS in the lobby).</p>\`)" class="button">Hyperium</button>
            <button onclick="showAndSet(\`<h1 class='center'>Pixel</h1><p class='center'>PixelClient has some mods and it's smooth like PvPLounge FPS is Good (100-300 FPS in the lobby).</p><h5 class='center'>Has a chance to False Ban You.</h5>\`)" class="button">Pixel</button>
            <button onclick="showAndSet(\`<h1 class='center'>Salwyrr</h1><p class='center'>Salwyrr has a lot of mods, the safety is ???, it's smooth like PvPLounge but the sensitivity is low and FPS is good but low (80-200 FPS in the lobby).</p><h5 class='center'>Has a chance to False Ban You.</h5>\`)" class="button">Salwyrr</button>
            <button onclick="showAndSet(\`<h1 class='center'>5ZigReborn</h1><p class='center'>5Zig Reborn has some mods, it smooth like PvPLounge, the FPS is ok (90-600 FPS in the lobby) [Note I use 5Zig and Optifine].</p>\`)" class="button">5ZigReborn</button>
            <button onclick="showAndSet(\`<h1 class='center'>CosmicPVP</h1><p class='center'>CosmicPVP has mods, it's smooth like PvPLounge, FPS is ok (90-300 FPS in the lobby).</p>\`)" class="button">CosmicPVP</button>
            <button onclick="showAndSet(\`<h1 class='center'>Podcrash+</h1><p class='center'>Podcrash+ has some mods, it's smooth like PvPLounge, the safety is ???, FPS is ok (60-300 FPS in the lobby) [Note Forge support?].</p>\`)" class="button">Podcrash+</button>
            <button onclick="showAndSet(\`<h1 class='center'>CraftRise</h1><p class='center'>Has Hacks.</p>\`)" class="button">CraftRise</button>
            <button onclick="showAndSet(\`<h1 class='center'>Mada</h1><p class='center'>Has Hacks.</p>\`)" class="button">Mada</button>
            <button onclick="showAndSet(\`<h1 class='center'>BlazingPack</h1><p class='center'>Has Hacks.</p>\`)" class="button">BlazingPack</button>
        </div>
        <h4 class="center">[Note all where tested on 1.8.9 and on hypixel, Sorry if my typing is bad].</h4>
    `);
});

document.getElementById('bat').addEventListener('click', () => {
    showAndSet(`
        <h1 class="center">.bat Files That I Made</h1>
        <div class="buttons max grid">
            <button onclick="window.location.href = 'https://api.serversmp.xyz/codebinplus/63efadb5954fbbbcb88fed11'" class="button">Roblox</button>
            <button onclick="window.location.href = 'https://api.serversmp.xyz/codebinplus/63efade8954fbbbcb88fed18'" class="button">Fortnite</button>
            <button onclick="window.location.href = 'https://api.serversmp.xyz/codebinplus/63efadf9954fbbbcb88fed1f'" class="button">GTA5</button>
            <button onclick="window.location.href = 'https://api.serversmp.xyz/codebinplus/63efae08954fbbbcb88fed26'" class="button">Minecraft</button>
            <button onclick="window.location.href = 'https://api.serversmp.xyz/codebinplus/63efae1e954fbbbcb88fed2d'" class="button">TF2</button>
            <button onclick="window.location.href = 'https://api.serversmp.xyz/codebinplus/63efae33954fbbbcb88fed34'" class="button">Spotify</button>
        </div>
    `);
});