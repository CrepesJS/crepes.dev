const f = "modulepreload",
	h = function (o) {
		return "/" + o;
	},
	l = {},
	E = function (d, c, b) {
		let a = Promise.resolve();
		if (c && c.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				e = r?.nonce || r?.getAttribute("nonce");
			a = Promise.allSettled(
				c.map((t) => {
					if (((t = h(t)), t in l)) return;
					l[t] = !0;
					const s = t.endsWith(".css"),
						u = s ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${t}"]${u}`)) return;
					const n = document.createElement("link");
					if (
						((n.rel = s ? "stylesheet" : f),
						s || (n.as = "script"),
						(n.crossOrigin = ""),
						(n.href = t),
						e && n.setAttribute("nonce", e),
						document.head.appendChild(n),
						s)
					)
						return new Promise((m, p) => {
							n.addEventListener("load", m),
								n.addEventListener("error", () =>
									p(
										new Error(
											`Unable to preload CSS for ${t}`,
										),
									),
								);
						});
				}),
			);
		}
		function i(r) {
			const e = new Event("vite:preloadError", { cancelable: !0 });
			if (((e.payload = r), window.dispatchEvent(e), !e.defaultPrevented))
				throw r;
		}
		return a.then((r) => {
			for (const e of r || []) e.status === "rejected" && i(e.reason);
			return d().catch(i);
		});
	};
(
	await E(async () => {
		const { initializeApp: o } = await import("./index.esm.Cu7LdMsX.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyCCtwe3PjtMkftqCgc0GC2k3cbKb9vYdGk",
	authDomain: "crepesjs-com.firebaseapp.com",
	databaseURL: "https://crepesjs-com.firebaseio.com",
	projectId: "crepesjs-com",
	storageBucket: "crepesjs-com.appspot.com",
	messagingSenderId: "451350706276",
	appId: "1:451350706276:web:b8dcaa0d46ce2aca058771",
	measurementId: "G-9E2P7HPRNM",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.BN2Bi06d.js.map
