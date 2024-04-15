if (localStorage.getItem('vip')) {
    document.getElementById('VIP').innerHTML = ` VIP-1`
    document.getElementById('VIP').classList.add("border", "border-warning", "text-warning")
    document.getElementById('vip-benefits').innerHTML = ``
    document.getElementById('acc-head').innerHTML = `har***@****`
    document.getElementById('acc-id').innerHTML = `UID: 91235267`
} else {
    document.getElementById('VIP').innerHTML = ` NON-VIP`
    document.getElementById('VIP').classList.add("border", "border-secondary", "text-light")
    document.getElementById('vip-benefits').innerHTML = `VIP Benefits`
    document.getElementById('acc-head').innerHTML = `unx***@****`
    document.getElementById('acc-id').innerHTML = `UID: 62718452`
}