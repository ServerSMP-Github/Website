document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('show');
});

function showAndSet(code) {
    document.querySelector('.overlay').classList.add('show');
    document.querySelector('.overlay-content').innerHTML = code;
}

document.getElementById('GBOMODS').addEventListener('click', () => {
    showAndSet(`
        <h1 class="center">Forge 1.12.2 Mods</h1>

        <h4>Forge:</h4>
        <a href="https://bit.ly/2MXCQcY">https://bit.ly/2MXCQcY</a>

        <h4>Mods:</h4>
        <div>
            <span>EnderCore:</span>
            <a href="https://bit.ly/2MXOe8J">https://bit.ly/2MXOe8J</a>
        </div>

        <div>
            <span>EnderIO:</span>
            <a href="https://bit.ly/2ZRmUhw">https://bit.ly/2ZRmUhw</a>
        </div>

        <div>
            <span>TreeCapitator:</span>
            <a href="https://bit.ly/39Gojft">https://bit.ly/39Gojft</a>
        </div>
        
        <div>
            <span>bspkrsCore:</span>
            <a href="https://bit.ly/37Br9k0">https://bit.ly/37Br9k0</a>
        </div>

        <div>
            <span>refinedstorage:</span>
            <a href="https://bit.ly/2QuQvul">https://bit.ly/2QuQvul</a>
        </div>

        <div>
            <span>worldedit:</span>
            <a href="https://bit.ly/39Rlto6">https://bit.ly/39Rlto6</a>
        </div>

        <div>
            <span>OptiFine:</span>
            <a href="https://bit.ly/35nsM3f">https://bit.ly/35nsM3f</a>
        </div>

        <div>
            <span>jei:</span>
            <a href="https://bit.ly/2QMWiKt">https://bit.ly/2QMWiKt</a>
        </div>

        <h4>Tutorial:</h4>
        <a href="https://bit.ly/2rWm5Yi">https://bit.ly/2rWm5Yi</a>
    `);
});

document.getElementById('GBOEarthMOD').addEventListener('click', () => {
    showAndSet(`
        <h1 class="center">Forge 1.12.2 Mods</h1>

        <h4>Forge:</h4>
        <a href="https://bit.ly/2MXCQcY">https://bit.ly/2MXCQcY</a>

        <h4>Mods:</h4>
        <div>
            <span>torohud:</span>
            <a href="https://bit.ly/3adHfSO">https://bit.ly/3adHfSO</a>
        </div>

        <div>
            <span>WitherSkeletonTweaks:</span>
            <a href="https://bit.ly/2xcqYin">https://bit.ly/2xcqYin</a>
        </div>

        <div>
            <span>Placebo:</span>
            <a href="https://bit.ly/3bf7A2Q">https://bit.ly/3bf7A2Q</a>
        </div>

        <div>
            <span>VoxelMap:</span>
            <a href="https://bit.ly/2QC8kqT">https://bit.ly/2QC8kqT</a>
        </div>

        <div>
            <span>coroutil:</span>
            <a href="https://bit.ly/2UsGAGo">https://bit.ly/2UsGAGo</a>
        </div>

        <div>
            <span>BetterFps:</span>
            <a href="https://bit.ly/2xfNlTU">https://bit.ly/2xfNlTU</a>
        </div>

        <div>
            <span>OptiFine:</span>
            <a href="https://bit.ly/35nsM3f">https://bit.ly/35nsM3f</a>
        </div>

        <div>
            <span>jei:</span>
            <a href="https://bit.ly/3bdI65Z">https://bit.ly/3bdI65Z</a>
        </div>

        <div>
            <span>iChunUtil:</span>
            <a href="https://bit.ly/2JiDPlX">https://bit.ly/2JiDPlX</a>
        </div>

        <div>
            <span>General Layman's Aesthetic Spying Screen (GLASS):</span>
            <a href="https://bit.ly/2J9pKXP">https://bit.ly/2J9pKXP</a>
        </div>

        <div>
            <span>Shadowfacts' Forgelin:</span>
            <a href="https://bit.ly/3adK0n8">https://bit.ly/3adK0n8</a>
        </div>

        <div>
            <span>Special AI:</span>
            <a href="https://bit.ly/2QCfjzZ">https://bit.ly/2QCfjzZ</a>
        </div>

        <div>
            <span>Serene Seasons:</span>
            <a href="https://bit.ly/3aaPf6N">https://bit.ly/3aaPf6N</a>
        </div>

        <div>
            <span>Armor Expansion:</span>
            <a href="https://bit.ly/2xk41tm">https://bit.ly/2xk41tm</a>
        </div>

        <div>
            <span>Better Placement:</span>
            <a href="https://bit.ly/2Jaw5SW">https://bit.ly/2Jaw5SW</a>
        </div>

        <h4>FPS Boost Mods (Optional):</h4>
        <div>
            <span>Clumps:</span>
            <a href="https://bit.ly/398Sk67">https://bit.ly/398Sk67</a>
        </div>

        <div>
            <span>FPS Reducer:</span>
            <a href="https://bit.ly/3bfSjPd">https://bit.ly/3bfSjPd</a>
        </div>

        <div>
            <span>Chunk Animator:</span>
            <a href="https://bit.ly/3dml0Mo">https://bit.ly/3dml0Mo</a>
        </div>

        <div>
            <span>FoamFix:</span>
            <a href="https://bit.ly/2Qz1K4o">https://bit.ly/2Qz1K4o</a>
        </div>

        <div>
            <span>VanillaFix:</span>
            <a href="https://bit.ly/2WAaCdP">https://bit.ly/2WAaCdP</a>
        </div>

        <h4>Tutorial:</h4>
        <a href="https://bit.ly/2rWm5Yi">https://bit.ly/2rWm5Yi</a>
    `);
});