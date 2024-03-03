install:
	npm ci

menu-game:
	node bin/menu-game.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-scm:
	node bin/brain-scm.js

gProgress:
	node bin/gProgress.js