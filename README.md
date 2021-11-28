A model how to use parallax component(s) in React. First try, still needs a bit of tweaking but it's usable (and flexible, which was the main goal).

How to use:

1. In the section you want a parallax effect;
- Import LayerGroup and the layers you need (LayerDeep, LayerBack, LayerBase and/or LayerTop), then create your section with the info you like.
- Wrap the layers with LayerGroup

2. In App.js: Import Wrapper (and sections);
- Wrap all sections with Wrapper
