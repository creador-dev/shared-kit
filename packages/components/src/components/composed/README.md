# Composed components

Keep shadcn registry files unchanged in `../ui`. Add project-owned wrappers and extended components here so a future `shadcn add --overwrite` cannot remove custom behavior or variants.

Each composed component should import primitives from `../ui`, own its public API, and be exported explicitly from the package.
