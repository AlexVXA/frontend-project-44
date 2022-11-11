install: install-deps
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish --dry-run
