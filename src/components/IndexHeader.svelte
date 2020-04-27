<style>
    .index-header {
        margin-bottom: 5em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

	h1, p {
		text-align: center;
    }
    
    p {
        font-size: 0.7em;
        font-weight: 400;
        font-family: JetBrainsMonoRegular;
    }

    h1 {
        font-size: 2.8em;
        font-weight: 900;
        margin: 0.2em 0;
        font-family: JetBrainsMonoExtraBold;
        letter-spacing: 0.1em;
        transition: text-shadow 0.2s ease-in-out;
    }

    h1:hover {
        animation: burn 200ms infinite;
        cursor: default;
    }

    @keyframes burn {
        0% {
            text-shadow: 5px 4px red, -5px -6px blue;
        }
        25% {
            text-shadow: -5px -6px crimson, 5px 4px deepskyblue;
        }
        50% {
            text-shadow: 5px -4px orange, -8px 4px mediumspringgreen;
        }
        75% {
            text-shadow: -8px -4px deeppink, -5px -4px green;
        }
        100% {
            text-shadow: -5px 0 yellow, 5px -4px yellowgreen;
        }
    }

	@media (min-width: 480px) {
        p {
            font-size: 1em;   
        }
		h1 {
			font-size: 6em;
		}
	}
</style>

<div class='index-header'> 
	<p>hi! my name is</p>
    <h1>JONAS</h1>
</div>