type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean), // same as arr.filter(item => Boolean(item))
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}

classNames('remove-btn', { hovered: true, selectable: true, red: false }, ['pdg']);
