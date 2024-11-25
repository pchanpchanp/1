
javascript:(function()%7Bjavascript%3A%20(()%20%3D%3E%20%7B%0A%20%20%20%20const%20DIV_STYLE%20%3D%20%60max-width%3A%20800px%3B%0A%20%20border-radius%3A%2016px%3B%0A%20%20margin%3A%200%20auto%3B%0A%20%20padding%3A%202rem%3B%0A%20%20box-shadow%3A%200%203px%206px%20rgba(0%2C0%2C0%2C0.16)%2C%200%203px%206px%20rgba(0%2C0%2C0%2C0.23)%3B%60%3B%0A%20%20%0A%20%20%20%20const%20copyToClipboard%20%3D%20(textToCopy)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%2F%2F%20The%20text%20you%20want%20to%20copy%20to%20the%20clipboard%0A%20%20%0A%20%20%20%20%20%20%2F%2F%20Create%20a%20temporary%20textarea%20element%20to%20hold%20the%20text%0A%20%20%20%20%20%20var%20textarea%20%3D%20document.createElement(%22textarea%22)%3B%0A%20%20%20%20%20%20textarea.value%20%3D%20textToCopy%3B%0A%20%20%0A%20%20%20%20%20%20%2F%2F%20Style%20the%20textarea%20to%20be%20invisible%0A%20%20%20%20%20%20textarea.style.position%20%3D%20%22fixed%22%3B%0A%20%20%20%20%20%20textarea.style.left%20%3D%20%22-9999px%22%3B%0A%20%20%0A%20%20%20%20%20%20%2F%2F%20Append%20the%20textarea%20to%20the%20body%0A%20%20%20%20%20%20document.body.appendChild(textarea)%3B%0A%20%20%0A%20%20%20%20%20%20%2F%2F%20Select%20the%20text%20in%20the%20textarea%0A%20%20%20%20%20%20textarea.select()%3B%0A%20%20%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20Execute%20the%20copy%20command%0A%20%20%20%20%20%20%20%20document.execCommand(%22copy%22)%3B%0A%20%20%20%20%20%20%7D%20catch%20(err)%20%7B%0A%20%20%20%20%20%20%20%20console.error(%22Oops%2C%20unable%20to%20copy%22%2C%20err)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%0A%20%20%20%20%20%20%2F%2F%20Remove%20the%20temporary%20textarea%20element%0A%20%20%20%20%20%20document.body.removeChild(textarea)%3B%0A%20%20%20%20%7D%3B%0A%20%20%0A%20%20%20%20const%20chatToolbars%20%3D%20document.querySelectorAll(%22.chat-width%20%3E%20div%22)%3B%0A%20%20%0A%20%20%20%20if%20(chatToolbars.length%20%3E%200)%20%7B%0A%20%20%20%20%20%20chatToolbars.forEach((e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(e.getElementsByClassName(%22display-copy-btn%22).length%20%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20const%20copyButton%20%3D%20document.createElement(%22button%22)%3B%0A%20%20%20%20%20%20%20%20%20%20copyButton.className%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22ml-2%20hover%3Atext-blue-500%20transition-colors%20display-copy-btn%22%3B%0A%20%20%20%20%20%20%20%20%20%20copyButton.innerHTML%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3Csvg%20none%3B%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide%20lucide-clipboard-copy%22%3E%3Crect%20width%3D%228%22%20height%3D%224%22%20x%3D%228%22%20y%3D%222%22%20rx%3D%221%22%20ry%3D%221%22%2F%3E%3Cpath%20d%3D%22M8%204H6a2%202%200%200%200-2%202v14a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2v-2%22%2F%3E%3Cpath%20d%3D%22M16%204h2a2%202%200%200%201%202%202v4%22%2F%3E%3Cpath%20d%3D%22M21%2014H11%22%2F%3E%3Cpath%20d%3D%22m15%2010-4%204%204%204%22%2F%3E%3C%2Fsvg%3E'%3B%0A%20%20%20%20%20%20%20%20%20%20copyButton.children%5B0%5D.style.pointerEvents%20%3D%20%22none%22%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20copyButton.onclick%20%3D%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20chattext%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.target.parentElement.parentElement.parentElement.getElementsByClassName(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22chattext%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(chattext.length%20%3D%3D%200)%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20copyToClipboard(chattext%5B0%5D.innerText)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20e.insertBefore(copyButton%2C%20e.firstChild)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20e.querySelectorAll(%22.display-copy-btn%22).forEach((e)%20%3D%3E%20e.remove())%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%0A%20%20%20%20%20%20%20%20if%20(e.getElementsByClassName(%22beautify-copy-btn%22).length%20%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20const%20beautifyCopyButton%20%3D%20document.createElement(%22button%22)%3B%0A%20%20%20%20%20%20%20%20%20%20beautifyCopyButton.className%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22ml-2%20hover%3Atext-blue-500%20transition-colors%20beautify-copy-btn%22%3B%0A%20%20%20%20%20%20%20%20%20%20beautifyCopyButton.innerHTML%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3Csvg%20style%3D%22pointer-events%3A%20none%3B%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide%20lucide-sparkles%22%3E%3Cpath%20d%3D%22M9.937%2015.5A2%202%200%200%200%208.5%2014.063l-6.135-1.582a.5.5%200%200%201%200-.962L8.5%209.936A2%202%200%200%200%209.937%208.5l1.582-6.135a.5.5%200%200%201%20.963%200L14.063%208.5A2%202%200%200%200%2015.5%209.937l6.135%201.581a.5.5%200%200%201%200%20.964L15.5%2014.063a2%202%200%200%200-1.437%201.437l-1.582%206.135a.5.5%200%200%201-.963%200z%22%2F%3E%3Cpath%20d%3D%22M20%203v4%22%2F%3E%3Cpath%20d%3D%22M22%205h-4%22%2F%3E%3Cpath%20d%3D%22M4%2017v2%22%2F%3E%3Cpath%20d%3D%22M5%2018H3%22%2F%3E%3C%2Fsvg%3E'%3B%0A%20%20%20%20%20%20%20%20%20%20beautifyCopyButton.children%5B0%5D.style.pointerEvents%20%3D%20%22none%22%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20const%20theme%20%3D%20window.getComputedStyle(document.documentElement)%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20beautifyCopyButton.onclick%20%3D%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20chattext%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.target.parentElement.parentElement.parentElement.getElementsByClassName(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22chattext%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(chattext.length%20%3D%3D%200)%20return%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20text%20%3D%20%60%3Cdiv%20style%3D%22%24%7BDIV_STYLE.replace(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%5B%5Cn%5D%2Fg%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20)%7D%20background-color%3A%20%24%7Btheme.getPropertyValue(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22--risu-theme-bgcolor%22%0A%20%20%20%20%20%20%20%20%20%20%20%20)%7D%3B%20color%3A%20%24%7Btheme.getPropertyValue(%22--FontColorStandard%22)%7D%22%3E%60%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20texts%20%3D%20chattext%5B0%5D.querySelectorAll(%22p%2C%20ul%2C%20h1%22)%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20texts.forEach((p%2C%20index)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20copy%20%3D%20p.cloneNode(true)%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20copy.querySelectorAll(%22em%22).forEach((em)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20em.style.color%20%3D%20theme.getPropertyValue(%22--FontColorItalic%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20em.style.fontStyle%20%3D%20%22italic%22%3B%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20em.outerHTML%20%3D%20em.outerHTML.replace(%2F%3Cem%2Fg%2C%20%22%3Cspan%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20copy.querySelectorAll(%22mark%5Brisu-mark%3Dquote1%5D%22).forEach((mark)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20mark.style.color%20%3D%20theme.getPropertyValue(%22--FontColorQuote1%22)%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20mark.outerHTML%20%3D%20mark.outerHTML.replace(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3Cmark%20risu-mark%3D%5C%22quote1%5C%22%2Fg%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%3Cspan%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20copy.querySelectorAll(%22mark%5Brisu-mark%3Dquote2%5D%22).forEach((mark)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20mark.style.color%20%3D%20theme.getPropertyValue(%22--FontColorQuote2%22)%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20mark.outerHTML%20%3D%20mark.outerHTML.replace(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3Cmark%20risu-mark%3D%5C%22quote2%5C%22%2Fg%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%3Cspan%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20copy.querySelectorAll(%22strong%22).forEach((strong)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strong.style.color%20%3D%20theme.getPropertyValue(%22--FontColorBold%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20copy.querySelectorAll(%22em%20strong%22).forEach((emStrong)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20emStrong.style.color%20%3D%20theme.getPropertyValue(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22--FontColorItalicBold%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20emStrong.style.fontStyle%20%3D%20%22italic%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20emStrong.style.fontWeight%20%3D%20%22bold%22%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20emStrong.outerHTML%20%3D%20emStrong.outerHTML.replace(%2F%3Cem%2Fg%2C%20%22%3Cspan%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20copy.querySelectorAll(%22img%22).forEach((img)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20img.remove()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%20%2B%3D%20copy.outerHTML%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20copy.tagName.toLowerCase()%20!%3D%20%22ul%22%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20texts.length%20-%201%20!%3D%20index%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%20%2B%3D%20%22%3Cp%3E%26nbsp%3B%3C%2Fp%3E%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20text%20%2B%3D%20%22%3C%2Fdiv%3E%22%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20copyToClipboard(text)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20e.insertBefore(beautifyCopyButton%2C%20e.firstChild)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20e.querySelectorAll(%22.beautify-copy-btn%22).forEach((e)%20%3D%3E%20e.remove())%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%7D)()%3B%7D)()%3B