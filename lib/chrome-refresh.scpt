if (count window of application "Google Chrome") = 0 then return
tell application "Google Chrome"
  set winref to a reference to (first window whose title does not start with "Developer Tools - ")
  set theTab to active tab of winref
  if theTab's URL starts with "http://localhost" or theTab's URL starts with "http://placeit-local.test" or theTab's URL starts with "file:" then
    tell theTab to execute javascript "[].forEach.call(document.getElementsByTagName('link'), function(el, i){
        var href = el.getAttribute('href');
        if (!href.includes('/assets') || href.includes('vendor')) {
            return
        }
        el.parentNode.replaceChild(el.cloneNode(true), el)
    })"
  end if
end tell
return