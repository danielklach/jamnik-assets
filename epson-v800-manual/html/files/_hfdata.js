// Viewport meta dla urządzeń mobilnych
(function() {
  if (!document.querySelector('meta[name="viewport"]')) {
    var m = document.createElement('meta');
    m.name = 'viewport';
    m.content = 'width=device-width, initial-scale=1.0';
    var h = document.head || document.getElementsByTagName('head')[0];
    if (h) h.insertBefore(m, h.firstChild);
  }
})();

function head_data(strpath, strindexpath)
{
	
	document.write("<img src=\"files/10.gif\">\n");
	
}

function foot_data(strpath, strindexpath)
{
	document.write("<table cellSpacing=\"0\" cellPadding=\"0\" border=\"0\" width=\"100%\" bgcolor=\"#ffffff\">\n");
	document.write("<tr><td height=\"20\"></td></tr>\n");
	document.write("<tr>\n");
	document.write("<td height=\"25\" align=\"left\" vAlign=\"middle\">\n");

	document.write("<table cellSpacing=\"0\" cellPadding=\"0\" border=0>\n");
	document.write("<tbody>\n");
	document.write("<tr>\n");
	document.write("<td width=\"15\"><img src=\"files/15.gif\"></td>\n");
	
	document.write("<td><a href=\"index.htm\"><img border=\"0\" alt=\"\" src=\"files/top_home.gif\"></a></td>\n");
	document.write("<td class=\"foot-text\"><a href=\"index.htm\">Strona główna</a></td>\n");
	
	document.write("<td width=\"15\"><img src=\"files/15.gif\"></td>\n");
	document.write("<td><a href=\"javascript:winOpen('epsonwin2','htmltoc.htm',0,0,385,iheight-150)\" ><img border=\"0\" alt=\"\" src=\"files/top_toc.gif\"></a></td>\n");
	document.write("<td class=\"foot-text\"><a href=\"javascript:winOpen('epsonwin2','htmltoc.htm',0,0,385,iheight-150)\" >Spis treści</a></td>\n");
	
		document.write("<td width=\"15\"><img src=\"files/15.gif\"></td>\n");
		document.write("<td><a href=\"javascript:winOpen('epsonwin3','indexx.htm',0,20,385,iheight-150)\" ><img border=\"0\" alt=\"\" src=\"files/top_indx.gif\"></a></td>\n");
		document.write("<td class=\"foot-text\"><a href=\"javascript:winOpen('epsonwin3','indexx.htm',0,40,385,iheight-150)\" >Indeks</a></td>\n");
	
		document.write("<td width=\"15\"><img src=\"files/15.gif\"></td>\n");
		document.write("<td><a href=\"help.htm\"><img border=0 alt=\"\" src=\"files/top_help.gif\"></a></td>\n");
		document.write("<td class=\"foot-text\"><a href=\"help.htm\">Pomoc</a></td>\n");
	
	document.write("<td width=\"15\"><img src=\"files/15.gif\"></td>\n");
	document.write("</tr></tbody></table>\n");
	
	document.write("</td>\n");
	document.write("</tr>\n");
	document.write("<tr><td height=\"1\" bgcolor=\"#c0c0c0\"><img src=\"files/01.gif\"></td></tr>\n");
	document.write("<tr><td height=\"30\" class=\"code-text\"><img src=\"files/_fcopy.gif\" align=\"top\">(NPD5061-02 PL)</td></tr>\n");
	document.write("</table>\n");
}

var iwidth = screen.width;
var iheight = screen.height;

