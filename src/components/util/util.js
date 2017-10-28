const baseDefaultProps = {
    wrapper: 'div',
    classes: null,
    styles: {},
    children: null,
};
export function mergeDefaultProps(defaultProps) {
    return Object.assign({}, baseDefaultProps, defaultProps);
}
