function Width(el) {
    const styles = el.ownerDocument.defultView.getComputedStyle(el, null);
    const width = parseFloat(styles.width.indexOf('px') !== -1 ? styles.width: 0);

    const boxSizing = styles.boxSizing || 'content-box';
    if (boxSizing === 'border-box') {
        return width;
    }

    const borderLeftWidth = parseFloat(styles.borderLeftWidth);
    const borderRitghWidth = parseFloat(styles.borderRightWidth);
    const paddingLeft = parseFloat(styles.paddingLeft);
    const paddingRight = parseFloat(styles.paddingRight);

    return width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight;
}

export default Width;