// ===== MODAL zamiast brzydkiego okna przeglądarki =====
function winOpen(winName, url, X, Y, W, H) {

	// Wstrzyknij style modala tylko raz
	if (!document.getElementById('epson-modal-styles')) {
		var style = document.createElement('style');
		style.id = 'epson-modal-styles';
		style.textContent = [
			'#epson-overlay {',
			'  position: fixed; top: 0; left: 0;',
			'  width: 100%; height: 100%;',
			'  background: rgba(0,0,0,0.55);',
			'  z-index: 9999;',
			'  display: flex;',
			'  align-items: center;',
			'  justify-content: center;',
			'}',
			'#epson-modal {',
			'  background: #fff;',
			'  border: 1px solid #bbb;',
			'  box-shadow: 0 8px 32px rgba(0,0,0,0.28);',
			'  width: 440px;',
			'  max-width: 92vw;',
			'  height: 78vh;',
			'  display: flex;',
			'  flex-direction: column;',
			'  border-radius: 6px;',
			'  overflow: hidden;',
			'}',
			'#epson-modal-head {',
			'  background: #f0f0f0;',
			'  border-bottom: 1px solid #ccc;',
			'  padding: 9px 14px;',
			'  display: flex;',
			'  justify-content: space-between;',
			'  align-items: center;',
			'  font-family: verdana, arial, sans-serif;',
			'  font-size: 11px;',
			'  font-weight: bold;',
			'  color: #333;',
			'  flex-shrink: 0;',
			'}',
			'#epson-modal-close {',
			'  cursor: pointer;',
			'  background: #888;',
			'  color: #fff;',
			'  border: none;',
			'  width: 22px; height: 22px;',
			'  border-radius: 4px;',
			'  font-size: 15px;',
			'  line-height: 22px;',
			'  text-align: center;',
			'  padding: 0;',
			'  font-family: arial, sans-serif;',
			'}',
			'#epson-modal-close:hover { background: #444; }',
			'#epson-modal-frame {',
			'  flex: 1;',
			'  border: none;',
			'  width: 100%;',
			'}'
		].join('\n');
		document.head.appendChild(style);
	}

	// Stwórz overlay + modal tylko raz, potem reużywaj
	var overlay = document.getElementById('epson-overlay');
	if (!overlay) {
		overlay = document.createElement('div');
		overlay.id = 'epson-overlay';

		var modal = document.createElement('div');
		modal.id = 'epson-modal';

		var head = document.createElement('div');
		head.id = 'epson-modal-head';

		var titleEl = document.createElement('span');
		titleEl.id = 'epson-modal-title';

		var closeBtn = document.createElement('button');
		closeBtn.id = 'epson-modal-close';
		closeBtn.innerHTML = '&#x2715;';
		closeBtn.onclick = function() { overlay.style.display = 'none'; };

		head.appendChild(titleEl);
		head.appendChild(closeBtn);

		var iframe = document.createElement('iframe');
		iframe.id = 'epson-modal-frame';

		modal.appendChild(head);
		modal.appendChild(iframe);
		overlay.appendChild(modal);
		document.body.appendChild(overlay);

		// Kliknięcie w ciemne tło zamyka modal
		overlay.addEventListener('click', function(e) {
			if (e.target === overlay) overlay.style.display = 'none';
		});

		// ESC zamyka modal
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape') overlay.style.display = 'none';
		});
	}

	// Ustaw tytuł
	var titles = { 'htmltoc': 'Spis treści', 'indexx': 'Indeks' };
	var title = '';
	for (var key in titles) {
		if (url.indexOf(key) !== -1) { title = titles[key]; break; }
	}
	document.getElementById('epson-modal-title').textContent = title;

	var iframe = document.getElementById('epson-modal-frame');

	// Po załadowaniu iframe — przechwyć kliknięcia w linki
	iframe.onload = function() {
		try {
			var iframeWin = iframe.contentWindow;
			var doc = iframe.contentDocument || iframeWin.document;

			// Nadpisz goMain wewnątrz iframe — zamiast window.opener użyj okna rodzica
			iframeWin.goMain = function(url) {
				overlay.style.display = 'none';
				window.location.href = url;
			};

			// Dodatkowe zabezpieczenie: przechwytuj kliknięcia dla linków z href innym niż javascript:
			doc.addEventListener('click', function(e) {
				// Znajdź najbliższy element <a>
				var link = e.target;
				while (link && link.tagName !== 'A') link = link.parentNode;
				if (!link) return;

				var href = link.getAttribute('href') || '';

				// Czysta kotwica (#coś) → zostaw domyślne zachowanie (scroll w iframe)
				if (href.charAt(0) === '#') return;

				// javascript: → goMain obsłuży to samo, ale jeśli coś innego,
				// zablokuj i przekieruj stronę główną
				if (href.indexOf('javascript:') === 0) return;

				// Zwykłe linki (http, względne) → nawiguj stronę główną i zamknij modal
				e.preventDefault();
				overlay.style.display = 'none';
				window.location.href = link.href; // link.href = absolutny URL
			});
		} catch(err) {
			console.warn('Modal iframe error:', err);
		}
	};

	iframe.src = url;
	overlay.style.display = 'flex';
}