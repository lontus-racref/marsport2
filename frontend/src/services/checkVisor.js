const checkVisor = async () => {
    const extensionUrl = 'chrome-extension://oadimaacghcacmfipakhadejgalcaepg/launcher.html'
    const res = await fetch(extensionUrl)

    if(!res) {
        return false
    } else {
        return true
    }
}
export default checkVisor