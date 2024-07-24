export function openUrl(url: string)
{
    const win = window.open(url, "_blank");
    
    if(win)
        win.focus();
}
    
export function scrollToView(id: string)
{
    const element = document.getElementById(id);
    if(element)
        element.scrollIntoView({behavior: "smooth"});
}