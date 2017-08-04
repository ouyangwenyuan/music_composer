webpackJsonp([0], [function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        l.trigger(e, [r(t, {
            sender: n,
            evtName: e
        })])
    }
    function o(e, t) {
        l.trigger(c.RENDERER.RESET_IDLE_COOLDOWN),
        u.trigger(e, [t])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ACTION = t.EVT = t.ActionHandler = t.Event = void 0;
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    t.Signal = i,
    t.Dispatch = o;
    var a = n(110)
      , s = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a)
      , l = window.ee = new s.default;
    t.Event = l;
    var u = t.ActionHandler = window.e2 = new s.default
      , c = t.EVT = {
        CAMERA: {
            PANNED: "CAMERA_PANNED",
            ZOOM: "CAMERA_ZOOM"
        },
        MEASURE_BAR_MENU: {
            PASTE_MODE_ON: "PASTE_MODE_ON",
            PASTE_MODE_OFF: "PASTE_MODE_OFF",
            ENTER_PASTE_MODE: "MEASURE_MENU_ENTER_PASTE_MODE",
            EXIT_PASTE_MODE: "MEASURE_MENU_EXIT_PASTE_MODE",
            OPEN: "MEASURE_MENU_SHOULD_OPEN",
            OPENED: "MEASURE_MENU_OPENED",
            CLOSE: "MEASURE_MENU_SHOULD_CLOSE",
            CLOSED: "MEASURE_MENU_CLOSED",
            UPDATE_PASTE_BTN: "MEASURE_BAR_MENU_UPDATE_PASTE_BTN"
        },
        ROW: {
            ADD: "ROW_ADD",
            REMOVE: "ROW_REMOVE"
        },
        HISTORY: {
            UNDONE: "HISTORY_UNDONE",
            REDONE: "HISTORY_REDONE",
            SAVED: "HISTORY_SAVED"
        },
        PLAYER: {
            TICKED: "PLAYER_TICKED",
            PAUSED: "PLAYER_PAUSED",
            ENDED: "PLAYER_ENDED"
        },
        GESTURE: {
            LOCK: "GESTURE_LOCK",
            UNLOCKED: "GESTURE_UNLOCK",
            CHANGE_TO_NULL: "GESTURE_CHANGE_TO_NULL"
        },
        MEASURE: {
            DELETE: "MEASURE_DELETE",
            PASTE: "MEASURE_PASTE",
            KEYSIG_UPDATE: "MEASURE_KEYSIG_UPDATE"
        },
        KEYBOARD: {
            PRESSED: "KEYBOARD_PRESSED",
            MOVED: "KEYBOARD_MOVED",
            UP: "KEYBOARD_UP",
            LEFT: "KEYBOARD_LEFT"
        },
        NOTE: {
            EDIT: "NOTE_EDIT",
            DID_PLAY: "NOTE_DID_PLAY"
        },
        MODAL: {
            SHOW_RESET: "MODAL_SHOW_RESET",
            SHOW_HELP: "MODAL_SHOW_HELP",
            SHOW_LOST_CONNECTION: "MODAL_SHOW_LOST_CONNECTION"
        },
        ARRANGEMENT: {
            PUBLISH: "ARR_PUBLISH",
            PREVIEWING: "ARR_PREVIEWING",
            RESET: "ARR_RESET",
            LOAD: "ARR_LOAD",
            TEMPO_UPDATE: "ARR_TEMPO_UPDATE",
            TEMPO_UPDATED: "ARR_TEMPO_UPDATED",
            TIMESIG_UPDATE: "ARR_TIMESIG_UPDATE",
            TIMESIG_UPDATED: "ARR_TIMESIG_UPDATED",
            COVER_UPDATE: "ARR_COVER_UPDATE",
            COVER_UPDATED: "ARR_COVER_UPDATED",
            PREVIEW_UPDATE: "ARR_PREVIEW_UPDATE",
            CLEAR: "ARR_CLEAR",
            SET: "ARR_SET"
        },
        CATALOG: {
            RESTRICT: "CATALOG_RESTRICT",
            RESTRICTED: "CATALOG_RESTRICTED",
            MATCHED: "CATALOG_MATCHED"
        },
        COMPOSER_UI: {
            LOADED: "COMPOSER_UI_LOADED"
        },
        RENDERER: {
            RESET_IDLE_COOLDOWN: "RENDERER_RESET_IDLE_COOLDOWN"
        }
    };
    t.ACTION = {
        MEASURE_BAR: {
            ZOOM_INTO: "MEASURE_BAR_ZOOM_IN",
            SELECT: "MEASURE_BAR_SELECT",
            DELETE: "MEASURE_BAR_DELETE",
            PASTE: "MEASURE_BAR_PASTE"
        },
        VIEW: {
            CHANGE: "VIEW_CHANGE"
        },
        MINIMAP: {
            OPEN: "MINIMAP_OPEN",
            CLOSE: "MINIMAP_CLOSE"
        },
        CAMERA: {
            PAN: "CAMERA_PAN",
            PAN_TO: "CAMERA_PAN_TO",
            ZOOM: "ZOOM",
            ZOOM_TO_NEAREST: "CAMERA_ZOOM_TO_NEAREST",
            TWEEN_TO_ADJ_MEASURE: "TWEEN_TO_ADJ_MEASURE",
            TWEEN_TO_NEXT_NOTE: "TWEEN_TO_NEXT_NOTE",
            ANIMATE_ZOOM: "CAMERA_ANIMATE_ZOOM",
            ZOOM_OUT: "CAMERA_ZOOM_OUT",
            ZOOM_IN: "CAMERA_ZOOM_IN",
            PINCH_ZOOM: "CAMERA_PINCH_ZOOM"
        },
        PEG_BOARD: {
            CLICK: "PEG_BOARD_CLICK"
        },
        CHROMATIC: {
            OPEN: "CHROMATIC_OPEN",
            CLOSE: "CHROMATIC_CLOSE"
        },
        MEASURE_PASTE_POINT: {
            SELECT: "MEASURE_SOCKET_SELECTED"
        },
        NOTE: {
            SHIFTED: "NOTE_SHIFTED",
            EDIT: "NOTE_EDIT",
            CLICK: "NOTE_CLICK",
            PLAY: "NOTE_PLAY"
        },
        PLAY_BTN: {
            CLICK: "PLAY_BTN_CLICK"
        },
        ROW: {
            ADD: "ROW_ADD",
            REMOVE: "ROW_REMOVE"
        },
        EDIT_SETTINGS: {
            OPEN: "EDIT_SETTINGS_OPEN",
            CLOSE: "EDIT_SETTINGS_CLOSE",
            TEMPO_OPEN: "TEMPO_SCREEN_OPEN",
            TEMPO_CLOSE: "TEMPO_SCREEN_CLOSE",
            UPDATE_TITLE: "EDIT_SETTINGS_UPDATE_TITLE",
            UPDATE_SUBTITLE: "EDIT_SETTINGS_UPDATE_SUBTITLE",
            UPDATE_ARTIST: "EDIT_SETTINGS_UPDATE_ARTIST",
            UPDATE_TAGS: "EDIT_SETTINGS_UPDATE_TAGS",
            TOGGLE_TOS: "EDIT_SETTINGS_TOGGLE_TOS",
            PUBLISH: "EDIT_SETTINGS_PUBLISH",
            PREVIEW: "EDIT_SETTINGS_PREVIEW",
            DISCARD_COVER: "EDIT_SETTINGS_DISCARD_COVER",
            SET_COVER: "EDIT_SETTINGS_SET_COVER"
        },
        PIANO_MENU: {
            SHOW: "PIANO_MENU_SHOW",
            HIDE: "PIANO_MENU_HIDE"
        },
        ROW_MENU: {
            OPEN: "ROW_MENU_OPEN",
            CLOSE: "ROW_MENU_CLOSE"
        },
        MEASURE_BAR_MENU: {
            TOGGLE_PASTE_MODE: "MEASURE_BAR_MENU_TOGGLE_PASTE_MODE",
            OPEN: "MEASURE_MENU_SHOULD_OPEN",
            CLOSE: "MEASURE_MENU_SHOULD_CLOSE",
            UPDATE_PASTE_BTN: "MEASURE_BAR_MENU_UPDATE_PASTE_BTN"
        },
        ZOOM_MENU: {
            OPEN: "ZOOM_MENU_OPEN",
            CLOSE: "ZOOM_MENU_CLOSE"
        },
        KEYSIG_SCREEN: {
            OPEN: "KEYSIG_SCREEN_OPEN",
            CLOSE: "KEYSIG_SCREEN_CLOSE"
        },
        MODALS: {
            TOGGLE_START_OVER_MODAL: "TOGGLE_START_OVER_MODAL",
            CONFIRM_START_OVER: "CONFIRM_START_OVER",
            DECLINE_START_OVER: "DECLINE_START_OVER",
            TOGGLE_HELP_MODAL: "TOGGLE_HELP_MODAL",
            NEVER_SHOW_HELP_AGAIN: "NEVER_SHOW_HELP_MODAL_AGAIN",
            TOGGLE_CATALOG_MODAL: "TOGGLE_CATALOG_MODAL",
            TOGGLE_RESTRICTED_MODAL: "TOGGLE_RESTRICTED_MODAL",
            TOGGLE_ADD_NOTES_MODAL: "TOGGLE_ADD_NOTES_MODAL",
            TOGGLE_INVALID_ARR_MODAL: "TOGGLE_INVALID_ARR_MODAL",
            TOGGLE_LOST_CONNECTION_MODAL: "TOGGLE_LOST_CONNECTION_MODAL"
        },
        HISTORY: {
            UNDO: "HISTORY_UNDO",
            REDO: "HISTORY_REDO"
        }
    }
}
, , , , function(e, t, n) {
    "use strict";
    function i() {
        return navigator.userAgent.match(/Android|webOS|iPhone|iPod|iPad|Blackberry/i)
    }
    function o(e, t) {
        var n = Math.sign(t.sharps) < 0 ? "minor" : "major"
          , i = Math.floor((e - r.pitchOffset) / 12) + 2;
        return r.octave[n][e % 12] + i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isMobile = i,
    t.pitch2KeyLabel = o;
    var r = t.config = {
        bpm: 104,
        countDown: 8,
        timePerFrame: 1 / 60,
        pxPerBeat: 30,
        pxPerPitch: 30,
        menubarHeight: 60,
        meter: 4,
        mode: "chromatic",
        key: 0,
        availablePitches: 72,
        pitchOffset: 36,
        pegSize: 8,
        keyboardHeight: 48,
        keyboardOffset: 64,
        sidebarWidth: 64,
        minimap: {
            width: 64,
            mPaddingX: 10,
            ffSize: 7,
            mapGridHeight: 15,
            mapMeasureHeight: 64,
            mapMeasureWidth: 64
        },
        ticksWidth: 72,
        retina: window.devicePixelRatio > 1.5,
        newSong: {
            title: "My New Song",
            key_signature: {
                sharps: 0,
                minor: !1
            },
            time_signature: {
                numerator: 4,
                denominator: 4
            },
            tempo: 120,
            notes: []
        },
        octave: {
            major: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
            minor: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
            all: ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"]
        },
        pinchZoomTriggerDist: 160,
        historyLength: 50,
        historyMergeThreshold: .3
    };
    t.ID = {
        MEASURE_VIEW: "MEASURE",
        EDIT_VIEW: "EDIT",
        EDIT_VIEW_CAMERA: "EDIT_CAMERA",
        MEASURE_VIEW_CAMERA: "MEASURE_CAMERA",
        GESTURE: {
            NULL_GESTURE: "NULL_GESTURE",
            PAN_GESTURE: "PAN_GESTURE",
            PINCH_GESTURE: "PINCH_GESTURE",
            ZOOM_MENU_GESTURE: "ZOOM_MENU_GESTURE",
            ROW_ACTION_GESTURE: "ROW_ACTION_GESTURE",
            ADD_NOTE_GESTURE: "ADD_NOTE_GESTURE",
            MINIMAP_GESTURE: "MINIMAP_GESTURE",
            PLAYBACK_PAN_GESTURE: "PLAYBACK_PAN_GESTURE",
            DISABLED_GESTURE: "DISABLED_GESTURE"
        }
    },
    t.SPRITE_TYPE = {
        MEASURE_BG_COLUMN: "MEASURE_BG_COLUMN",
        CURRENT_LINE: "CURRENT_LINE",
        BOTTOM_GRADIENT: "BOTTOM_GRADIENT",
        EDIT_ROW_LINE: "EDIT_ROW_LINE",
        MEASURE_INDICATOR: "MEASURE_INDICATOR",
        KEY_NAME: "KEY_NAME",
        KEY_CIRCLE: "KEY_CIRCLE",
        KEY_CIRCLE_TAPPED: "KEY_CIRCLE_TAPPED",
        KEY_SIG_BG: "KEY_SIG_BG",
        KEY_SIG_GRADIENT: "KEY_SIG_GRADIENT",
        MEASURE_VIEW_BG: "MEASURE_VIEW_BG",
        MEASURE_VIEW_FF_SPRITE: "MEASURE_VIEW_FF_SPRITE",
        MEASURE_VIEW_FF_TEX: "MEASURE_VIEW_FF_TEX",
        MEASURE_VIEW_CHECKBOX: "MEASURE_VIEW_CHECKBOX",
        MEASURE_PASTE_POINT: "MEASURE_PASTE_POINT",
        TOAST_MSG: "TOAST_MSG"
    },
    t.getViewConfig = function(e) {
        switch (e) {
        case "MEASURE":
            var t = .6 * window.innerWidth;
            return {
                viewId: "MEASURE",
                minimap: !1,
                keyboard: !1,
                zoom: !0,
                panX: !1,
                panY: !0,
                pastePointHeight: 48,
                pastePointIconSize: 44,
                measureWidth: t,
                gridHeight: 43,
                measureHeight: 174,
                ffSize: 20,
                containerSlideLeftOffset: -20,
                containerSlideRightOffset: (window.innerWidth - r.sidebarWidth - t) / 2,
                labelBgColor: 3483730,
                labelBgAlpha: 1,
                labelBgBrightColor: 4864870,
                labelBgBrightAlpha: 1,
                labelColor: 10719921,
                labelAlpha: 1,
                labelBrightAlpha: 1,
                labelWidth: 24,
                labelX: t - 12,
                labelY: 8,
                measureBgColor: 4864870,
                measureBgAlpha: .2,
                measureBgBrightColor: 5325406,
                measureBgBrightAlpha: .5,
                measureMargin: 1,
                pastePointMargin: 6,
                checkBoxSize: 44,
                minimapSensitivity: 0,
                hitLineY: window.innerHeight - 100
            };
        case "EDIT":
            return {
                viewId: "EDIT",
                minimap: !0,
                keyboard: !0,
                keyCircleSize: 64,
                zoom: !0,
                panX: !0,
                panY: !0,
                minimapConfig: {
                    measureWidth: 440,
                    gridHeight: 25,
                    measureHeight: 100,
                    labelWidth: 24,
                    ffSize: 20,
                    labelBgColor: 3483730,
                    labelBgAlpha: 1,
                    labelBgBrightAlpha: .2,
                    labelAlpha: .5,
                    labelColor: 10719921,
                    labelY: 16,
                    labelBgWidthRatio: 24 / 440,
                    labelBrightAlpha: 1,
                    measureBgBrightAlpha: .2,
                    measureBgColor: 4864870,
                    measureBgMargin: 3,
                    measureBgAlpha: .2,
                    measureMargin: 1,
                    backdropColor: 0,
                    backdropAlpha: .24,
                    minimapPadding: 6
                },
                mapHeight: window.innerHeight,
                hitLineY: window.innerHeight - 90,
                gridWidth: 56,
                gridHeight: 48,
                keySigIndicator: !0,
                barWindowScrollArea: {
                    w: 64,
                    h: 88
                }
            };
        case "PREVIEW":
            return {
                viewId: "PREVIEW",
                minimap: !0,
                keyboard: !1,
                zoom: !1,
                panX: !1,
                panY: !0,
                noteXSpacing: 50,
                minimapSensitivity: 4,
                mapHeight: .6 * window.innerHeight,
                previewWidth: .7 * window.innerWidth,
                previewXOffset: 200,
                hitLineY: window.innerHeight - 100
            }
        }
    }
    ,
    t.fireflySpeedFactor = 150,
    t.textureCache = {},
    t.msToMin = 1 / 6e4,
    t.refs = {},
    t.keySigMap = {
        keyToSharps: {
            major: {
                Cb: -7,
                Gb: -6,
                Db: -5,
                Ab: -4,
                Eb: -3,
                Bb: -2,
                F: -1,
                C: 0,
                G: 1,
                D: 2,
                A: 3,
                E: 4,
                B: 5,
                "F#": 6,
                "C#": 7
            },
            minor: {
                Ab: -7,
                Eb: -6,
                Bb: -5,
                F: -4,
                C: -3,
                G: -2,
                D: -1,
                A: 0,
                E: 1,
                B: 2,
                "F#": 3,
                "C#": 4,
                "G#": 5,
                "D#": 6,
                "A#": 7
            }
        },
        sharpsToKey: {
            major: {
                "-7": "Cb",
                "-6": "Gb",
                "-5": "Db",
                "-4": "Ab",
                "-3": "Eb",
                "-2": "Bb",
                "-1": "F",
                0: "C",
                1: "G",
                2: "D",
                3: "A",
                4: "E",
                5: "B",
                6: "F#",
                7: "C#"
            },
            minor: {
                "-7": "Ab",
                "-6": "Eb",
                "-5": "Bb",
                "-4": "F",
                "-3": "C",
                "-2": "G",
                "-1": "D",
                0: "A",
                1: "E",
                2: "B",
                3: "F#",
                4: "C#",
                5: "G#",
                6: "D#",
                7: "A#"
            }
        }
    }
}
, , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ClientInterface = t.ComposerInit = void 0;
    var i = (n(4),
    n(0))
      , o = n(256)
      , r = (n(41),
    !1)
      , a = (t.ComposerInit = window.composer = {
        initSmuleClone: function(e) {
            o.ArrangementController.getPrimeSongJSON(e).then(function(e) {
                (0,
                i.Signal)(i.EVT.ARRANGEMENT.LOAD, {
                    arrangementJSON: e,
                    fromApp: !0
                }, null)
            })
        },
        initCommunityClone: function(e) {
            o.ArrangementController.getPrimeArrangementJSON(e).then(function(e) {
                (0,
                i.Signal)(i.EVT.ARRANGEMENT.LOAD, {
                    arrangementJSON: e,
                    fromApp: !0
                }, null)
            })
        },
        initEdit: function(e) {
            o.ArrangementController.getOwnedArrangementJSON(e).then(function(e) {
                (0,
                i.Signal)(i.EVT.ARRANGEMENT.LOAD, {
                    arrangementJSON: e,
                    fromApp: !0
                }, null)
            })
        },
        initFromPreview: function(e) {
            var t;
            t = "string" == typeof e ? JSON.parse(e) : e,
            r = !1,
            (0,
            i.Signal)(i.EVT.ARRANGEMENT.PREVIEW_UPDATE, {
                fireflyJSON: t
            }, null)
        },
        clearLocalStorage: function() {
            (0,
            i.Signal)(i.EVT.ARRANGEMENT.CLEAR, {}, null)
        }
    },
    function(e) {
        console.log("Event EL: [" + e.eventName + "], data [" + JSON.stringify(e) + "]")
    }
    )
      , s = function(e) {
        for (var t = "", n = new Uint8Array(e), i = n.byteLength, o = 0; o < i; o++)
            t += String.fromCharCode(n[o]);
        return window.btoa(t)
    }
      , l = {
        showMenu: function(e) {
            console.log("iOS Interface: showMenu"),
            window.webkit.messageHandlers.showMenu.postMessage(e)
        },
        hideMenu: function(e) {
            console.log("iOS Interface: hideMenu"),
            window.webkit.messageHandlers.hideMenu.postMessage(e)
        },
        composerLoad: function() {
            window.webkit.messageHandlers && window.webkit.messageHandlers.composerLoad && (console.log("iOS Interface: composerLoad"),
            window.webkit.messageHandlers.composerLoad.postMessage({}))
        },
        startPreview: function(e) {
            return o.ArrangementController.getPreviewArrangement(e).then(function(e) {
                var t = s(e.midiData)
                  , n = e.pianoSongData;
                return n.extraData = JSON.stringify(n.extraData),
                console.log("iOS Interface: startPreview"),
                console.log("Arrangement JSON: ", e.pianoSongData),
                window.webkit.messageHandlers.startPreview.postMessage({
                    midiData: t,
                    pianoSongData: n
                }),
                e
            })
        },
        saveQuit: function() {
            window.webkit.messageHandlers.saveQuit.postMessage({})
        },
        composerEvent: function(e) {
            a(e),
            window.webkit.messageHandlers && window.webkit.messageHandlers.composerEvent ? window.webkit.messageHandlers.composerEvent.postMessage({
                eventData: e
            }) : console.log("iOS composerEvent messageHandler not found")
        }
    }
      , u = {
        showMenu: function() {
            console.log("Android Interface: showMenu"),
            Android.showMenu()
        },
        hideMenu: function() {
            console.log("Android Interface: hideMenu"),
            Android.hideMenu()
        },
        composerLoad: function() {
            console.log("Android Interface: composerLoad"),
            Android.composerLoad()
        },
        startPreview: function(e) {
            return o.ArrangementController.getPreviewArrangement(e).then(function(e) {
                var t = s(e.midiData)
                  , n = JSON.stringify(e.pianoSongData);
                return console.log("Android Interface: startPreview"),
                console.log("Arrangement JSON: ", e.pianoSongData),
                r || (Android.startPreview(t, n),
                r = !0),
                e
            })
        },
        saveQuit: function() {
            Android.saveQuit()
        },
        composerEvent: function(e) {
            a(e),
            Android.composerEvent ? Android.composerEvent(JSON.stringify(e)) : console.log("Android.composerEvent function not found")
        }
    }
      , c = {
        showMenu: function() {
            console.log("Web Interface: showMenu")
        },
        hideMenu: function() {
            console.log("Web Interface: hideMenu")
        },
        composerLoad: function() {
            console.log("Web Interface: composerLoad")
        },
        startPreview: function(e) {
            return console.log("Web Interface: startPreview"),
            console.log("Arrangement JSON: ", e),
            o.ArrangementController.getPreviewArrangement(e).then(function(e) {
                var t = (s(e.midiData),
                e.pianoSongData);
                return t.extraData = JSON.stringify(t.extraData),
                console.log("pianoSongData: ", t),
                e
            })
        },
        saveQuit: function() {
            console.log("Web Interface: saveQuit")
        },
        composerEvent: function(e) {
            a(e),
            console.log("Web Interface: composerEvent"),
            console.log("Event Data: ", e)
        }
    }
      , h = t.ClientInterface = void 0;
    window.webkit ? t.ClientInterface = h = l : "undefined" != typeof Android ? t.ClientInterface = h = u : t.ClientInterface = h = c,
    h.clientMode = window.webkit || "undefined" != typeof Android,
    h.iOS = !!window.webkit,
    h.android = !!window.Android
}
, , , , , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), a = n(7), s = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a), l = n(4), u = function() {
        function e() {
            i(this, e)
        }
        return r(e, [{
            key: "get",
            value: function(e) {
                return s.default.utils.TextureCache[e]
            }
        }, {
            key: "getPegTex",
            value: function(e, t) {
                return s.default.utils.TextureCache[(e ? "onBeatPeg" : "offBeatPeg") + (t ? "Dimmed" : "")]
            }
        }, {
            key: "getLineIndicatorTex",
            value: function() {
                return s.default.utils.TextureCache.lineIndicator
            }
        }, {
            key: "getBackgroundColumnsTex",
            value: function() {
                return s.default.utils.TextureCache.bgColumn
            }
        }, {
            key: "getMeasureBarBgTex",
            value: function(e) {
                return s.default.utils.TextureCache[e ? "measureBarActive" : "measureBarInactive"]
            }
        }, {
            key: "getKeyLarge",
            value: function(e) {
                return s.default.utils.TextureCache["keyLarge" + e]
            }
        }, {
            key: "getKeySmall",
            value: function(e) {
                return s.default.utils.TextureCache["keySmall" + e]
            }
        }, {
            key: "getPastePoint",
            value: function(e) {
                return s.default.utils.TextureCache[(e ? "active" : "inactive") + "PastePoint"]
            }
        }, {
            key: "_buildLineIndicatorCache",
            value: function(e) {
                var t = new s.default.Container
                  , n = new s.default.Graphics;
                n.beginFill(3355443),
                n.drawRect(0, 0, 4, 4),
                t.addChild(n);
                var i = new s.default.RenderTexture(e,4,4,s.default.SCALE_MODES.DEFAULT,2);
                i.render(t);
                var o = new s.default.Texture(i.baseTexture,new s.default.Rectangle(1,1,1,1));
                s.default.Texture.addTextureToCache(o, "lineIndicator"),
                n.destroy(!0),
                t.destroy()
            }
        }, {
            key: "_buildPegMapTex",
            value: function(e) {
                var t = (0,
                l.getViewConfig)("EDIT")
                  , n = t.gridHeight
                  , i = t.gridWidth
                  , o = new s.default.Container
                  , r = new s.default.Sprite(s.default.utils.TextureCache["icn_beat.png"]);
                r.anchor.set(.5),
                r.scale.set(.5),
                r.position.set(i / 2, n / 2),
                r.alpha = .72,
                o.addChild(r);
                var a = new s.default.Sprite(s.default.utils.TextureCache["icn_beat.png"]);
                a.anchor.set(.5),
                a.scale.set(.5),
                a.position.set(3 * i / 2, n / 2),
                a.alpha = .24,
                o.addChild(a);
                var u = new s.default.Sprite(s.default.utils.TextureCache["icn_beat.png"]);
                u.anchor.set(.5),
                u.scale.set(.5),
                u.position.set(5 * i / 2, n / 2),
                u.alpha = .08,
                o.addChild(u);
                var c = new s.default.Sprite(s.default.utils.TextureCache["icn_beat.png"]);
                c.anchor.set(.5),
                c.scale.set(.5),
                c.position.set(7 * i / 2, n / 2),
                c.alpha = .08,
                o.addChild(c);
                var h = new s.default.RenderTexture(e,4 * i,n,s.default.SCALE_MODES.DEFAULT,2);
                h.render(o);
                var d = new s.default.Texture(h.baseTexture,new s.default.Rectangle(0,0,i,n))
                  , p = new s.default.Texture(h.baseTexture,new s.default.Rectangle(2 * i,0,i,n))
                  , f = new s.default.Texture(h.baseTexture,new s.default.Rectangle(i,0,i,n))
                  , m = new s.default.Texture(h.baseTexture,new s.default.Rectangle(3 * i,0,i,n));
                s.default.Texture.addTextureToCache(d, "onBeatPeg"),
                s.default.Texture.addTextureToCache(p, "onBeatPegDimmed"),
                s.default.Texture.addTextureToCache(f, "offBeatPeg"),
                s.default.Texture.addTextureToCache(m, "offBeatPegDimmed"),
                r.destroy(),
                a.destroy(),
                u.destroy(),
                c.destroy(),
                o.destroy()
            }
        }, {
            key: "_buildColumnTex",
            value: function(e) {
                var t = new s.default.Container
                  , n = new s.default.Graphics;
                n.beginFill(0),
                n.drawRect(0, 0, 56, 4),
                n.alpha = .32,
                t.addChild(n);
                var i = new s.default.RenderTexture(e,56,1,s.default.SCALE_MODES.DEFAULT,2);
                i.render(t);
                var o = new s.default.Texture(i.baseTexture,new s.default.Rectangle(0,0,56,1));
                s.default.Texture.addTextureToCache(o, "bgColumn"),
                n.destroy(!0),
                t.destroy()
            }
        }, {
            key: "_buildMeasureBarBgTex",
            value: function(e) {
                s.default.utils.TextureCache.measureBarInactive && s.default.utils.TextureCache.measureBarInactive.destroy(!0),
                s.default.utils.TextureCache.measureBarActive && s.default.utils.TextureCache.measureBarActive.destroy(!0);
                var t = (0,
                l.getViewConfig)("MEASURE")
                  , n = new s.default.Container
                  , i = new s.default.RenderTexture(e,t.measureWidth,4,s.default.SCALE_MODES.DEFAULT,2)
                  , o = t.measureWidth - t.labelWidth
                  , r = t.labelWidth
                  , a = new s.default.Graphics;
                a.beginFill(t.measureBgColor),
                a.drawRect(0, 0, o, 2),
                a.alpha = t.measureBgAlpha;
                var u = new s.default.Graphics;
                u.beginFill(t.labelBgColor),
                u.drawRect(o, 0, r, 2),
                u.alpha = t.labelBgAlpha,
                n.addChild(a),
                n.addChild(u);
                var c = new s.default.Graphics;
                c.beginFill(t.measureBgBrightColor),
                c.drawRect(0, 2, o, 2),
                c.alpha = t.measureBgBrightAlpha;
                var h = new s.default.Graphics;
                h.beginFill(t.labelBgBrightColor),
                h.drawRect(o, 2, r, 2),
                h.alpha = t.labelBgBrightAlpha,
                n.addChild(c),
                n.addChild(h),
                i.render(n);
                var d = new s.default.Texture(i.baseTexture,new s.default.Rectangle(0,0,t.measureWidth,1))
                  , p = new s.default.Texture(i.baseTexture,new s.default.Rectangle(0,3,t.measureWidth,1));
                s.default.Texture.addTextureToCache(d, "measureBarInactive"),
                s.default.Texture.addTextureToCache(p, "measureBarActive"),
                n.destroy(),
                a.destroy(!0),
                u.destroy(!0),
                c.destroy(!0),
                h.destroy(!0)
            }
        }, {
            key: "_buildKeyboardKeyTex",
            value: function(e) {
                for (var t = (0,
                l.getViewConfig)("EDIT"), n = t.gridWidth, i = t.gridHeight, o = new s.default.Container, r = l.config.octave.all, a = 0; a < r.length; a++) {
                    var u = new s.default.Text(r[a],{
                        font: "16px ProximaNova",
                        fill: 15790320
                    },2);
                    u.anchor.set(.5),
                    u.position.set(a * n + n / 2, i / 2),
                    o.addChild(u);
                    var c = new s.default.Text(r[a],{
                        font: "12px ProximaNova",
                        fill: 15790320
                    },2);
                    c.anchor.set(.5),
                    c.position.set(a * n + n / 2, 3 * i / 2),
                    o.addChild(c)
                }
                var h = new s.default.RenderTexture(e,r.length * n,2 * i,s.default.SCALE_MODES.DEFAULT,2);
                h.render(o);
                for (var d = 0; d < r.length; d++) {
                    var p = new s.default.Texture(h.baseTexture,new s.default.Rectangle(d * n,0,n,i))
                      , f = new s.default.Texture(h.baseTexture,new s.default.Rectangle(d * n,i,n,i));
                    s.default.Texture.addTextureToCache(p, "keyLarge" + r[d]),
                    s.default.Texture.addTextureToCache(f, "keySmall" + r[d])
                }
                o.destroy(!0)
            }
        }, {
            key: "_buildPastePointTex",
            value: function(e) {
                var t = (0,
                l.getViewConfig)("MEASURE")
                  , n = new s.default.RenderTexture(e,t.measureWidth + 1,t.pastePointHeight,s.default.SCALE_MODES.DEFAULT,2)
                  , i = new s.default.Container
                  , o = new s.default.Sprite(s.default.utils.TextureCache["socket_rect.png"]);
                o.width = t.measureWidth;
                var r = new s.default.Sprite(s.default.utils.TextureCache["icn_addrow.png"]);
                r.scale.set(t.pastePointIconSize / r.width),
                r.anchor.set(.5),
                r.position.set(o.width / 2, o.height / 2),
                i.addChild(o),
                i.addChild(r),
                n.render(i),
                i.removeChildren(0);
                var a = new s.default.RenderTexture(e,t.measureWidth,t.pastePointHeight,s.default.SCALE_MODES.DEFAULT,2)
                  , u = new s.default.Graphics;
                u.lineStyle(1, 4886754),
                u.drawRect(1, 1, t.measureWidth - 2, t.pastePointHeight - 2);
                var c = new s.default.Sprite(s.default.utils.TextureCache["icn_check.png"]);
                c.scale.set(t.pastePointIconSize / c.width),
                c.anchor.set(.5),
                c.position.set(u.width / 2, u.height / 2),
                i.addChild(u),
                i.addChild(c),
                a.render(i),
                s.default.Texture.addTextureToCache(a, "activePastePoint"),
                s.default.Texture.addTextureToCache(n, "inactivePastePoint")
            }
        }, {
            key: "onWindowResize",
            value: function(e) {
                this._buildMeasureBarBgTex(e),
                this._buildPastePointTex(e)
            }
        }, {
            key: "buildCache",
            value: function(e) {
                this._buildPegMapTex(e),
                this._buildLineIndicatorCache(e),
                this._buildColumnTex(e),
                this._buildMeasureBarBgTex(e),
                this._buildKeyboardKeyTex(e),
                this._buildPastePointTex(e)
            }
        }], [{
            key: "getInstance",
            value: function() {
                return o || (o = new e),
                o
            }
        }]),
        e
    }();
    t.default = u.getInstance()
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        return Math.round((n - t) / e)
    }
    function o(e, t) {
        return e < 2 ? t * e : e < 4 ? t * e * .5 : e < 8 ? t * e * .25 : t
    }
    function r(e) {
        return Math.pow(2, Math.floor(Math.log(e) / Math.LN2 + .5))
    }
    function a(e) {
        return 1 == e || 2 == e || 4 == e || 8 == e
    }
    function s(e) {
        var t = r(e);
        return t != u ? (u = t,
        t) : 0
    }
    function l(e, t) {
        return e < 1 ? .0085 * t * .5 : e < 2 ? .0085 * t : e < 4 ? 2 * t * .0085 : e <= 8 ? 4 * t * .0085 : 8 * t * .0085
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.snap = i,
    t.getPegGridHeight = o,
    t.getNearestZoomScale = r,
    t.isValidZoomScale = a,
    t.zoomScaleChanged = s,
    t.pinchDeltaToZoomScaleDelta = l,
    Math.log2 = Math.log2 || function(e) {
        return Math.log(e) / Math.LN2
    }
    ;
    var u = 1;
    t.math = void 0
}
, , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), a = n(7), s = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a), l = (n(31),
    function() {
        function e() {
            i(this, e),
            this._spriteHash = {}
        }
        return r(e, null, [{
            key: "getInstance",
            value: function() {
                return o || (o = new e),
                o
            }
        }]),
        r(e, [{
            key: "getSpriteHash",
            value: function(e) {
                return this._spriteHash[e] || (this._spriteHash[e] = {
                    _count: 0,
                    _pool: []
                }),
                this._spriteHash[e]
            }
        }, {
            key: "get",
            value: function(e) {
                var t = this.getSpriteHash(e);
                return t._pool.length > 0 ? t._pool.pop() : (t._count++,
                new s.default.Sprite)
            }
        }, {
            key: "recycle",
            value: function(e, t) {
                this.getSpriteHash(t)._pool.push(e),
                e.interactive && (e.off("mousedown"),
                e.off("touchstart"),
                e.off("mousemove"),
                e.off("touchmove"),
                e.off("mouseup"),
                e.off("touchend"))
            }
        }, {
            key: "recycleArray",
            value: function(e, t) {
                var n = this.getSpriteHash(t);
                n._pool = n._pool.concat(e);
                for (var i = 0; i < e.length; i++)
                    e[i].interactive && (e[i].off("mousedown"),
                    e[i].off("touchstart"),
                    e[i].off("mousemove"),
                    e[i].off("touchmove"),
                    e[i].off("mouseup"),
                    e[i].off("touchend"))
            }
        }]),
        e
    }());
    window.spritePool = l.getInstance(),
    t.default = l.getInstance()
}
, , , , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), a = n(4), s = function() {
        function e() {
            i(this, e),
            this.colsToPitches = [],
            this.pitchesToCols = {},
            this.laneStateCacheOpened = {},
            this.laneStateCacheClosed = {},
            this.cachedColOffsets = {
                major: {},
                minor: {}
            },
            this.scaleNotesList = {
                major: [0, 2, 4, 5, 7, 9, 11],
                minor: [0, 2, 3, 5, 7, 8, 10]
            },
            this.scaleNotesHash = {
                major: {
                    0: !0,
                    2: !0,
                    4: !0,
                    5: !0,
                    7: !0,
                    9: !0,
                    11: !0
                },
                minor: {
                    0: !0,
                    2: !0,
                    3: !0,
                    5: !0,
                    7: !0,
                    8: !0,
                    10: !0
                }
            }
        }
        return r(e, null, [{
            key: "getInstance",
            value: function() {
                return o || (o = new e),
                window.ColPitchMap = o,
                o
            }
        }]),
        r(e, [{
            key: "getLaneStates",
            value: function(e, t) {
                var n = t ? this.laneStateCacheOpened : this.laneStateCacheClosed;
                if (n[e.sharps])
                    return n[e.sharps];
                n[e.sharps] = new Array(a.config.availablePitches);
                for (var i = 7 * e.sharps % 12, o = this.scaleNotesHash.major, r = 0, s = a.config.pitchOffset; s <= a.config.pitchOffset + a.config.availablePitches; s++) {
                    var l = void 0 !== o[(s - i) % 12]
                      , u = l || t ? 1 : 0;
                    n[e.sharps][s - a.config.pitchOffset] = {
                        inKey: l,
                        normalizedX: r,
                        normalizedW: u
                    },
                    r += u
                }
                return n[e.sharps]
            }
        }, {
            key: "getColumnCount",
            value: function() {
                return this.colsToPitches.length
            }
        }, {
            key: "getPitch",
            value: function(e, t, n, i) {
                return this.getColumn(e, t, n, i).col + a.config.pitchOffset
            }
        }, {
            key: "colToPitch",
            value: function(e) {
                return e + a.config.pitchOffset
            }
        }, {
            key: "colToX",
            value: function(e, t, n, i) {
                var o = this.getLaneStates(t, n);
                return (o[e].normalizedX + o[e].normalizedW / 2) * i
            }
        }, {
            key: "pitchToX",
            value: function(e, t, n, i) {
                return this.colToX(e - a.config.pitchOffset, t, n, i)
            }
        }, {
            key: "getColumn",
            value: function(e, t, n, i) {
                var o = this.getLaneStates(t, n)
                  , r = e / i
                  , s = Math.floor(r);
                if (n)
                    return s = Math.min(s, a.config.availablePitches),
                    {
                        col: s,
                        offset: r - o[s].normalizedX,
                        inKey: o[s].inKey
                    };
                var l = t.sharps
                  , u = t.minor ? "minor" : "major"
                  , c = this.scaleNotesList[u]
                  , h = (7 * l % 12 + 12 + (t.minor ? 9 : 0)) % 12
                  , d = 0
                  , p = this.cachedColOffsets[u][l];
                if (void 0 !== p)
                    d = p;
                else
                    for (var f = this.scaleNotesHash[u], m = 0; m < h; m++) {
                        var y = (m - h + 12) % 12;
                        f[y] && d++
                    }
                var g = Math.floor(s / 7)
                  , v = (s - d + 7) % 7
                  , b = c[v]
                  , E = 12 * g + (b + h) % 12;
                return E = Math.min(E, a.config.availablePitches),
                {
                    col: E,
                    offset: r - o[E].normalizedX,
                    inKey: o[E].inKey
                }
            }
        }, {
            key: "getBound",
            value: function(e, t) {
                var n = this.getLaneStates(e, t);
                return n[n.length - 1].normalizedX + n[n.length - 1].normalizedW
            }
        }]),
        e
    }();
    t.default = s.getInstance()
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ObjectPool = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = n(7);
    (function(e) {
        e && e.__esModule
    })(r),
    t.ObjectPool = function() {
        function e() {
            i(this, e),
            this._pool = [],
            this._count = 0
        }
        return o(e, [{
            key: "get",
            value: function() {
                return this._pool.length > 0 ? this._pool.pop() : (this._count++,
                null)
            }
        }, {
            key: "recycle",
            value: function(e) {
                this._pool.push(e)
            }
        }, {
            key: "recycleArray",
            value: function(e) {
                this._pool = this._pool.concat(e)
            }
        }]),
        e
    }()
}
, , , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PianoModal = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s);
    t.PianoModal = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                cancelTapped: !1,
                confirmTapped: !1,
                open: e.open
            },
            n
        }
        return r(t, e),
        a(t, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState({
                    open: e.open
                })
            }
        }, {
            key: "cancel",
            value: function(e) {
                this.state.cancelTapped || (this.setState({
                    cancelTapped: !0,
                    open: !1
                }),
                setTimeout(function() {
                    this.props.cancelCallback(e)
                }
                .bind(this), 500))
            }
        }, {
            key: "cancelEnd",
            value: function() {
                this.setState({
                    cancelTapped: !1
                })
            }
        }, {
            key: "confirm",
            value: function(e) {
                this.state.confirmTapped || (this.setState({
                    confirmTapped: !0,
                    open: !1
                }),
                setTimeout(function() {
                    this.props.confirmCallback(e)
                }
                .bind(this), 500))
            }
        }, {
            key: "confirmEnd",
            value: function() {
                this.setState({
                    confirmTapped: !1
                })
            }
        }, {
            key: "renderCancelBtn",
            value: function() {
                var e = this.getStyles();
                if (this.props.cancelCallback)
                    return l.default.createElement("div", {
                        className: "cancel-btn",
                        style: e.cancelBtn,
                        onTouchStart: this.cancel.bind(this),
                        onTouchEnd: this.cancelEnd.bind(this),
                        onMouseDown: this.cancel.bind(this),
                        onMouseUp: this.cancelEnd.bind(this)
                    }, this.props.cancelBtnText)
            }
        }, {
            key: "renderConfirmBtn",
            value: function() {
                var e = this.getStyles();
                if (this.props.confirmCallback)
                    return l.default.createElement("div", {
                        className: "confirm-btn",
                        style: e.confirmBtn,
                        onTouchStart: this.confirm.bind(this),
                        onTouchEnd: this.confirmEnd.bind(this),
                        onMouseDown: this.confirm.bind(this),
                        onMouseUp: this.confirmEnd.bind(this)
                    }, this.props.confirmBtnText)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getStyles();
                return l.default.createElement("div", {
                    className: "piano-modal-container",
                    style: e.modalContainer
                }, l.default.createElement("div", {
                    className: "piano-modal-backdrop",
                    style: e.backdrop
                }), l.default.createElement("div", {
                    className: "piano-modal",
                    style: e.pianoModal
                }, this.props.iconContainer, this.props.headerContainer, this.props.bodyContainer, l.default.createElement("div", {
                    className: "modal-buttons-container",
                    style: e.modalButtons
                }, this.renderCancelBtn(), this.renderConfirmBtn())))
            }
        }, {
            key: "getStyles",
            value: function() {
                var e = this.props.modalWidth || 336;
                return {
                    modalContainer: {
                        position: "absolute",
                        overflow: "hidden",
                        zIndex: 10,
                        width: "100vw",
                        height: "100vh",
                        transition: "top 500ms ease"
                    },
                    backdrop: {
                        position: "absolute",
                        zIndex: 1,
                        opacity: this.state.open ? .5 : 0,
                        transition: "opacity 500ms ease",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#000"
                    },
                    pianoModal: {
                        position: "absolute",
                        width: e,
                        padding: 24,
                        boxSizing: "border-box",
                        left: "50%",
                        top: this.state.open ? "50%" : "150%",
                        transition: "top 500ms ease",
                        transform: "translate(-50%, -60%)",
                        WebkitTransform: "translate(-50%, -60%)",
                        backgroundColor: "#fff",
                        borderRadius: 8,
                        zIndex: 2,
                        textAlign: "center"
                    },
                    modalButtons: {
                        height: 28
                    },
                    cancelBtn: {
                        display: "inline-block",
                        width: 115,
                        height: 28,
                        marginRight: 16,
                        borderRadius: 4,
                        fontSize: 14,
                        lineHeight: "30px",
                        fontWeight: "bold",
                        color: this.props.cancelBtnTextColor || "#444",
                        backgroundColor: this.state.cancelTapped ? this.props.cancelBtnTapColor || "#9B9B9B" : this.props.cancelBtnColor || "#ccc"
                    },
                    confirmBtn: {
                        display: "inline-block",
                        width: 115,
                        height: 28,
                        borderRadius: 4,
                        fontSize: 14,
                        lineHeight: "30px",
                        fontWeight: "bold",
                        color: this.props.confirmBtnTextColor || "#fff",
                        backgroundColor: this.state.confirmTapped ? this.props.confirmBtnTapColor || "#412864" : this.props.confirmBtnColor || "#563584"
                    }
                }
            }
        }]),
        t
    }(l.default.Component)
}
, , , , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), l = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, i)
        }
        if ("value"in o)
            return o.value;
        var a = o.get;
        if (void 0 !== a)
            return a.call(i)
    }, u = n(7), c = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(u), h = n(31), d = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        s(t, [{
            key: "get",
            value: function(e, n, i) {
                var o = l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "get", this).call(this);
                return o ? (o.scale.set(1),
                o.position.set(0),
                o.anchor.set(0),
                o.alpha = 1,
                o.text = e,
                o.style = n) : o = new c.default.Text(e,n,i),
                o
            }
        }], [{
            key: "getInstance",
            value: function() {
                return a || (a = new t),
                a
            }
        }]),
        t
    }(h.ObjectPool);
    window.textPool = d.getInstance(),
    t.default = d.getInstance()
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        return Math.round(e * t / 60 * d) / d
    }
    function o(e, t) {
        return Math.round(60 * e / t * p) / p
    }
    function r(e) {
        var t = e.midiJSON
          , n = t.keySigs.map(function(e) {
            return {
                sharps: e.sharps,
                minor: e.minor,
                globalTime: e.global_time
            }
        })
          , o = {
            numerator: t.timeSig.numerator % 3 == 0 ? 3 : 4,
            denominator: t.timeSig.denominator
        }
          , r = Math.round(t.tempo)
          , a = (t.duration,
        new h.Arrangement(n[0],o,r));
        a.arrKey = e.arrKey,
        a.mainResourceId = e.mainResourceId,
        a.extraDataResourceId = e.extraDataResourceId,
        a.artist = e.artist || "",
        a.tags = e.tags,
        a.extraData = e.extraData,
        a.primeCompType = e.primeCompType,
        a.primeSongId = e.primeSongId,
        a.primeArrKey = e.primeArrKey,
        a.songId = e.songId,
        a.lastSaved = e.lastSaved,
        a.helpModalShown = e.helpModalShown,
        e.cover && e.existingSongId ? (a.title = e.cover.title || "",
        a.subtitle = e.name || "",
        a.songId = e.existingSongId,
        a.existingSongId = e.existingSongId,
        a.cover = {
            title: e.cover.title || "",
            artist: e.cover.artist || "",
            songId: e.cover.songId
        }) : e.songId ? (a.title = e.compTitle,
        a.subtitle = e.name) : e.primeCover && !e.fromDraft ? (a.title = e.primeCover.title || "",
        a.subtitle = e.name || "",
        a.songId = e.primeCover.songId) : a.title = e.name || "",
        e.primeCover && (a.primeCover = {
            title: e.primeCover.title || "",
            artist: e.primeCover.artist || "",
            songId: e.primeCover.songId
        });
        for (var s = t.notes, l = 0, u = 0; l < s.length; ) {
            for (var c = s[l].global_time, d = i(c, r), p = Math.floor(d / o.numerator), y = d % o.numerator; n[u + 1] && n[u + 1].globalTime <= s[l].global_time; )
                u++;
            for (var g = [{
                pitch: m(s[l].pitch),
                velocity: s[l].velocity
            }]; l + 1 < s.length && Math.abs(c - s[l + 1].global_time) < f; )
                g.push({
                    pitch: m(s[l + 1].pitch),
                    velocity: s[l + 1].velocity
                }),
                l++;
            a.addNotesByLocalBeat(p, y, g, n[u]),
            l++
        }
        return a._indexMeasures(),
        a
    }
    function a(e) {
        for (var t = {
            arrJSON: {
                arrKey: e.arrKey,
                mainResourceId: e.mainResourceId,
                extraDataResourceId: e.extraDataResourceId,
                name: e.songId ? e.subtitle : e.title,
                artist: e.artist,
                compTitle: e.songId ? e.title : null,
                songId: e.songId,
                tags: e.tags,
                cover: e.cover,
                primeCover: e.primeCover,
                existingSongId: e.existingSongId,
                lastSaved: e.lastSaved,
                midiJSON: {
                    timeSig: e.timeSig,
                    keySigs: [],
                    tempo: e.bpm,
                    notes: []
                },
                extraData: e.extraData,
                primeCompType: e.primeCompType,
                primeSongId: e.primeSongId,
                primeArrKey: e.primeArrKey,
                helpModalShown: e.helpModalShown,
                fromDraft: e.fromDraft
            }
        }, n = [], i = e.measures.length - 1; i > 0 && Object.keys(e.measures[i].noteGroups).length < 1; )
            i--;
        for (var r = 0; r <= i; r++) {
            var a = e.measures[r]
              , s = e.measures[r - 1];
            if (0 === r || a.keySig && JSON.stringify(a.keySig) !== JSON.stringify(s.keySig)) {
                var l = o(e.getMeasureGlobalBeat(r), e.bpm);
                t.arrJSON.midiJSON.keySigs.push({
                    sharps: a.keySig.sharps,
                    minor: a.keySig.minor,
                    global_time: l
                })
            }
            n = Object.keys(a.noteGroups).sort(function(e, t) {
                return e - t
            }).map(function(e) {
                return {
                    localBeat: parseFloat(e),
                    notes: a.noteGroups[e].notes
                }
            }),
            n.forEach(function(n) {
                Object.keys(n.notes).sort(function(e, t) {
                    return e - t
                }).map(function(e) {
                    return {
                        pitch: parseFloat(e),
                        velocity: n.notes[e].velocity
                    }
                }).forEach(function(i) {
                    var s = r * a.beats + n.localBeat;
                    t.arrJSON.midiJSON.notes.push({
                        global_time: o(s, e.bpm),
                        pitch: i.pitch,
                        velocity: i.velocity
                    })
                })
            })
        }
        var u = e.measures[e.measures.length - 1]
          , c = t.arrJSON.midiJSON.notes[t.arrJSON.midiJSON.notes.length - 1]
          , h = n[n.length - 1] ? n[n.length - 1].localBeat : u.beats
          , d = o(u.beats - h, e.bpm);
        return t.arrJSON.midiJSON.duration = c ? c.global_time + d : 0,
        t
    }
    function s(e) {
        for (var t = [], n = 0; n < e.measures.length; n++)
            Object.keys(e.measures[n].noteGroups).forEach(function(i) {
                var r = e.measures[n].noteGroups[i].notes
                  , a = n * e.measures[n].beats + parseFloat(i);
                t.push({
                    onTime: o(a, e.bpm),
                    notes: Object.keys(r).map(function(e) {
                        return {
                            pitch: r[e].pitch,
                            velocity: r[e].velocity
                        }
                    })
                })
            });
        return t.sort(function(e, t) {
            return e.onTime - t.onTime
        }),
        t.forEach(function(e, n) {
            n + 1 < t.length ? e.offTime = t[n + 1].onTime - .005 : e.offTime = e.onTime + 1
        }),
        t
    }
    function l(e, t) {
        if ((void 0 === e ? "undefined" : u(e)) != (void 0 === t ? "undefined" : u(t)))
            return !1;
        switch (void 0 === e ? "undefined" : u(e)) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
            if (e != t)
                return !1;
            break;
        case "object":
            if (e instanceof Array && t instanceof Array) {
                if (e.length != t.length)
                    return !1;
                for (var n = 0; n < e.length; n++)
                    if (!l(e[n], t[n]))
                        return !1;
                return !0
            }
            if (Object.keys(e).length != Object.keys(t).length)
                return !1;
            for (var i in e)
                if (!l(e[i], t[i]))
                    return !1
        }
        return !0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    t.beatsToSeconds = o,
    t.JSON2Arrangement = r,
    t.Arrangement2JSON = a,
    t.Arrangement2List = s,
    t.compare = l;
    var c = n(4)
      , h = n(121)
      , d = 8
      , p = 1e5
      , f = 1e-6
      , m = function(e) {
        var t = e;
        if (t < c.config.pitchOffset)
            for (; t < c.config.pitchOffset; )
                t += 12;
        else if (t > c.config.pitchOffset + c.config.availablePitches)
            for (; t > c.config.pitchOffset + c.config.availablePitches; )
                t -= 12;
        return t
    }
}
, , , , , , , , , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PublishBlocker = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(l);
    t.PublishBlocker = function(e) {
        function t(e) {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return r(t, e),
        s(t, [{
            key: "render",
            value: function() {
                var e = this.getStyles()
                  , t = a({}, e.publishBlocker, this.props.extraContainerStyles);
                return u.default.createElement("div", {
                    className: "publish-blocker",
                    style: t
                }, u.default.createElement("div", {
                    className: "icon blocker-icon",
                    style: e.blockerIcon
                }))
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    publishBlocker: {
                        position: "absolute",
                        backgroundColor: "#F15756",
                        width: 24,
                        height: 48,
                        zIndex: 3,
                        opacity: this.props.enabled ? 1 : 0,
                        left: this.props.enabled ? 0 : -24,
                        transition: "opacity 500ms ease, left 500ms ease",
                        WebkitTransition: "opacity 500ms ease, left 500ms ease"
                    },
                    blockerIcon: {
                        position: "absolute",
                        top: 10,
                        left: -2,
                        width: 24,
                        height: 24
                    }
                }
            }
        }]),
        t
    }(u.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), l = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, i)
        }
        if ("value"in o)
            return o.value;
        var a = o.get;
        if (void 0 !== a)
            return a.call(i)
    }, u = n(7), c = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(u), h = n(31), d = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        s(t, [{
            key: "get",
            value: function() {
                var e = l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "get", this).call(this);
                return e ? (e.scale.set(1),
                e.position.set(0),
                e.alpha = 1,
                e.renderable = !0,
                e.visible = !0) : e = new c.default.Graphics,
                e
            }
        }, {
            key: "recycle",
            value: function(e) {
                l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "recycle", this).call(this, e),
                e.clear(),
                e.interactive && (e.off("mousedown"),
                e.off("touchstart"),
                e.off("mousemove"),
                e.off("touchmove"),
                e.off("mouseup"),
                e.off("touchend"))
            }
        }, {
            key: "recycleArray",
            value: function(e) {
                l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "recycleArray", this).call(this, e);
                for (var n = 0; n < e.length; n++)
                    e[n].clear(),
                    e[n].interactive && (e[n].off("mousedown"),
                    e[n].off("touchstart"),
                    e[n].off("mousemove"),
                    e[n].off("touchmove"),
                    e[n].off("mouseup"),
                    e[n].off("touchend"))
            }
        }], [{
            key: "getInstance",
            value: function() {
                return a || (a = new t),
                a
            }
        }]),
        t
    }(h.ObjectPool);
    window.graphicPool = d.getInstance(),
    t.default = d.getInstance()
}
, , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Note = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(7)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s);
    t.Note = function(e) {
        function t() {
            i(this, t);
            var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.anchor.set(.5),
            e
        }
        return r(t, e),
        a(t, [{
            key: "setSize",
            value: function(e) {
                this.width = e,
                this.height = e
            }
        }, {
            key: "setPosition",
            value: function(e, t) {
                this.position.set(e, t),
                this.oldPosition = new l.default.Point(e,t)
            }
        }, {
            key: "updateTexture",
            value: function(e, t, n) {
                this.noteCount = e;
                var i = ["icn_ff_", t ? "" : 4 == n ? "med_" : "sm_", Math.max(1, Math.min(4, e)), ".png"].join("");
                this.texture = refs.textureCache[i]
            }
        }, {
            key: "enableMinimapTexture",
            value: function() {
                if (!this.normalTex) {
                    var e = "icn_ff_med_" + Math.max(1, Math.min(4, this.noteCount)) + ".png";
                    this.normalTex = this.texture,
                    this.texture = refs.textureCache[e]
                }
            }
        }, {
            key: "disableMinimapTexture",
            value: function() {
                this.normalTex && (this.texture = this.normalTex,
                this.normalTex = null)
            }
        }, {
            key: "reset",
            value: function() {
                this.normalTex = null
            }
        }]),
        t
    }(l.default.Sprite)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.AutocompleteInput = void 0;
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = i(l)
      , c = n(11)
      , h = i(c)
      , d = n(116)
      , p = n(15)
      , f = n(0)
      , m = n(125)
      , y = i(m);
    t.AutocompleteInput = function(e) {
        function t(e) {
            o(this, t);
            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                open: !1,
                suggestions: [],
                value: n.props.value
            },
            n.inputRateLimit = new y.default,
            n
        }
        return a(t, e),
        s(t, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                e.value !== this.state.value && this.setState({
                    value: e.value
                })
            }
        }, {
            key: "updateSuggestions",
            value: function(e) {
                this.inputRateLimit.allow(this.refs.input.value) && (this.setState({
                    value: this.refs.input.value
                }),
                this.debouncedUpdate && clearTimeout(this.debouncedUpdate),
                this.debouncedUpdate = setTimeout(function() {
                    this.state.value.length > 0 ? this.props.autocompleteCallback(this.state.value).then(function(e) {
                        this.setState({
                            suggestions: e
                        })
                    }
                    .bind(this)) : this.setState({
                        suggestions: []
                    })
                }
                .bind(this), 250))
            }
        }, {
            key: "renderSuggestions",
            value: function() {
                return this.state.value.length > this.props.maxLength ? u.default.createElement(d.AutocompleteSuggestion, {
                    suggestion: "Please delete " + (this.state.value.length - this.props.maxLength) + " characters",
                    clickCallback: this.truncateValue.bind(this)
                }) : this.state.suggestions.filter(function(e) {
                    return e.length > 0
                }).map(function(e) {
                    return u.default.createElement(d.AutocompleteSuggestion, {
                        key: e,
                        suggestion: e,
                        clickCallback: this.pickSuggestion.bind(this, e)
                    })
                }
                .bind(this))
            }
        }, {
            key: "truncateValue",
            value: function(e) {
                e.preventDefault();
                var t = this.state.value.slice(0, this.props.maxLength);
                this.setState({
                    value: t
                }),
                this.save(t)
            }
        }, {
            key: "pickSuggestion",
            value: function(e, t) {
                t.preventDefault(),
                this.setState({
                    value: e
                }),
                this.save(e)
            }
        }, {
            key: "handleBackdropTap",
            value: function(e) {
                this.save(this.state.value)
            }
        }, {
            key: "handleBlur",
            value: function(e) {
                if ((0,
                f.Dispatch)(f.ACTION.PIANO_MENU.SHOW),
                this.blurDisabled)
                    return void e.preventDefault();
                this.save(this.state.value)
            }
        }, {
            key: "disableBlur",
            value: function(e) {
                this.blurDisabled = !0
            }
        }, {
            key: "enableBlur",
            value: function(e) {
                this.blurDisabled = !1
            }
        }, {
            key: "save",
            value: function(e) {
                this.props.saveCallback(e),
                this.close()
            }
        }, {
            key: "onKeyUp",
            value: function(e) {
                13 != e.keyCode && 13 != e.which || e.target.blur()
            }
        }, {
            key: "clearStart",
            value: function(e) {
                e.preventDefault(),
                this.blurDisabled = !0
            }
        }, {
            key: "clearEnd",
            value: function(e) {
                e.preventDefault(),
                this.blurDisabled = !1,
                this.props.saveCallback(""),
                this.setState({
                    open: !0,
                    suggestions: []
                }),
                this.refs.input.focus()
            }
        }, {
            key: "open",
            value: function() {
                (0,
                f.Dispatch)(f.ACTION.PIANO_MENU.HIDE),
                this.setState({
                    open: !0
                }),
                this.updateSuggestions(this.state.value),
                this.androidFocus()
            }
        }, {
            key: "androidFocus",
            value: function() {
                if (p.ClientInterface.android) {
                    var e = (0,
                    h.default)(".edit-settings-body")
                      , t = (0,
                    h.default)(this.refs.input).offset().top
                      , n = e.scrollTop()
                      , i = n + t - (0,
                    h.default)(".settings-header").height();
                    e.scrollTop(i)
                }
            }
        }, {
            key: "close",
            value: function() {
                this.setState({
                    open: !1
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getStyles();
                return u.default.createElement("div", {
                    ref: "container",
                    className: "autocomplete-input-container",
                    style: e.autocompleteInputContainer
                }, u.default.createElement("div", {
                    className: "autocomplete-input-backdrop",
                    style: e.autocompleteBackdrop,
                    onClick: this.handleBackdropTap.bind(this)
                }), u.default.createElement("input", {
                    onFocus: this.open.bind(this),
                    onChange: this.updateSuggestions.bind(this),
                    onBlur: this.handleBlur.bind(this),
                    maxLength: this.props.maxLength,
                    disabled: this.props.disabled,
                    onKeyUp: this.onKeyUp.bind(this),
                    value: this.state.value,
                    ref: "input",
                    autoCorrect: "off",
                    placeholder: this.props.placeholder,
                    style: e.autocompleteInput
                }), u.default.createElement("div", {
                    className: "icon close-input-btn",
                    style: e.closeInputBtn,
                    onTouchStart: this.clearStart.bind(this),
                    onMouseDown: this.clearStart.bind(this),
                    onTouchEnd: this.clearEnd.bind(this),
                    onMouseUp: this.clearEnd.bind(this)
                }), u.default.createElement("div", {
                    className: "suggestions-container",
                    style: e.suggestionsContainer,
                    onTouchStart: this.disableBlur.bind(this),
                    onMouseDown: this.disableBlur.bind(this),
                    onTouchEnd: this.enableBlur.bind(this),
                    onMouseUp: this.enableBlur.bind(this)
                }, this.renderSuggestions()))
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    autocompleteInputContainer: {
                        position: "relative",
                        width: "100%",
                        height: 47,
                        borderBottom: "1px solid #514D72"
                    },
                    autocompleteBackdrop: {
                        display: this.state.open ? "block" : "none",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: -2
                    },
                    autocompleteInput: {
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        height: 48,
                        lineHeight: "26px",
                        backgroundColor: "rgba(255, 255, 255, " + (this.state.open ? "0.24" : "0.08") + ")",
                        border: "none",
                        borderRadius: 0,
                        outline: "none",
                        color: "#FFF",
                        fontFamily: '"ProximaNova","Helvetica Neue","Helvetica","Arial",sans-serif',
                        fontSize: 16,
                        paddingLeft: 32,
                        paddingRight: this.state.open ? 60 : 0,
                        opacity: this.props.disabled ? .5 : 1
                    },
                    closeInputBtn: {
                        display: this.state.open ? "block" : "none",
                        position: "absolute",
                        zIndex: 2,
                        top: 8,
                        right: 28,
                        width: 32,
                        height: 32
                    },
                    suggestionsContainer: {
                        position: "relative",
                        zIndex: 2,
                        display: this.state.open ? "block" : "none",
                        background: "linear-gradient(45deg, rgba(61, 66, 119, 0.76), rgba(98, 47, 115, 0.76)), linear-gradient(black, black)",
                        width: "100%"
                    }
                }
            }
        }]),
        t
    }(u.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = n(15)
      , a = /^_.+$/
      , s = /^c_\d+$/
      , l = /^\d+_\d+$/
      , u = function() {
        function e() {
            i(this, e)
        }
        return o(e, null, [{
            key: "logInvalidData",
            value: function(e) {
                console.warn("Invalid Event Data: " + JSON.stringify(e))
            }
        }, {
            key: "composeSettingsPageview",
            value: function(t, n, i, o) {
                var u = a.test(t) || s.test(t) || !t
                  , c = l.test(n) || !n
                  , h = a.test(i) || s.test(i) || !i
                  , d = l.test(o) || !o
                  , p = t || n && "-" || null
                  , f = n || null
                  , m = i || "-"
                  , y = o || "-"
                  , g = i || o ? m + "," + y : null
                  , v = {
                    eventName: "compose_settings_pgview",
                    k1: p,
                    k5: f,
                    k6: g
                };
                if (!(u && c && h && d))
                    return void e.logInvalidData(v);
                r.ClientInterface.composerEvent(v)
            }
        }, {
            key: "arrMatchClick",
            value: function(t, n) {
                var i = "boolean" == typeof t
                  , o = a.test(n) || s.test(n)
                  , l = {
                    eventName: "arr_match_clk",
                    target: t,
                    context: "MINIPIANO",
                    k1: n
                };
                if (!i || !o)
                    return void e.logInvalidData(l);
                r.ClientInterface.composerEvent(l)
            }
        }, {
            key: "arrMatch",
            value: function(t, n, i, o, l) {
                var u = "boolean" == typeof t || null === t
                  , c = "boolean" == typeof n || null === n
                  , h = a.test(i) || s.test(i) || !i
                  , d = {
                    eventName: "arr_match",
                    target: t,
                    context: "MINIPIANO",
                    value: n,
                    k1: i,
                    k2: o,
                    k3: l
                };
                if (!u || !c || !h)
                    return void e.logInvalidData(d);
                r.ClientInterface.composerEvent(d)
            }
        }, {
            key: "arrCloneMatch",
            value: function(t, n) {
                var i = a.test(t) || s.test(t) || !t
                  , o = l.test(n) || !n
                  , u = t || "-"
                  , c = n || "-"
                  , h = {
                    eventName: "arr_duplicate",
                    context: "MINIPIANO",
                    k5: n,
                    k6: u + "," + c
                };
                if (!i && !o)
                    return void e.logInvalidData(h);
                r.ClientInterface.composerEvent(h)
            }
        }, {
            key: "arrBlacklistMatch",
            value: function(t, n, i, o, r) {
                e.arrMatch(t, n, i, o, r)
            }
        }, {
            key: "arrCatalogMatch",
            value: function(t, n, i, o, r) {
                e.arrMatch(t, n, i, o, r)
            }
        }, {
            key: "arrNoMatch",
            value: function(t, n, i, o, r) {
                e.arrMatch(t, n, i, o, r)
            }
        }, {
            key: "composeEditPageview",
            value: function(t, n, i, o, u, c) {
                var h = "number" == typeof t && t % 1 == 0
                  , d = -1 !== [3, 4].indexOf(n)
                  , p = a.test(i) || s.test(i) || !i
                  , f = l.test(o) || !o
                  , m = a.test(u) || s.test(u) || !u
                  , y = l.test(c) || !c
                  , g = i || o && "-" || null
                  , v = o || null
                  , b = u || "-"
                  , E = c || "-"
                  , T = u || c ? b + "," + E : null
                  , S = {
                    eventName: "compose_edit_pgview",
                    k1: g,
                    k2: t,
                    k3: n,
                    k5: v,
                    k6: T
                };
                if (!(h && d && p && f && m && y))
                    return void e.logInvalidData(S);
                r.ClientInterface.composerEvent(S)
            }
        }, {
            key: "composeEdit",
            value: function(t, n, i, o) {
                var u = -1 !== [0, 4, 8, 16, 32].indexOf(t)
                  , c = -1 !== ["insert", "delete", "copy", "move"].indexOf(n)
                  , h = a.test(i) || s.test(i) || !i
                  , d = l.test(o) || !o
                  , p = 0 === t ? "bar" : t
                  , f = i || o && "-" || null
                  , m = o || null
                  , y = {
                    eventName: "compose_edit",
                    target: p,
                    context: n,
                    k1: f,
                    k5: m
                };
                if (!(u && c && h && d))
                    return void e.logInvalidData(y);
                r.ClientInterface.composerEvent(y)
            }
        }]),
        e
    }();
    t.default = u
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n, i, o) {
        var r, a;
        if (void 0 === i)
            i = 0;
        else if ((i |= 0) < 0 || i >= e.length)
            throw new RangeError("invalid lower bound");
        if (void 0 === o)
            o = e.length - 1;
        else if ((o |= 0) < i || o >= e.length)
            throw new RangeError("invalid upper bound");
        for (; o - i > 1; )
            r = i + (o - i >> 1),
            a = +n(e[r], t),
            a < 0 ? i = r : o = r;
        return [i, o]
    }
    function o(e, t, n, i, o) {
        var r, a;
        if (void 0 === i)
            i = 0;
        else if ((i |= 0) < 0 || i >= e.length)
            throw new RangeError("invalid lower bound");
        if (void 0 === o)
            o = e.length - 1;
        else if ((o |= 0) < i || o >= e.length)
            throw new RangeError("invalid upper bound");
        for (; i <= o; )
            if (r = i + (o - i >> 1),
            (a = +n(e[r], t)) < 0)
                i = r + 1;
            else {
                if (!(a > 0))
                    return r;
                o = r - 1
            }
        return ~i
    }
    function r(e, t, n) {
        for (var i, o, r = 0, a = e.length; r != a; )
            i = r + (a - r >> 1),
            o = +n(e[i], t),
            o < 0 ? r = i + 1 : a = i;
        return a
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.bRangeSearch = i,
    t.bSearch = o,
    t.findFirstGreaterThanOrEqualTo = r
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = ArrangementConfigs
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , o = {
        enable: function() {
            this.timerDiv = document.createElement("div"),
            this.timerDiv.id = "load-timer",
            this.timerDiv.classList.add("noselect"),
            i(this.timerDiv.style, {
                position: "absolute",
                top: "15px",
                left: "40px",
                padding: "4px",
                color: "#fff",
                backgroundColor: "#000",
                border: "1px solid #fff",
                zIndex: 10
            }),
            document.body.appendChild(this.timerDiv)
        },
        start: function() {
            this.startTime = performance.now()
        },
        stop: function() {
            this.endTime = performance.now(),
            this.loadDuration = this.endTime - this.startTime,
            this.timerDiv && (this.timerDiv.innerHTML = Math.round(1e3 * this.loadDuration) / 1e3 + " ms")
        }
    };
    o.start(),
    t.default = o
}
, , , , , function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.BaseCamera = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = n(4)
      , a = (n(0),
    n(70));
    t.BaseCamera = function() {
        function e(t, n, o, a, s, l) {
            i(this, e),
            this.id = t,
            this.worlds = n,
            this.viewport = r.refs.viewport,
            this.h = a.h,
            this.w = a.w,
            this.yZero = s.yZero,
            this.xZero = s.xZero;
            for (var u = 0; u < this.worlds.length; u++)
                this.worlds[u].position.set(this.xZero, this.yZero);
            this.x = 0,
            this.y = 0,
            this.zoomScale = 1,
            this.viewConfig = l,
            this.parentView = o,
            this.camOriginbounds = {
                right: 2e3
            }
        }
        return o(e, [{
            key: "initListeners",
            value: function() {}
        }, {
            key: "removeListeners",
            value: function() {}
        }, {
            key: "updateCtx",
            value: function() {}
        }, {
            key: "zoom",
            value: function() {}
        }, {
            key: "pxPerBeat",
            value: function() {
                return this.zoomScale * this.viewConfig.gridHeight
            }
        }, {
            key: "pxPerS",
            value: function(e) {
                return this.zoomScale * this.viewConfig.gridHeight * e / 60
            }
        }, {
            key: "panToTime",
            value: function(e, t, n) {
                this.panToY(this.pxPerS(t) * e, n)
            }
        }, {
            key: "getBeatHeight",
            value: function() {
                return this.viewConfig.gridHeight * this.zoomScale
            }
        }, {
            key: "getCurrentBeat",
            value: function() {
                return this.y / (this.viewConfig.gridHeight * this.zoomScale)
            }
        }, {
            key: "getCurrentTime",
            value: function(e) {
                return this.getCurrentBeat() / (e / 60)
            }
        }, {
            key: "pan",
            value: function(e, t) {
                if (this.viewConfig.panX)
                    if (this.prevX = this.x,
                    this.x - e >= 0 && this.x - e <= this.camOriginbounds.right) {
                        for (var n = 0; n < this.worlds.length; n++)
                            this.worlds[n].position.x += e;
                        this.x -= e
                    } else if (this.x - e < 0) {
                        for (var n = 0; n < this.worlds.length; n++)
                            this.worlds[n].position.x = this.xZero;
                        this.x = 0
                    } else if (this.x - e > this.camOriginbounds.right) {
                        for (var n = 0; n < this.worlds.length; n++)
                            this.worlds[n].position.x = -this.camOriginbounds.right + this.xZero;
                        this.x = this.camOriginbounds.right
                    }
                if (this.viewConfig.panY)
                    if (this.prevY = this.y,
                    this.y + t >= 0) {
                        for (var n = 0; n < this.worlds.length; n++)
                            this.worlds[n].position.y += t;
                        this.y += t
                    } else {
                        for (var n = 0; n < this.worlds.length; n++)
                            this.worlds[n].position.y = this.yZero;
                        this.y = 0
                    }
            }
        }, {
            key: "topMeasureOnScreen",
            value: function(e) {
                return (0,
                a.findFirstGreaterThanOrEqualTo)(e, 0, function(e, t) {
                    return -(e.position.y + this.worlds[0].position.y + e.height)
                }
                .bind(this))
            }
        }, {
            key: "panToX",
            value: function(e) {
                this.prevX = this.x,
                this.prevY = this.y,
                this.x = Math.max(Math.min(e, this.camOriginbounds.right), 0);
                for (var t = 0; t < this.worlds.length; t++)
                    this.worlds[t].position.x = -this.x + this.xZero
            }
        }, {
            key: "panToY",
            value: function(e) {
                this.prevX = this.x,
                this.prevY = this.y,
                this.y = Math.max(e, 0);
                for (var t = 0; t < this.worlds.length; t++)
                    this.worlds[t].position.y = this.y + this.yZero
            }
        }, {
            key: "isInView",
            value: function(e) {
                var t = e.position.y + this.worlds[0].position.y;
                return t + e.height >= 0 && t <= this.h
            }
        }, {
            key: "isAbove",
            value: function(e) {
                return e.position.y + this.worlds[0].position.y + e.height >= 0
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            checkCatalog: function(t, n) {
                return e.get("/s/upload/catalog/match", {
                    title: t,
                    artist: n,
                    appFamily: "MINIPIANO"
                })
            },
            validateSong: function(t, n, i) {
                return e.ajax({
                    url: "/s/validate_song",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify({
                        title: t,
                        artist: n,
                        tags: i.map(function(e) {
                            return {
                                id: e,
                                text: e
                            }
                        }),
                        appFamily: "MINIPIANO"
                    })
                })
            }
        }
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Hud = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            if (void 0 !== a)
                return a.call(i)
        }
          , u = n(7)
          , c = i(u)
          , h = n(4)
          , d = n(25)
          , p = i(d);
        t.Hud = function(t) {
            function n(e, t, i) {
                o(this, n);
                var a = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                a.w = e,
                a.h = t;
                return a.currentLine = p.default.get(h.SPRITE_TYPE.CURRENT_LINE),
                a.currentLine.texture = h.refs.textureCache["hitline.png"],
                a.currentLine.anchor.set(0, .5),
                a.currentLine.position.set(h.config.sidebarWidth, i.hitLineY),
                a.currentLine.width = a.w,
                a.currentLine.height = 48,
                a.bottomGradient = p.default.get(h.SPRITE_TYPE.BOTTOM_GRADIENT),
                a.bottomGradient.texture = h.refs.textureCache["gradient_bottom.png"],
                a.bottomGradient.position.set(0, window.innerHeight - 72),
                a.bottomGradient.width = a.w,
                a.bottomGradient.height = 72,
                a.addChild(a.bottomGradient),
                a.addChild(a.currentLine),
                a
            }
            return a(n, t),
            s(n, [{
                key: "destroy",
                value: function() {
                    this.removeChild(this.currentLine),
                    this.removeChild(this.bottomGradient),
                    p.default.recycle(this.currentLine, h.SPRITE_TYPE.CURRENT_LINE),
                    p.default.recycle(this.bottomGradient, h.SPRITE_TYPE.BOTTOM_GRADIENT),
                    l(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "_handleRowFade",
                value: function(t, n) {
                    var i = {
                        currentLineOpacity: t.fadeOut ? 1 : 0,
                        keySigOpacity: t.fadeOut ? 1 : .24
                    }
                      , o = {
                        currentLineOpacity: t.fadeOut ? 0 : 1,
                        keySigOpacity: t.fadeOut ? .24 : 1
                    };
                    this.tweenFade = new e.Tween(i).to(o, 500).onUpdate(function() {
                        this.currentLine.alpha = i.currentLineOpacity,
                        this.keySigIndicator.keySigContainer.alpha = i.keySigOpacity
                    }
                    .bind(this)).onStop(function() {
                        this.tweenFade = null,
                        this.currentLine.alpha = o.currentLineOpacity,
                        this.keySigIndicator.keySigContainer.alpha = o.keySigOpacity
                    }
                    .bind(this)).onComplete(function() {
                        this.tweenFade = null,
                        this.currentLine.alpha = o.currentLineOpacity,
                        this.keySigIndicator.keySigContainer.alpha = o.keySigOpacity
                    }
                    .bind(this)).easing(e.Easing.Cubic.Out).start()
                }
            }, {
                key: "hideHitLine",
                value: function() {
                    this.currentLine && (this.currentLine.visible = !1)
                }
            }, {
                key: "showHitLine",
                value: function() {
                    this.currentLine && (this.currentLine.visible = !0)
                }
            }, {
                key: "initListeners",
                value: function() {}
            }, {
                key: "removeListeners",
                value: function() {}
            }]),
            n
        }(c.default.Container)
    }
    ).call(t, n(16))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ToastMsg = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            if (void 0 !== a)
                return a.call(i)
        }
          , u = n(7)
          , c = i(u)
          , h = n(4)
          , d = (n(0),
        n(40))
          , p = i(d)
          , f = n(25)
          , m = i(f);
        t.ToastMsg = function(t) {
            function n(e) {
                o(this, n);
                var t = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return t.bg = m.default.get(h.SPRITE_TYPE.TOAST_MSG),
                t.bg.texture = h.refs.textureCache["msg_bg.png"],
                t.bg.anchor.set(.5),
                t.bg.width = 212,
                t.bg.height = 46,
                t.addChild(t.bg),
                t.position.set(.5 * window.innerWidth + .5 * h.config.sidebarWidth, .5 * window.innerHeight),
                t.hideBar(),
                t.sustainTime = 500,
                t.fadeTime = 500,
                t.sustainAnimation = null,
                t.fadeAnimation = null,
                t
            }
            return a(n, t),
            s(n, [{
                key: "initListeners",
                value: function() {}
            }, {
                key: "removeListeners",
                value: function() {}
            }, {
                key: "destroy",
                value: function() {
                    this.parent.removeChild(this),
                    this.bg.destroy(),
                    this.text && this.text.destroy(!0),
                    l(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "updateMsg",
                value: function(t) {
                    if (t && t.msg && 0 != t.msg.trim().length) {
                        this.sustainAnimation && (this.sustainAnimation.stop(),
                        this.sustainAnimation = null),
                        this.fadeAnimation && (this.fadeAnimation.stop(),
                        this.fadeAnimation = null),
                        this.changeText(t.msg),
                        this.showBar(),
                        this.sustainAnimation = new e.Tween({
                            t: 1
                        }).to({
                            t: 0
                        }, this.sustainTime);
                        var n = {
                            t: 1
                        };
                        this.fadeAnimation = new e.Tween(n).to({
                            t: 0
                        }, this.fadeTime).onUpdate(function() {
                            this.alpha = n.t
                        }
                        .bind(this)).onComplete(function() {
                            this.sustainAnimation = null,
                            this.fadeAnimation = null,
                            this.hideBar()
                        }
                        .bind(this)),
                        this.sustainAnimation.chain(this.fadeAnimation),
                        this.sustainAnimation.start()
                    }
                }
            }, {
                key: "changeText",
                value: function(e) {
                    if (this.text)
                        return void (this.text.text = e);
                    this.text = p.default.get(e, {
                        font: "22px ProximaNova",
                        fill: "#FFFFFF",
                        align: "center"
                    }, 2),
                    this.text.anchor.set(.5),
                    this.addChild(this.text)
                }
            }, {
                key: "showBar",
                value: function() {
                    this.visible = !0,
                    this.alpha = 1
                }
            }, {
                key: "hideBar",
                value: function() {
                    this.visible = !1,
                    this.alpha = 0
                }
            }]),
            n
        }(c.default.Container)
    }
    ).call(t, n(16))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.StartOverModal = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(0)
      , c = n(35);
    t.StartOverModal = function(e) {
        function t(e) {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "discardArrangement",
            value: function() {
                (0,
                u.Dispatch)(u.ACTION.MODALS.CONFIRM_START_OVER, {
                    newArrangementJSON: this.props.data.newArrangementJSON && this.props.data.newArrangementJSON.asMutable({
                        deep: !0
                    }),
                    resetDraft: this.props.data.resetDraft
                })
            }
        }, {
            key: "keepArrangement",
            value: function() {
                (0,
                u.Dispatch)(u.ACTION.MODALS.DECLINE_START_OVER, this.props.data.fromApp)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getStyles()
                  , t = l.default.createElement("div", {
                    className: "icon start-over-icon",
                    style: e.startOverIcon
                })
                  , n = l.default.createElement("div", {
                    className: "start-over-header",
                    style: e.startOverHeader
                }, "Discard Draft?")
                  , i = l.default.createElement("div", {
                    className: "start-over-body",
                    style: e.startOverBody
                }, "Discarding will start a new song.");
                return l.default.createElement("div", {
                    className: "start-over-container",
                    style: e.startOverContainer
                }, l.default.createElement(c.PianoModal, {
                    open: this.props.data.visible,
                    iconContainer: t,
                    headerContainer: n,
                    bodyContainer: i,
                    cancelBtnText: "Discard Draft",
                    cancelBtnColor: "#563584",
                    cancelBtnTapColor: "#412864",
                    cancelBtnTextColor: "#fff",
                    cancelCallback: this.discardArrangement.bind(this),
                    confirmBtnText: "Cancel",
                    confirmBtnColor: "#ccc",
                    confirmBtnTapColor: "#9B9B9B",
                    confirmBtnTextColor: "#444",
                    confirmCallback: this.keepArrangement.bind(this)
                }))
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    startOverContainer: {
                        visibility: this.props.data.visible ? "visible" : "hidden",
                        pointerEvents: this.props.data.visible ? "initial" : "none"
                    },
                    startOverIcon: {
                        display: "inline-block",
                        width: 25,
                        height: 25,
                        marginBottom: 15
                    },
                    startOverHeader: {
                        width: "100%",
                        height: 19,
                        textAlign: "center",
                        color: "#444",
                        fontSize: 16,
                        fontWeight: "bold",
                        marginBottom: 14
                    },
                    startOverBody: {
                        width: "100%",
                        textAlign: "center",
                        color: "#585858",
                        fontSize: 14,
                        fontWeight: "normal",
                        marginBottom: 24
                    },
                    pianoModal: {
                        position: "absolute",
                        zIndex: 10
                    }
                }
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.AutocompleteSuggestion = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s);
    t.AutocompleteSuggestion = function(e) {
        function t(e) {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return r(t, e),
        a(t, [{
            key: "render",
            value: function() {
                var e = this.getStyles();
                return l.default.createElement("div", {
                    className: "suggestion-row",
                    style: e.suggestionRow,
                    onClick: this.props.clickCallback
                }, this.props.suggestion)
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    suggestionRow: {
                        height: 48,
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: "48px",
                        paddingLeft: 32
                    }
                }
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.HelpModal = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(l)
      , c = n(0)
      , h = n(238)
      , d = (t.HelpModal = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                disable: !1
            },
            n.disablePerm = n.disablePerm.bind(n),
            n
        }
        return r(t, e),
        s(t, [{
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return this.props.data !== e.data || t.disable != this.state.disable
            }
        }, {
            key: "hideHelp",
            value: function() {
                setTimeout(function() {
                    (0,
                    c.Dispatch)(c.ACTION.MODALS.TOGGLE_HELP_MODAL, {
                        visible: !1
                    })
                }
                .bind(this), 500)
            }
        }, {
            key: "getPages",
            value: function() {
                var e = this.getPageStyles();
                return [u.default.createElement("div", {
                    className: "page-one-container",
                    style: e.pageContainer
                }, u.default.createElement("div", {
                    className: "image-container",
                    style: e.imageContainer
                }, u.default.createElement("div", {
                    className: "page-one-image",
                    style: e.pageOneImage
                })), u.default.createElement("div", {
                    className: "page-one-text-container"
                }, u.default.createElement("div", {
                    className: "page-one-header",
                    style: e.textHeader
                }, "TAP"), u.default.createElement("div", {
                    className: "page-one-body",
                    style: e.textBody
                }, "to add or remove notes"))), u.default.createElement("div", {
                    className: "page-two-container",
                    style: e.pageContainer
                }, u.default.createElement("div", {
                    className: "image-container",
                    style: e.imageContainer
                }, u.default.createElement("div", {
                    className: "page-two-image",
                    style: e.pageTwoImage
                })), u.default.createElement("div", {
                    className: "page-two-text-container"
                }, u.default.createElement("div", {
                    className: "page-two-header",
                    style: e.textHeader
                }, "PINCH HORIZONTALLY"), u.default.createElement("div", {
                    className: "page-two-body",
                    style: e.textBody
                }, "to show out-of-key notes"))), u.default.createElement("div", {
                    className: "page-three-container",
                    style: e.pageContainer
                }, u.default.createElement("div", {
                    className: "image-container",
                    style: e.imageContainer
                }, u.default.createElement("div", {
                    className: "page-three-image",
                    style: e.pageThreeImage
                })), u.default.createElement("div", {
                    className: "page-three-text-container"
                }, u.default.createElement("div", {
                    className: "page-three-header",
                    style: e.textHeader
                }, "PINCH VERTICALLY"), u.default.createElement("div", {
                    className: "page-three-body",
                    style: e.textBody
                }, "to zoom in and out of time"))), u.default.createElement("div", {
                    className: "page-four-container",
                    style: e.pageContainer
                }, u.default.createElement("div", {
                    className: "image-container",
                    style: e.imageContainer
                }, u.default.createElement("div", {
                    className: "page-four-image",
                    style: e.pageFourImage
                })), u.default.createElement("div", {
                    className: "page-four-text-container"
                }, u.default.createElement("div", {
                    className: "page-four-header",
                    style: e.textHeader
                }, "LONG 2-FINGER TAP"), u.default.createElement("div", {
                    className: "page-four-body",
                    style: e.textBody
                }, "to quickly zoom out"))), u.default.createElement("div", {
                    className: "page-five-container",
                    style: e.pageContainer
                }, u.default.createElement("div", {
                    className: "image-container",
                    style: e.imageContainer
                }, u.default.createElement("div", {
                    className: "page-five-image",
                    style: e.pageFiveImage
                })), u.default.createElement("div", {
                    className: "page-five-text-container"
                }, u.default.createElement("div", {
                    className: "page-five-header",
                    style: e.textHeader
                }, "LONG TAP"), u.default.createElement("div", {
                    className: "page-five-body",
                    style: e.textBody
                }, "to insert or delete a row")))]
            }
        }, {
            key: "disablePerm",
            value: function(e) {
                e.stopPropagation(),
                (0,
                c.Dispatch)(c.ACTION.MODALS.NEVER_SHOW_HELP_AGAIN, !this.state.disable),
                this.setState({
                    disable: !this.state.disable
                })
            }
        }, {
            key: "disable",
            value: function() {
                (0,
                c.Dispatch)(c.ACTION.MODALS.NEVER_SHOW_HELP_AGAIN, this.state.disable)
            }
        }, {
            key: "renderCheckBox",
            value: function() {
                return this.props.data.hideCheckbox ? null : u.default.createElement("div", {
                    style: d.checkBoxWrapper
                }, u.default.createElement("label", {
                    onTouchStart: this.disablePerm,
                    style: d.checkBoxLabel
                }, u.default.createElement("input", {
                    type: "checkbox",
                    style: {
                        display: "none"
                    }
                }), u.default.createElement("div", {
                    className: "icon help-modal-check-icon " + (this.state.disable ? "on" : "off"),
                    style: d.checkBoxIcon
                }), u.default.createElement("div", {
                    style: d.checkBoxText
                }, "Do not show again")))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getPages()
                  , t = this.props.data.visible;
                return u.default.createElement(h.MultiPageModal, {
                    pages: e,
                    closeCallback: this.hideHelp.bind(this),
                    open: t,
                    noCycle: !0,
                    bottom: this.renderCheckBox()
                })
            }
        }, {
            key: "getPageStyles",
            value: function() {
                var e = {
                    pageContainer: {
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        height: "100%",
                        textAlign: "center"
                    },
                    imageContainer: {
                        display: "inline-block",
                        width: "100%",
                        height: "60%",
                        background: "linear-gradient(rgb(90, 103, 172), rgb(179, 161, 204))"
                    },
                    helpImage: {
                        width: "80%",
                        height: "100%",
                        maxWidth: 424,
                        margin: "0 auto",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    },
                    textHeader: {
                        fontSize: window.innerHeight < 350 ? 14 : 18,
                        fontWeight: "bold",
                        color: "#444",
                        marginTop: 10
                    },
                    textBody: {
                        fontSize: window.innerHeight < 350 ? 14 : 18,
                        fontWeight: "lighter",
                        color: "#585858",
                        marginTop: 6
                    }
                };
                return e.pageOneImage = a({
                    backgroundImage: 'url("./res/sidebar/help_modal/img_faq_tap@2x-de592f08305fff7209f869e2d3a68b60.png")'
                }, e.helpImage),
                e.pageTwoImage = a({
                    backgroundImage: 'url("./res/sidebar/help_modal/img_faq_pinch_h@2x-c29bd85df6907d04f7fb51bfcacfa5e5.png")'
                }, e.helpImage),
                e.pageThreeImage = a({
                    backgroundImage: 'url("./res/sidebar/help_modal/img_faq_pinch_v@2x-01915f3e010552aa628d0c4b43c4ddcf.png")'
                }, e.helpImage),
                e.pageFourImage = a({
                    backgroundImage: 'url("./res/sidebar/help_modal/img_faq_twofinger@2x-1d24800f5c07c6aed350ef0016553307.png")'
                }, e.helpImage),
                e.pageFiveImage = a({
                    backgroundImage: 'url("./res/sidebar/help_modal/img_faq_longtap@2x-ce043803a92b498cddce31036b6a5679.png")'
                }, e.helpImage),
                e
            }
        }]),
        t
    }(u.default.Component),
    {
        checkBoxWrapper: {
            height: 44,
            top: 48,
            position: "relative"
        },
        checkBoxIcon: {
            display: "inline-block",
            height: 44,
            width: 44,
            marginTop: -3
        },
        checkBoxLabel: {
            float: "left"
        },
        checkBoxText: {
            marginLeft: 8,
            color: "#ffffff",
            fontSize: "14px",
            lineHeight: "44px",
            display: "inline-block",
            verticalAlign: "top"
        }
    })
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function r(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Keyboard = void 0;
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , s = n(1)
          , l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s)
          , u = n(0)
          , c = n(4);
        t.Keyboard = function(t) {
            function n(e) {
                i(this, n);
                var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                return t.mouseDown = !1,
                t
            }
            return r(n, t),
            a(n, [{
                key: "shouldComponentUpdate",
                value: function(e) {
                    return this.props.data != e.data
                }
            }, {
                key: "handleTouchStart",
                value: function(t) {
                    t.preventDefault();
                    for (var n = [], i = 0; i < t.touches.length; i++)
                        n.push(new e.Point(t.touches[i].clientX,t.touches[i].clientY));
                    (0,
                    u.Signal)(u.EVT.KEYBOARD.PRESSED, n, this),
                    t.stopPropagation()
                }
            }, {
                key: "handleTouchMove",
                value: function(t) {
                    for (var n = [], i = 0; i < t.touches.length; i++)
                        n.push(new e.Point(t.touches[i].clientX,t.touches[i].clientY));
                    (0,
                    u.Signal)(u.EVT.KEYBOARD.MOVED, n, this),
                    t.stopPropagation()
                }
            }, {
                key: "handleTouchEnd",
                value: function(t) {
                    for (var n = [], i = 0; i < t.touches.length; i++)
                        n.push(new e.Point(t.touches[i].clientX,t.touches[i].clientY));
                    (0,
                    u.Signal)(u.EVT.KEYBOARD.UP, n, this),
                    t.stopPropagation()
                }
            }, {
                key: "handleLeave",
                value: function(e) {
                    this.mouseDown = !1,
                    (0,
                    u.Signal)(u.EVT.KEYBOARD.LEFT, {}, this),
                    e.stopPropagation()
                }
            }, {
                key: "handleMove",
                value: function(t) {
                    this.mouseDown && ((0,
                    u.Signal)(u.EVT.KEYBOARD.MOVED, [new e.Point(t.clientX,t.clientY)], this),
                    t.stopPropagation())
                }
            }, {
                key: "handleDown",
                value: function(t) {
                    this.mouseDown = !0,
                    (0,
                    u.Signal)(u.EVT.KEYBOARD.PRESSED, [new e.Point(t.clientX,t.clientY)], this),
                    t.stopPropagation()
                }
            }, {
                key: "handleUp",
                value: function(e) {
                    this.mouseDown = !1,
                    (0,
                    u.Signal)(u.EVT.KEYBOARD.UP, [], this),
                    e.stopPropagation()
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.data.visible ? l.default.createElement("div", {
                        id: "edit-view-keyboard"
                    }, l.default.createElement("div", {
                        className: "keyboard",
                        style: {
                            height: c.config.keyboardHeight,
                            width: "100%"
                        },
                        onTouchStart: this.handleTouchStart.bind(this),
                        onTouchMove: this.handleTouchMove.bind(this),
                        onTouchEnd: this.handleTouchEnd.bind(this)
                    })) : null
                }
            }]),
            n
        }(l.default.Component)
    }
    ).call(t, n(7))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.TempoScreen = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(240)
      , c = n(15)
      , h = n(0)
      , d = n(237);
    t.TempoScreen = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.closeTempoScreen = n.closeTempoScreen.bind(n),
            n.tapCloseTempoScreen = n.tapCloseTempoScreen.bind(n),
            n.updateBpm = n.updateBpm.bind(n),
            n.state = {
                visible: e.data.visible,
                bpm: e.bpm,
                timeSig: e.timeSig
            },
            n
        }
        return r(t, e),
        a(t, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState({
                    visible: e.data.visible,
                    bpm: e.bpm,
                    timeSig: e.timeSig
                })
            }
        }, {
            key: "closeTempoScreen",
            value: function() {
                if (!this._closeTouchStart)
                    return void (this._closeTouchStart = !1);
                this.setState({
                    visible: !1
                }),
                setTimeout(function() {
                    (0,
                    h.Dispatch)(h.ACTION.EDIT_SETTINGS.TEMPO_CLOSE, {
                        bpm: this.state.bpm,
                        timeSig: this.state.timeSig
                    })
                }
                .bind(this), 500)
            }
        }, {
            key: "tapCloseTempoScreen",
            value: function() {
                this._closeTouchStart = !0
            }
        }, {
            key: "updateBpm",
            value: function(e) {
                null != e && this.setState({
                    bpm: e
                })
            }
        }, {
            key: "updateBeats",
            value: function(e) {
                this.setState({
                    timeSig: this.state.timeSig.update("numerator", function(t) {
                        return e
                    })
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getStyles()
                  , t = {
                    position: "relative",
                    padding: "0 22px",
                    textAlign: "center",
                    top: "50%",
                    transform: "translateY(-50%)",
                    WebkitTransform: "translateY(-50%)"
                }
                  , n = {
                    fontSize: "48px",
                    color: "#fff",
                    height: "42px",
                    marginBottom: "8px"
                }
                  , i = {
                    fontSize: "16px",
                    color: "#A392B1",
                    marginBottom: "16px"
                }
                  , o = this.props.data.visible ? l.default.createElement(d.Metronome, {
                    bpm: this.state.bpm,
                    beats: this.state.timeSig.numerator
                }) : null;
                return l.default.createElement("div", {
                    className: "tempo-screen noselect",
                    style: e.tempoScreen
                }, l.default.createElement("div", {
                    className: "tempo-screen-container",
                    style: e.tempoScreenContainer
                }, l.default.createElement("div", {
                    className: "tempo-screen-header",
                    style: e.tempoScreenHeader
                }, l.default.createElement("div", {
                    className: "icon tempo-back-btn",
                    style: e.tempoBackBtn,
                    onTouchStart: this.tapCloseTempoScreen,
                    onTouchEnd: this.closeTempoScreen
                }), l.default.createElement("div", {
                    className: "tempo-header-text",
                    style: e.tempoHeaderText,
                    onTouchStart: this.tapCloseTempoScreen,
                    onTouchEnd: this.closeTempoScreen
                }, "Set Tempo")), o, l.default.createElement("div", {
                    className: "tempo-container",
                    style: t
                }, l.default.createElement("div", {
                    className: "current-tempo",
                    style: n
                }, this.state.bpm), l.default.createElement("div", {
                    className: "bpm-label",
                    style: i
                }, "BPM"), l.default.createElement(u.SliderInput, {
                    onChange: this.updateBpm,
                    min: 40,
                    max: 220,
                    value: this.state.bpm,
                    step: 1
                })), l.default.createElement("div", {
                    className: "beats-buttons noselect",
                    style: e.beatsButtons
                }, l.default.createElement("div", {
                    className: "icon beats-button three-beats " + (3 === this.state.timeSig.numerator ? "on" : ""),
                    style: e.threeBeatsBtn,
                    onTouchStart: this.updateBeats.bind(this, 3)
                }, "3"), l.default.createElement("div", {
                    className: "icon beats-button four-beats " + (4 === this.state.timeSig.numerator ? "on" : ""),
                    style: e.fourBeatsBtn,
                    onTouchStart: this.updateBeats.bind(this, 4)
                }, "4"), l.default.createElement("div", {
                    className: "beats-buttons-text",
                    style: e.beatsButtonsText
                }, "BEATS PER MEASURE"))), l.default.createElement("div", {
                    className: "right-overlay",
                    style: e.rightOverlay,
                    onTouchStart: this.tapCloseTempoScreen,
                    onTouchEnd: this.closeTempoScreen
                }))
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    tempoScreen: {
                        position: "absolute",
                        zIndex: this.props.data.visible ? 6 : 1,
                        width: "80vw",
                        height: "100%",
                        marginRight: "20vw"
                    },
                    tempoScreenContainer: {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#3d2758",
                        left: this.state.visible ? "0" : "-100vw",
                        transition: "left 500ms ease"
                    },
                    tempoScreenHeader: {
                        position: "absolute",
                        display: "inline-block",
                        width: "100%",
                        height: c.ClientInterface.android ? screen.height >= 600 ? 64 : 48 : window.innerWidth > 736 ? 64 : 44,
                        boxSizing: "border-box",
                        lineHeight: "44px",
                        color: "#fff",
                        fontSize: 18,
                        backgroundColor: "#562889"
                    },
                    tempoBackBtn: {
                        position: "absolute",
                        top: c.ClientInterface.android ? screen.height >= 600 ? 20 : 10 : window.innerWidth > 736 ? 20 : 8,
                        left: 16,
                        width: 24,
                        height: 24
                    },
                    tempoHeaderText: {
                        width: "100%",
                        textAlign: "center",
                        lineHeight: c.ClientInterface.android ? screen.height >= 600 ? "68px" : "52px" : window.innerWidth > 736 ? "68px" : "44px"
                    },
                    beatsButtons: {
                        position: "absolute",
                        bottom: 22,
                        width: "100%",
                        textAlign: "center",
                        fontSize: 24
                    },
                    threeBeatsBtn: {
                        display: "inline-block",
                        verticalAlign: "top",
                        lineHeight: "44px",
                        marginRight: "-2px",
                        color: 3 === this.state.timeSig.numerator ? "#fff" : "#A392B1"
                    },
                    fourBeatsBtn: {
                        display: "inline-block",
                        verticalAlign: "top",
                        lineHeight: "44px",
                        marginLeft: "-2px",
                        marginRight: 1,
                        color: 4 === this.state.timeSig.numerator ? "#fff" : "#A392B1"
                    },
                    beatsButtonsText: {
                        fontWeight: "bold",
                        fontSize: 12,
                        height: 12,
                        color: "#A392B1",
                        paddingTop: 12
                    },
                    rightOverlay: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: -1,
                        backgroundColor: "rgba(0, 0, 0, 0.70)",
                        opacity: this.state.visible ? 1 : 0,
                        transition: "opacity 500ms ease"
                    }
                }
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Interaction = t.Gesture = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = n(52)
      , a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r);
    t.Gesture = function() {
        function e(t) {
            i(this, e),
            this.interaction = t
        }
        return o(e, [{
            key: "update",
            value: function(e) {}
        }, {
            key: "touchStart",
            value: function(e) {}
        }, {
            key: "touchMove",
            value: function(e) {}
        }, {
            key: "touchEnd",
            value: function(e) {}
        }, {
            key: "enter",
            value: function() {
                this.interaction.currentGesture._leave(),
                this.interaction.setCurrentGesture(this)
            }
        }, {
            key: "_leave",
            value: function() {}
        }, {
            key: "initListeners",
            value: function() {}
        }, {
            key: "removeListeners",
            value: function() {}
        }]),
        e
    }(),
    t.Interaction = function() {
        function e(t, n, o, r, s, l) {
            i(this, e),
            this.container = t,
            this.camera = n,
            this.view = l,
            this.viewConfig = s,
            this.targetContainer = r,
            this.renderer = o,
            this.clickMask = a.default.get(),
            this.clickMask.renderable = !1,
            this.clickMask.beginFill(16711680),
            this.clickMask.drawRect(0, 0, this.camera.w, this.camera.h),
            this.clickMask.width = this.camera.w,
            this.clickMask.height = this.camera.h,
            this.container.addChild(this.clickMask),
            this.currentGesture = null,
            this.defaultGesture = null,
            this.gestures = {}
        }
        return o(e, [{
            key: "enter",
            value: function(e, t) {
                return this.gestures[e] ? (this.gestures[e].enter(t),
                this.gestures[e]) : (this.defaultGesture.enter(t),
                this.defaultGesture)
            }
        }, {
            key: "getGestureID",
            value: function(e) {
                for (var t in this.gestures)
                    if (this.gestures[t] == e)
                        return t;
                return null
            }
        }, {
            key: "getCurrentGestureID",
            value: function() {
                return this.getGestureID(this.currentGesture)
            }
        }, {
            key: "initListeners",
            value: function() {
                this.clickMask.interactive = !0,
                this.clickMask.on("mousedown", this.touchStart.bind(this)),
                this.clickMask.on("touchstart", this.touchStart.bind(this)),
                this.clickMask.on("mousemove", this.touchMove.bind(this)),
                this.clickMask.on("touchmove", this.touchMove.bind(this)),
                this.clickMask.on("mouseup", this.touchEnd.bind(this)),
                this.clickMask.on("touchend", this.touchEnd.bind(this))
            }
        }, {
            key: "setCurrentGesture",
            value: function(e) {
                this.currentGesture = e
            }
        }, {
            key: "update",
            value: function(e) {
                this.currentGesture.update(e)
            }
        }, {
            key: "touchStart",
            value: function(e) {
                this.currentGesture.touchStart(e)
            }
        }, {
            key: "touchMove",
            value: function(e) {
                this.currentGesture.touchMove(e)
            }
        }, {
            key: "touchEnd",
            value: function(e) {
                this.currentGesture.touchEnd(e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.removeListeners(),
                this.container.removeChild(this.clickMask),
                a.default.recycle(this.clickMask)
            }
        }, {
            key: "removeListeners",
            value: function() {
                this.clickMask.off("mousedown"),
                this.clickMask.off("touchstart"),
                this.clickMask.off("mousemove"),
                this.clickMask.off("touchmove"),
                this.clickMask.off("mouseup"),
                this.clickMask.off("touchend"),
                this.clickMask.interactive = !1
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.NoteGroup = t.Measure = t.Arrangement = void 0;
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = n(4)
      , s = n(70)
      , l = {
        sharps: 0,
        minor: !1
    }
      , u = (t.Arrangement = function() {
        function e(t, n, o) {
            i(this, e),
            this.title = "",
            this.artist = "",
            this.tags = [],
            this.songId = null,
            this.keySig = t,
            this.timeSig = n,
            this.bpm = o,
            this.arrKey = null,
            this.measures = [new u(this.timeSig.numerator,t)],
            this._measuresBeatIndex = [0],
            this.fireflySpeed = 4,
            this.fireflySpacing = 1,
            this.extraData = {
                piano: {
                    firefly_speed: 5,
                    auto_sustain: 1,
                    auto_playchords: 0,
                    lookahead: 5,
                    spacing: .9,
                    volume: 0
                },
                composerOptions: {
                    chromaticMode: !1
                }
            },
            this._unchanged = !1,
            this.initPitchColumns()
        }
        return r(e, [{
            key: "initPitchColumns",
            value: function() {
                this.pitchColumns = {};
                for (var e = a.config.pitchOffset; e <= a.config.pitchOffset + a.config.availablePitches; e++)
                    this.pitchColumns[e] = 0
            }
        }, {
            key: "hasPitch",
            value: function(e) {
                return this.pitchColumns[e] > 0
            }
        }, {
            key: "getFireflySpeed",
            value: function() {
                return this.fireflySpeed * a.fireflySpeedFactor
            }
        }, {
            key: "getNoteByLocalBeat",
            value: function(e, t, n) {
                return this.measures[e] && this.measures[e].noteGroups[t] && this.measures[e].noteGroups[t].notes[n]
            }
        }, {
            key: "getBeatLength",
            value: function() {
                return this.getBeats(this.measures.length - 1) + this._measuresBeatIndex[this._measuresBeatIndex.length - 1]
            }
        }, {
            key: "getMeasureCount",
            value: function() {
                return this.measures.length
            }
        }, {
            key: "getTempo",
            value: function() {
                return this.bpm
            }
        }, {
            key: "getTimeSig",
            value: function() {
                return this.timeSig
            }
        }, {
            key: "getLastNoteBeat",
            value: function() {
                for (var e = this.measures.length - 1; e > 0 && 0 == this.measures[e].noteCount(); )
                    e--;
                var t = this.measures[e].getLastNoteBeat();
                return null == t ? 1 / 0 : t + this._measuresBeatIndex[e]
            }
        }, {
            key: "getMeasureGlobalBeat",
            value: function(e) {
                if (e < this.measures.length && e >= 0)
                    return this._measuresBeatIndex[e];
                var t = this.measures.length - 1;
                return this._measuresBeatIndex[t] + (e - t) * this.getBeats(this.measures.length - 1)
            }
        }, {
            key: "getMeasure",
            value: function(e) {
                if (e >= this.measures.length) {
                    var t = this.measures[this.measures.length - 1];
                    return new u(t.beats,o({}, t.keySig))
                }
                return this.measures[e]
            }
        }, {
            key: "getKeySig",
            value: function(e) {
                return e >= this.measures.length ? this.measures[this.measures.length - 1].keySig : this.measures[e].keySig
            }
        }, {
            key: "getBeats",
            value: function(e) {
                return e >= this.measures.length ? this.timeSig.numerator : this.measures[e].beats
            }
        }, {
            key: "getMeasureIdx",
            value: function(e) {
                if (e >= this._measuresBeatIndex[this._measuresBeatIndex.length - 1]) {
                    var t = this.measures[this.measures.length - 1].beats;
                    return this.measures.length + Math.floor((e - this._measuresBeatIndex[this._measuresBeatIndex.length - 1]) / t) - 1
                }
                var n = (0,
                s.findFirstGreaterThanOrEqualTo)(this._measuresBeatIndex, e + 1e-7, function(e, t) {
                    return e - t
                });
                return n < 0 ? 0 : n - 1
            }
        }, {
            key: "isEmpty",
            value: function() {
                for (var e = 0; e < this.measures.length; e++)
                    if (0 != this.measures[e].noteCount())
                        return !1;
                return !0
            }
        }, {
            key: "globalBeatToLocal",
            value: function(e) {
                var t = this.getMeasureIdx(e);
                if (t >= this.measures.length)
                    var n = (e - this._measuresBeatIndex[this._measuresBeatIndex.length - 1]) % this.measures[this.measures.length - 1].beats;
                else
                    for (var n = e - this._measuresBeatIndex[t]; n >= this.measures[t].beats; )
                        n -= this.measures[t].beats,
                        t++;
                return {
                    measureIdx: t,
                    localBeat: n
                }
            }
        }, {
            key: "getBeatList",
            value: function() {
                return this._export2BeatList()
            }
        }, {
            key: "setTempo",
            value: function(e) {
                return e != this.bpm && (this.bpm = e,
                !0)
            }
        }, {
            key: "updateTimeSig",
            value: function(e) {
                if (e.numerator == this.timeSig.numerator)
                    return !1;
                var t = this._export2BeatList();
                return t.timeSig.numerator = e.numerator,
                this._loadBeatList(t),
                !0
            }
        }, {
            key: "addMeasure",
            value: function(e) {
                var t, n = new u(this.timeSig.numerator,o({}, e));
                0 == this.measures.length ? (this._measuresBeatIndex = [],
                t = 0) : t = this._measuresBeatIndex[this._measuresBeatIndex.length - 1] + this.measures[this.measures.length - 1].beats,
                this._measuresBeatIndex.push(t),
                this.measures.push(n),
                this._unchanged = !1
            }
        }, {
            key: "removeMeasures",
            value: function(e) {
                e = e.sort(function(e, t) {
                    return t - e
                });
                for (var t = 0; t < e.length; t++)
                    this.measures.splice(e[t], 1);
                0 == this.measures.length && this.measures.push(new u(this.timeSig.numerator,o({}, l))),
                this._indexMeasures(),
                this._unchanged = !1
            }
        }, {
            key: "updateKeySig",
            value: function(e, t) {
                if (t && t.hasOwnProperty("sharps") && t.hasOwnProperty("minor")) {
                    var n = this.getKeySig(e);
                    if (n.sharps != t.sharps || n.minor != t.minor) {
                        if (e >= this.measures.length)
                            for (var i = this.measures.length; i <= e; )
                                this.addMeasure(n),
                                i++;
                        return this.measures[e].keySig = o({}, t),
                        !0
                    }
                    return !1
                }
            }
        }, {
            key: "removeNoteByLocalBeat",
            value: function(e, t, n) {
                var i = this.measures[e]
                  , o = i.noteGroups[t];
                if (o && (o._removeNotes([{
                    pitch: n
                }]),
                this.pitchColumns[n] -= 1),
                0 == o.noteCount()) {
                    delete i.noteGroups[o.localBeat];
                    e == this.getMeasureCount() - 1 && this.trimEmptyMeasures()
                }
                this._unchanged = !1
            }
        }, {
            key: "addNotesByLocalBeat",
            value: function(e, t, n, i) {
                if (t >= this.timeSig.numerator || t < 0)
                    return !1;
                for (var r = i || this.measures[this.measures.length - 1].keySig; this.measures.length <= e; )
                    this.addMeasure(o({}, r));
                var a = this.measures[e].noteGroups[t];
                return a || (a = new c(t),
                this.measures[e].noteGroups[t] = a),
                a._addNotes(n),
                n.forEach(function(e) {
                    this.pitchColumns[e.pitch] += 1
                }
                .bind(this)),
                this._unchanged = !1,
                !0
            }
        }, {
            key: "shift",
            value: function(e, t, n) {
                var i = this._export2BeatList()
                  , o = (0,
                s.findFirstGreaterThanOrEqualTo)(i.noteList, e, function(e, t) {
                    return e.globalBeat - t
                });
                if (t < 0 && n && n.noMerge) {
                    for (var r = o, a = 0, l = Math.abs(t); i.noteList[r] && i.noteList[r].globalBeat < e + l; )
                        r++,
                        a++;
                    i.noteList.splice(o, a)
                }
                for (var r = o; r < i.noteList.length; r++)
                    i.noteList[r].globalBeat += t;
                return this._loadBeatList(i),
                this._indexMeasures(),
                this._unchanged = !1,
                !0
            }
        }, {
            key: "cutAndPaste",
            value: function(e, t) {
                for (var n = [], i = 0; i < e.length; i++)
                    n.push(this.measures[e[i]]);
                for (this.copyAndPaste(e, t); n.length > 0; )
                    this.measures.splice(this.measures.indexOf(n.pop()), 1);
                this._indexMeasures(),
                this._unchanged = !1
            }
        }, {
            key: "copyAndPaste",
            value: function(e, t) {
                e = e.sort(function(e, t) {
                    return e - t
                }),
                t = t.sort(function(e, t) {
                    return t - e
                });
                for (var n = [], i = 0; i < e.length; i++)
                    n.push(this.measures[e[i]].clone());
                for (var o = 0; o < t.length; o++) {
                    for (var r = t[o], a = [], i = 0; i < n.length; i++)
                        a.push(n[i].clone());
                    a.unshift(0),
                    a.unshift(r),
                    this.measures.splice.apply(this.measures, a),
                    this._indexMeasures()
                }
                this._unchanged = !1
            }
        }, {
            key: "trimEmptyMeasures",
            value: function() {
                for (var e = this.measures.length - 1, t = e - 1; e > 0 && 0 == this.measures[e].noteCount() && this.measures[e].keySig.sharps == this.measures[t].keySig.sharps && this.measures[e].keySig.minor == this.measures[t].keySig.minor; )
                    this.measures.pop(),
                    e--,
                    t--;
                this._indexMeasures()
            }
        }, {
            key: "_indexMeasures",
            value: function() {
                this._measuresBeatIndex = [0];
                for (var e = 1; e < this.measures.length; e++)
                    this._measuresBeatIndex.push(this._measuresBeatIndex[e - 1] + this.measures[e - 1].beats)
            }
        }, {
            key: "_export2BeatList",
            value: function() {
                for (var e = {
                    bpm: this.bpm,
                    timeSig: {
                        numerator: this.timeSig.numerator,
                        denominator: this.timeSig.denominator
                    },
                    keySigs: this.measures.map(function(e) {
                        return o({}, e.keySig)
                    }),
                    fireflySpeed: this.fireflySpeed,
                    fireflySpacing: this.fireflySpacing,
                    noteList: [],
                    measureLength: this.measures.length
                }, t = 0, n = 0; n < this.measures.length; n++)
                    Object.keys(this.measures[n].noteGroups).forEach(function(i) {
                        var o = this.measures[n].noteGroups[i].notes
                          , r = t + parseFloat(i);
                        e.noteList.push({
                            globalBeat: r,
                            notes: Object.keys(o).map(function(e) {
                                return {
                                    pitch: o[e].pitch,
                                    velocity: o[e].velocity
                                }
                            })
                        })
                    }
                    .bind(this)),
                    t += this.measures[n].beats;
                return e.noteList.sort(function(e, t) {
                    return e.globalBeat - t.globalBeat
                }),
                e
            }
        }, {
            key: "_loadBeatList",
            value: function(e) {
                this.bpm = e.bpm,
                this.timeSig = e.timeSig,
                this.measures = [],
                this.fireflySpeed = e.fireflySpeed,
                this.fireflySpacing = e.fireflySpacing;
                for (var t = e.keySigs, n = this.timeSig.numerator, i = 0, r = 0, a = 0, s = e.noteList.length > 0 ? e.noteList[e.noteList.length - 1].globalBeat : 0, h = e.noteList.length; i <= s; ) {
                    for (var d = new u(n,a < t.length ? t[a] : o(l, t[t.length - 1])); r < h && e.noteList[r].globalBeat < i + n; ) {
                        var p = e.noteList[r].globalBeat - i;
                        d.noteGroups[p] = d.noteGroups[p] || new c(p),
                        d.noteGroups[p]._addNotes(e.noteList[r].notes),
                        r++
                    }
                    this.measures.push(d),
                    a++,
                    i += n
                }
                for (; this.measures.length < e.measureLength; )
                    this.addMeasure({
                        sharps: 0 == this.measures.length ? this.keySig.sharps : this.measures[this.measures.length - 1].keySig.sharps
                    });
                this._indexMeasures()
            }
        }, {
            key: "unchanged",
            get: function() {
                return !!this._unchanged
            },
            set: function(e) {
                this._unchanged = e
            }
        }]),
        e
    }(),
    t.Measure = function() {
        function e(t, n) {
            i(this, e),
            this.beats = t,
            this.keySig = n,
            this.noteGroups = {}
        }
        return r(e, [{
            key: "getLastNoteBeat",
            value: function() {
                var e = Math.max.apply(null, Object.keys(this.noteGroups));
                return e >= 0 ? e : null
            }
        }, {
            key: "noteCount",
            value: function() {
                var e = 0;
                for (var t in this.noteGroups)
                    e += this.noteGroups[t].noteCount();
                return e
            }
        }, {
            key: "noteGroupCount",
            value: function() {
                return Object.keys(this.noteGroups).length
            }
        }, {
            key: "getNoteGroup",
            value: function(e) {
                return this.noteGroups[e]
            }
        }, {
            key: "clone",
            value: function() {
                for (var t = new e(this.beats,o({}, this.keySig)), n = Object.keys(this.noteGroups), i = 0; i < n.length; i++)
                    t.noteGroups[n[i]] = this.noteGroups[n[i]].clone();
                return t
            }
        }, {
            key: "empty",
            value: function() {
                this.noteGroups = {}
            }
        }]),
        e
    }())
      , c = t.NoteGroup = function() {
        function e(t) {
            i(this, e),
            this.notes = {},
            this.localBeat = t
        }
        return r(e, [{
            key: "noteCount",
            value: function() {
                return Object.keys(this.notes).length
            }
        }, {
            key: "_addNotes",
            value: function(e) {
                for (var t = 0; t < e.length; t++)
                    if (!this.notes[e[t].pitch]) {
                        var n = {
                            pitch: e[t].pitch,
                            velocity: e[t].velocity
                        };
                        this.notes[n.pitch] = n
                    }
            }
        }, {
            key: "_removeNotes",
            value: function(e) {
                for (var t = 0; t < e.length; t++)
                    this.notes[e[t].pitch] && delete this.notes[e[t].pitch]
            }
        }, {
            key: "clone",
            value: function() {
                var t = new e(this.localBeat);
                for (var n in this.notes)
                    t._addNotes([this.notes[n]]);
                return t
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        this.camera = {},
        this.camera.zoomScale = e.zoomScale,
        this.camera.y = e.y,
        this.camera.x = e.x,
        this.camera.gridHeight = t.gridHeight,
        this.gestureId = n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ViewContext = i
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), l = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, i)
        }
        if ("value"in o)
            return o.value;
        var a = o.get;
        if (void 0 !== a)
            return a.call(i)
    }, u = n(31), c = (n(67),
    n(213)), h = n(21), d = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(h), p = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        s(t, [{
            key: "get",
            value: function() {
                var e = l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "get", this).call(this) || new c.MeasurePastePoint;
                return e.texture = d.default.getPastePoint(!1),
                e
            }
        }], [{
            key: "getInstance",
            value: function() {
                return a || (a = new t),
                a
            }
        }]),
        t
    }(u.ObjectPool);
    window.pastePointPool = p.getInstance(),
    t.default = p.getInstance()
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e.isEmpty() ? g : y
    }
    function o(e) {
        return e.unchanged ? g : y
    }
    function r(e) {
        for (var t = 0, n = e.getMeasureCount(), i = 0; i < n; i++)
            if (e.getMeasure(i).noteGroupCount() > 0 && t++,
            t >= 4)
                return y;
        return g
    }
    function a(e) {
        for (var t = e.getMeasureCount(), n = 0, i = 0; i < t; i++)
            e.getMeasure(i).noteGroupCount() > 0 && n++;
        return n / t >= .5 ? y : g
    }
    function s(e) {
        for (var t = 0, n = 0; n < e.getMeasureCount(); n++)
            if (0 == e.getMeasure(n).noteGroupCount() ? t++ : t = 0,
            t > 4)
                return g;
        return y
    }
    function l(e) {
        for (var t = Math.min(e.getMeasureCount(), 4), n = 0; n < t; n++)
            if (e.getMeasure(n).noteGroupCount() > 0)
                return y;
        return g
    }
    function u(e) {
        return i(e) == g ? {
            errorType: c
        } : o(e) == g ? {
            errorType: h
        } : r(e) == g ? {
            errorType: d
        } : a(e) == g ? {
            errorType: p
        } : s(e) == g ? {
            errorType: f
        } : l(e) == g ? {
            errorType: m
        } : {}
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.validate = u;
    var c = t.ARR_EMPTY_ERROR = "arr_empty"
      , h = t.ARR_NO_CHANGE_ERROR = "no_change"
      , d = t.ARR_NOTE_ERROR_1 = "note_error_1"
      , p = t.ARR_NOTE_ERROR_2 = "note_error_2"
      , f = t.ARR_NOTE_ERROR_3 = "note_error_3"
      , m = t.ARR_NOTE_ERROR_4 = "note_error_4"
      , y = "valid"
      , g = "invalid"
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = function() {
        function e() {
            i(this, e),
            this.prevStr = null
        }
        return o(e, [{
            key: "reset",
            value: function() {
                this.prevStr = null
            }
        }, {
            key: "allow",
            value: function(e) {
                return e != this.prevStr && (this.prevStr = e,
                !0)
            }
        }]),
        e
    }();
    t.default = r
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = Math.tan(60 * Math.PI / 180)
      , a = Math.tan(30 * Math.PI / 180);
    t.Momentum = function() {
        function e(t, n, o, r, a) {
            i(this, e),
            this.mask = n,
            this.camera = t,
            this.viewConfig = r,
            this.gridHeight = r.gridHeight,
            this.gridWidth = r.gridWidth,
            this.arrPlayer = a,
            this.targetContainer = o
        }
        return o(e, [{
            key: "update",
            value: function(e) {
                if (this.flightElapseTime += 1e3 * e,
                !this.mousedown && (this.initialVX || this.initialVY)) {
                    var t = this.flightElapseTime
                      , n = Math.exp(-t / 200)
                      , i = this.initialVX * n
                      , o = this.initialVY * n
                      , r = i > .05 || i < -.05 || o > .05 || o < -.05
                      , a = this.target.y - 200 * this.initialVY * n
                      , s = this.target.x - 200 * this.initialVX * n;
                    !this.mousedown && r ? (this.camera.panToX(s, {
                        silent: !0
                    }),
                    this.arrPlayer.isPlaying || this.camera.panToY(a)) : this.mousedown || r || (this.arrPlayer.isPlaying || this.stop(),
                    this.initialVX = 0,
                    this.initialVY = 0,
                    this.flightElapseTime = 0)
                }
                this.mousedown && this._updateVelocity(e)
            }
        }, {
            key: "stop",
            value: function() {
                this.camera.panToY(Math.round(this.camera.y / this.viewConfig.gridHeight) * this.viewConfig.gridHeight)
            }
        }, {
            key: "stopped",
            value: function() {
                return !this.initialVX && !this.initialVY && !this.mousedown
            }
        }, {
            key: "reset",
            value: function() {
                this.mousedown = !1,
                this.initialVX = 0,
                this.initialVY = 0,
                this.initialTime = null,
                this.initialPos = {},
                this.currentPos = {},
                this.target = {
                    x: 0,
                    y: 0
                },
                this.epsilon = {
                    x: 0,
                    y: 0
                },
                this.v = {
                    x: 0,
                    y: 0
                },
                this.prevPos = {},
                this.ticker = null,
                this.mask.interactive = !0
            }
        }, {
            key: "initListeners",
            value: function() {
                this.reset()
            }
        }, {
            key: "_updateVelocity",
            value: function(e) {
                var t, n, i, o;
                t = -(this.currentPos.x - this.initialPos.x),
                n = this.currentPos.y - this.initialPos.y,
                this.initialPos = this.currentPos,
                i = 700 * t / (1 + 1e3 * e) * .05,
                o = 700 * n / (1 + 1e3 * e) * .05,
                this.initialVX = (.5 * i + .5 * this.initialVX) / 10,
                this.initialVY = (.5 * o + .5 * this.initialVY) / 10,
                this.initialVX = this.initialVX > 3 ? 3 : this.initialVX,
                this.initialVY = this.initialVY > 4 ? 4 : this.initialVY
            }
        }, {
            key: "touchStart",
            value: function(e) {
                var t = e.data.originalEvent;
                this.mousedown = !0,
                this.camera.stopAnimations(),
                this.pinchDist = 0,
                this.initPos = {
                    x: t.touches ? t.touches[0].clientX : t.clientX,
                    y: t.touches ? t.touches[0].clientY : t.clientY
                },
                this.initialVX = 0,
                this.initialVY = 0,
                this.initialPos = {
                    x: this.initPos.x,
                    y: this.initPos.y
                },
                this.currentPos = {
                    x: this.initPos.x,
                    y: this.initPos.y
                },
                this.target = {
                    x: this.initPos.x,
                    y: this.initPos.y
                },
                t.touches && t.touches.length > 1 && (this.pinchDist = Math.pow(t.touches[0].clientX - t.touches[1].clientX, 2) + Math.pow(t.touches[0].clientY - t.touches[1].clientY, 2))
            }
        }, {
            key: "touchMove",
            value: function(e) {
                var t = e.data.originalEvent
                  , n = !1;
                if (t.touches && t.touches.length > 1) {
                    var i = Math.pow(t.touches[0].clientX - t.touches[1].clientX, 2) + Math.pow(t.touches[0].clientY - t.touches[1].clientY, 2);
                    Math.abs(i - this.pinchDist) > 225 && (n = !0),
                    this.pinchDist = i
                }
                if (this.mousedown) {
                    var o = t.touches ? t.touches[0].clientX : t.clientX
                      , s = t.touches ? t.touches[0].clientY : t.clientY
                      , l = o - (this.prevPos.x || o)
                      , u = s - (this.prevPos.y || s)
                      , c = o - (this.initPos.x || o)
                      , h = s - (this.initPos.y || s)
                      , d = Math.sign(h / c);
                    l = h / c * d < r ? l : 0,
                    u = h / c * d > a ? u : 0,
                    this.currentPos = {
                        x: 0 === l ? this.initialPos.x : o,
                        y: 0 === u ? this.initialPos.y : s
                    },
                    this.target = {
                        x: this.currentPos.x,
                        y: this.currentPos.y
                    },
                    n || this.camera.pan(l, this.arrPlayer.isPlaying ? 0 : u),
                    this.prevPos.x = o,
                    this.prevPos.y = s
                }
            }
        }, {
            key: "touchEnd",
            value: function() {
                this.initialY = this.camera.y,
                this.initialX = this.camera.x;
                var e = this.initialY + 200 * (this.initialVY - .05 * Math.sign(this.initialVY));
                this.target.y = Math.round(e / this.gridHeight) * this.gridHeight,
                this.target.x = this.initialX + 200 * this.initialVX,
                this.epsilon.y = e - this.target.y,
                this.mousedown = !1,
                this.prevPos = {},
                this.flightElapseTime = 0
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(107)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(i);
    t.default = {
        hideHelpModalPerm: function(e) {
            o.default.set("nhm", e ? 1 : 0, {
                path: "/s/piano/composer",
                expires: 365
            }),
            window.localStorage.setItem("nhm", e ? 1 : 0)
        },
        isHelpModalHidden: function() {
            var e = o.default.get("nhm") || window.localStorage.getItem("nhm");
            return e = null == e ? 0 : parseInt(e)
        },
        getDraft: function() {
            return window.localStorage.getItem("pianoSong")
        },
        setDraft: function(e) {
            window.localStorage.setItem("pianoSong", e)
        },
        removeDraft: function() {
            window.localStorage.removeItem("pianoSong")
        }
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.View = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = n(7)
      , a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r);
    t.View = function() {
        function e(t, n) {
            i(this, e),
            this.id = n,
            this.container = new a.default.Container,
            t.addChild(this.container)
        }
        return o(e, [{
            key: "leave",
            value: function() {
                this.container.visible = !1
            }
        }, {
            key: "resume",
            value: function() {
                this.container.visible = !0
            }
        }, {
            key: "destroy",
            value: function() {
                this.container.parent.removeChild(this.container),
                this.container.destroy()
            }
        }]),
        e
    }()
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(0)
      , l = n(41)
      , u = n(15)
      , c = n(121)
      , h = n(112)
      , d = i(h)
      , p = n(69)
      , f = i(p)
      , m = n(251)
      , y = i(m)
      , g = n(206)
      , v = i(g)
      , b = function() {
        function e(t, n) {
            o(this, e),
            this.history = n,
            this.arrPlayer = t,
            this.currentArrangement = null,
            this.pianoSongValidator = new v.default
        }
        return a(e, [{
            key: "initialize",
            value: function() {
                this.initListeners(),
                this.initDraft(),
                this.initArrangement(),
                window.ArrMeta.primeSongId ? u.ComposerInit.initSmuleClone(window.ArrMeta.primeSongId) : window.ArrMeta.primeArrKey ? u.ComposerInit.initCommunityClone(window.ArrMeta.primeArrKey) : window.ArrMeta.ownedArrKey && u.ComposerInit.initEdit(window.ArrMeta.ownedArrKey)
            }
        }, {
            key: "initDraft",
            value: function() {
                this.draft = new y.default
            }
        }, {
            key: "initArrangement",
            value: function() {
                this.draft.localSong ? this.setArrangement(this.draft.localSong) : (this.resetArrangement(),
                this.resetDraft()),
                f.default.composeSettingsPageview(this.currentArrangement.arrKey && this.currentArrangement.songId, this.currentArrangement.arrKey, this.currentArrangement.primeSongId || this.currentArrangement.primeCover && this.currentArrangement.primeCover.songId, this.currentArrangement.primeArrKey)
            }
        }, {
            key: "resetArrangement",
            value: function(e) {
                var t = e && (0,
                l.JSON2Arrangement)(e) || new c.Arrangement({
                    sharps: 0,
                    minor: !1,
                    chromaticMode: !1,
                    globalTime: 0
                },{
                    numerator: 4,
                    denominator: 4
                },96,!0);
                t.arrKey || !t.primeSongId && !t.primeArrKey || (t.unchanged = !0),
                this.setArrangement(t),
                this.draft.update(this.currentArrangement)
            }
        }, {
            key: "resetDraft",
            value: function() {
                this.draft.destroy()
            }
        }, {
            key: "setArrangement",
            value: function(e) {
                this.currentArrangement = e,
                this.history.save(this.currentArrangement, {
                    evtName: s.EVT.ARRANGEMENT.SET
                }),
                (0,
                s.Signal)(s.EVT.ARRANGEMENT.SET, {
                    newArrangement: this.currentArrangement
                }, this),
                this.arrPlayer.updatePlayQueue(this.currentArrangement, {
                    lazy: !0
                })
            }
        }, {
            key: "previewArrangement",
            value: function() {
                var e = (0,
                l.Arrangement2JSON)(this.currentArrangement);
                return u.ClientInterface.startPreview(e).catch(function(e) {
                    (0,
                    s.Dispatch)(s.ACTION.MODALS.TOGGLE_LOST_CONNECTION_MODAL, !0)
                })
            }
        }, {
            key: "initListeners",
            value: function() {
                s.Event.on(s.EVT.ARRANGEMENT.LOAD, this.loadArrangementHandler.bind(this)),
                s.Event.on(s.EVT.ARRANGEMENT.PUBLISH, this.publishArrangementHandler.bind(this)),
                s.Event.on(s.EVT.ARRANGEMENT.TEMPO_UPDATE, this.updateTempoHandler.bind(this)),
                s.Event.on(s.EVT.ARRANGEMENT.TIMESIG_UPDATE, this.updateTimeSigHandler.bind(this)),
                s.Event.on(s.EVT.ARRANGEMENT.PREVIEW_UPDATE, this.previewUpdateHandler.bind(this)),
                s.Event.on(s.EVT.ARRANGEMENT.CLEAR, this.clearArrangementHandler.bind(this)),
                s.Event.on(s.EVT.CATALOG.RESTRICT, this.restrictedHandler.bind(this))
            }
        }, {
            key: "rowAddHandler",
            value: function(e) {
                this.currentArrangement.shift(e.startBeat, e.deltaBeat),
                f.default.composeEdit(4 * e.zoomLevel, "insert", this.currentArrangement.arrKey && this.currentArrangement.songId, this.currentArrangement.arrKey),
                this.draft.update(this.currentArrangement),
                this.history.save(this.currentArrangement, r(e, {
                    evtName: s.EVT.ROW.ADD
                })),
                this.arrPlayer.updatePlayQueue(this.currentArrangement, {
                    lazy: !0
                })
            }
        }, {
            key: "rowRemoveHandler",
            value: function(e) {
                this.currentArrangement.shift(e.startBeat, e.deltaBeat, {
                    noMerge: !0
                }),
                f.default.composeEdit(4 * e.zoomLevel, "delete", this.currentArrangement.arrKey && this.currentArrangement.songId, this.currentArrangement.arrKey),
                this.draft.update(this.currentArrangement),
                this.history.save(this.currentArrangement, r(e, {
                    evtName: s.EVT.ROW.REMOVE
                })),
                this.arrPlayer.updatePlayQueue(this.currentArrangement, {
                    lazy: !0
                })
            }
        }, {
            key: "updateTempoHandler",
            value: function(e) {
                this.currentArrangement.setTempo(e.tempo) && (this.draft.update(this.currentArrangement),
                this.arrPlayer.updatePlayQueue(this.currentArrangement, {
                    lazy: !0
                }))
            }
        }, {
            key: "updateKeySigHandler",
            value: function(e) {
                var t = this.currentArrangement.getKeySig(e.measureIdx);
                this.currentArrangement.updateKeySig(e.measureIdx, e.keySig) && (this.draft.update(this.currentArrangement),
                this.history.save(this.currentArrangement, r(e, {
                    oldKeySig: t,
                    evtName: s.EVT.MEASURE.KEYSIG_UPDATE
                })))
            }
        }, {
            key: "updateTimeSigHandler",
            value: function(e) {
                this.currentArrangement.updateTimeSig({
                    numerator: e.numerator
                }) && this.draft.update(this.currentArrangement)
            }
        }, {
            key: "updateTitleHandler",
            value: function(e) {
                this.currentArrangement.title !== e && (this.titleChanged = !0),
                this.currentArrangement.title = e,
                this.checkCatalog(),
                this.draft.update(this.currentArrangement)
            }
        }, {
            key: "updateSubtitleHandler",
            value: function(e) {
                this.currentArrangement.subtitle = e,
                this.draft.update(this.currentArrangement)
            }
        }, {
            key: "updateArtistHandler",
            value: function(e) {
                this.currentArrangement.artist !== e && (this.artistChanged = !0),
                this.currentArrangement.artist = e,
                this.checkCatalog(),
                this.draft.update(this.currentArrangement)
            }
        }, {
            key: "updateTagsHandler",
            value: function(e) {
                var t = JSON.stringify(this.currentArrangement.tags.slice().sort()) !== JSON.stringify(e.slice().sort());
                this.currentArrangement.tags = e,
                t && this.pianoSongValidator.validateTags(this.currentArrangement).catch(function(e) {}),
                this.draft.update(this.currentArrangement)
            }
        }, {
            key: "updateTermsHandler",
            value: function() {
                this.currentArrangement.termsChecked = !this.currentArrangement.termsChecked
            }
        }, {
            key: "updateCoverHandler",
            value: function(e) {
                this.currentArrangement.title = e.title,
                this.currentArrangement.artist = e.artist || e.composer,
                this.currentArrangement.songId = e.song_id,
                this.draft.update(this.currentArrangement)
            }
        }, {
            key: "publishArrangementHandler",
            value: function() {
                this.pianoSongValidator.validatePublish(this.currentArrangement).then(this.previewArrangement.bind(this)).catch(function(e) {})
            }
        }, {
            key: "loadArrangementHandler",
            value: function(e) {
                e.fromApp && f.default.composeSettingsPageview(e.arrangementJSON.arrKey && e.arrangementJSON.songId, e.arrangementJSON.arrKey, e.arrangementJSON.primeSongId || e.arrangementJSON.primeCover && e.arrangementJSON.primeCover.songId, e.arrangementJSON.primeArrKey),
                this.draft.localSong ? (0,
                s.Dispatch)(s.ACTION.MODALS.TOGGLE_START_OVER_MODAL, {
                    visible: !0,
                    resetDraft: !1,
                    fromApp: e.fromApp,
                    newArrangementJSON: e.arrangementJSON
                }) : (0,
                s.Dispatch)(s.ACTION.MODALS.CONFIRM_START_OVER, {
                    newArrangementJSON: e.arrangementJSON,
                    resetDraft: !1
                })
            }
        }, {
            key: "editNotesHandler",
            value: function(e) {
                var t = []
                  , n = [];
                e.notes.forEach(function(i) {
                    this.currentArrangement.getNoteByLocalBeat(e.measureIdx, e.localBeat, i.pitch) ? (this.currentArrangement.removeNoteByLocalBeat(e.measureIdx, e.localBeat, i.pitch),
                    n.push(i)) : (this.currentArrangement.addNotesByLocalBeat(e.measureIdx, e.localBeat, [i]),
                    t.push(i))
                }
                .bind(this)),
                this.currentArrangement.trimEmptyMeasures(),
                this.draft.update(this.currentArrangement),
                this.history.save(this.currentArrangement, r(e, {
                    evtName: s.EVT.NOTE.EDIT,
                    notesToAdd: t,
                    notesToRemove: n
                })),
                this.arrPlayer.updatePlayQueue(this.currentArrangement, {
                    lazy: !0
                })
            }
        }, {
            key: "batchNoteEdit",
            value: function(e, t, n, i) {
                for (var o = [], a = [], l = 0; l < e.length; l++)
                    this.currentArrangement.getNoteByLocalBeat(t[l], n[l], e[l].pitch) ? (this.currentArrangement.removeNoteByLocalBeat(t[l], n[l], e[l].pitch),
                    a.push(e[l])) : (this.currentArrangement.addNotesByLocalBeat(t[l], n[l], [e[l]]),
                    o.push(e[l]));
                i && i(),
                this.currentArrangement.trimEmptyMeasures(),
                this.draft.update(this.currentArrangement),
                this.history.save(this.currentArrangement, r({}, {
                    evtName: s.EVT.NOTE.EDIT,
                    notesToAdd: o,
                    notesToRemove: a
                })),
                this.arrPlayer.updatePlayQueue(this.currentArrangement, {
                    lazy: !1
                })
            }
        }, {
            key: "deleteMeasureHandler",
            value: function(e) {
                this.currentArrangement.removeMeasures(e.targetIndices),
                f.default.composeEdit(0, "delete", this.currentArrangement.arrKey && this.currentArrangement.songId, this.currentArrangement.arrKey),
                this.draft.update(this.currentArrangement),
                this.history.save(this.currentArrangement, r(e, {
                    evtName: s.EVT.MEASURE.DELETE
                })),
                this.arrPlayer.updatePlayQueue(this.currentArrangement, {
                    lazy: !0
                })
            }
        }, {
            key: "pasteMeasureHandler",
            value: function(e) {
                e.copy ? (f.default.composeEdit(0, "copy", this.currentArrangement.arrKey && this.currentArrangement.songId, this.currentArrangement.arrKey),
                this.currentArrangement.copyAndPaste(e.targetIndices, e.pastePoints)) : (f.default.composeEdit(0, "move", this.currentArrangement.arrKey && this.currentArrangement.songId, this.currentArrangement.arrKey),
                this.currentArrangement.cutAndPaste(e.targetIndices, e.pastePoints)),
                this.draft.update(this.currentArrangement),
                this.history.save(this.currentArrangement, r(e, {
                    evtName: s.EVT.MEASURE.PASTE
                })),
                this.arrPlayer.updatePlayQueue(this.currentArrangement, {
                    lazy: !0
                })
            }
        }, {
            key: "checkCatalog",
            value: function() {
                var e = this.currentArrangement.title && this.currentArrangement.artist;
                if (this.titleChanged || this.artistChanged) {
                    if (this.currentArrangement.arrKey)
                        return void this.pianoSongValidator.validateTags().catch(function(e) {});
                    if (this.titleChanged = this.artistChanged = !1,
                    this.currentArrangement.subtitle = "",
                    this.currentArrangement.songId = null,
                    !e)
                        return;
                    d.default.checkCatalog(this.currentArrangement.title, this.currentArrangement.artist).then(function(e) {
                        e.restricted ? this.restrictedHandler() : e.cover ? "string" == typeof e.cover.title && e.cover.title.toLowerCase() === this.currentArrangement.title.toLowerCase() && ("string" == typeof e.cover.artist && e.cover.artist.toLowerCase() === this.currentArrangement.artist.toLowerCase() || "string" == typeof e.cover.composer && e.cover.composer.toLowerCase() === this.currentArrangement.artist.toLowerCase()) ? (f.default.arrCatalogMatch(!1, !0, e.cover.song_id, this.currentArrangement.title, this.currentArrangement.artist),
                        (0,
                        s.Dispatch)(s.ACTION.EDIT_SETTINGS.SET_COVER, e.cover)) : (f.default.arrCatalogMatch(!1, !1, e.cover.song_id, this.currentArrangement.title, this.currentArrangement.artist),
                        (0,
                        s.Dispatch)(s.ACTION.MODALS.TOGGLE_CATALOG_MODAL, {
                            visible: !0,
                            cover: e.cover
                        }, this)) : f.default.arrNoMatch(null, null, null, null, null)
                    }
                    .bind(this))
                }
            }
        }, {
            key: "historyUndoHandler",
            value: function() {
                this.history.undo(this.currentArrangement),
                this.arrPlayer.updatePlayQueue(this.currentArrangement, {
                    lazy: !0
                })
            }
        }, {
            key: "historyRedoHandler",
            value: function() {
                this.history.redo(this.currentArrangement),
                this.arrPlayer.updatePlayQueue(this.currentArrangement, {
                    lazy: !0
                })
            }
        }, {
            key: "restrictedHandler",
            value: function() {
                f.default.arrBlacklistMatch(!0, !0, null, this.currentArrangement.title, this.currentArrangement.artist),
                this.currentArrangement.title = "",
                this.currentArrangement.artist = "",
                this.currentArrangement.tags = [],
                this.currentArrangement.songId = null,
                (0,
                s.Dispatch)(s.ACTION.MODALS.TOGGLE_RESTRICTED_MODAL, !0),
                this.draft.update(this.currentArrangement)
            }
        }, {
            key: "previewUpdateHandler",
            value: function(e) {
                r(this.currentArrangement.extraData.piano, e.fireflyJSON),
                this.draft.update(this.currentArrangement)
            }
        }, {
            key: "clearArrangementHandler",
            value: function() {
                this.resetArrangement(),
                this.resetDraft()
            }
        }, {
            key: "arrangement",
            get: function() {
                return this.currentArrangement
            }
        }]),
        e
    }();
    t.default = b
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ComposerGraphics = void 0;
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
          , a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , s = n(7)
          , l = i(s)
          , u = n(4)
          , c = n(21)
          , h = i(c)
          , d = n(201)
          , p = i(d)
          , f = n(0)
          , m = n(257)
          , y = n(258)
          , g = n(204)
          , v = i(g);
        t.ComposerGraphics = function() {
            function t(e, n, i, r) {
                o(this, t),
                this.webComposer = e,
                this.arrMan = i,
                this.arrPlayer = r,
                this.composerUIController = n,
                this.render = this.render.bind(this),
                this.loadAssets(function() {
                    window.refs = u.refs,
                    this.clock = new m.Clock,
                    this.root = new l.default.Container,
                    this._initViewport(),
                    u.refs.renderer = this.renderer = new l.default.WebGLRenderer(this.viewportWidth,this.viewportHeight,{
                        view: u.refs.viewport,
                        transparent: !0,
                        resolution: window.devicePixelRatio,
                        autoResize: !0
                    }),
                    h.default.buildCache(this.renderer),
                    this.initListeners(),
                    this.coolDownBeforeIdle = .5,
                    this.frameFactor = -1,
                    this.frameCounter = 0,
                    this.setView(this.composerUIController.state.viewId),
                    this.render()
                }
                .bind(this))
            }
            return a(t, [{
                key: "loadAssets",
                value: function(e) {
                    l.default.loader.add(["./res/texture2x-b8e7bdf5e5999c57d2b307a50c4a365d.json", "./res/sidebar/side_bar_gradient-4c8dcb592f4dc7f84279e94cbe38e8cb.jpg"]).on("progress", function() {
                        console.log("Loading texture...")
                    }).load(function(t, n) {
                        u.refs.textureCache = l.default.loader.resources["./res/texture2x-b8e7bdf5e5999c57d2b307a50c4a365d.json"].textures;
                        for (var i in u.refs.textureCache){
                            u.refs.textureCache[i].baseTexture.mipmap || (u.refs.textureCache[i].baseTexture.mipmap = !0);
                        }
                        e()
                    })
                }
            }, {
                key: "initListeners",
                value: function() {
                    f.Event.on(f.EVT.ARRANGEMENT.SET, function(e) {
                        var t = this.currentController === this.editController ? u.ID.EDIT_VIEW : u.ID.MEASURE_VIEW;
                        this.destroyViews(),
                        this.setView(t),
                        this.renderId || this.render()
                    }
                    .bind(this)),
                    f.ActionHandler.on(f.ACTION.VIEW.CHANGE, function(e) {
                        this.setView(e.viewId, e.targetContext)
                    }
                    .bind(this)),
                    this.handleResize(),
                    f.Event.on(f.EVT.RENDERER.RESET_IDLE_COOLDOWN, this.delayIdle.bind(this)),
                    f.Event.on(f.EVT.CAMERA.PANNED, this.delayIdle.bind(this))
                }
            }, {
                key: "removeListeners",
                value: function() {
                    f.Event.removeEvent(f.EVT.RENDERER.RESET_IDLE_COOLDOWN),
                    f.Event.removeEvent(f.EVT.CAMERA.PANNED),
                    f.ActionHandler.removeEvent(f.ACTION.VIEW.CHANGE)
                }
            }, {
                key: "handleResize",
                value: function() {
                    var e;
                    window.onresize = function(t) {
                        e && clearTimeout(e);
                        var n = this;
                        e = setTimeout(function() {
                            n._initViewport(document.getElementById("web-composer"), window.innerWidth, window.innerHeight),
                            n.renderer.resize(window.innerWidth, window.innerHeight),
                            h.default.onWindowResize(n.renderer);
                            var e = n.currentController.generateContext();
                            n.destroyViews(),
                            n.setView(n.viewConfig.viewId),
                            n.currentController.camera.zoom(e.camera.zoomScale, {
                                noPanAndPlay: !0
                            }),
                            n.currentController.camera.panToX(e.camera.x, {
                                noPanAndPlay: !0
                            }),
                            n.currentController.camera.panToY(e.camera.y, {
                                noPanAndPlay: !0
                            })
                        }, 250)
                    }
                    .bind(this)
                }
            }, {
                key: "delayIdle",
                value: function() {
                    this.coolDownBeforeIdle = .5,
                    this.frameFactor = -1
                }
            }, {
                key: "destroyViews",
                value: function() {
                    this.editController && this.editController.destroy(),
                    this.measureController && this.measureController.destroy(),
                    this.editController = null,
                    this.measureController = null,
                    this.currentController = null
                }
            }, {
                key: "update",
                value: function(t) {
                    e.getAll().length > 0 && this.delayIdle(),
                    this.coolDownBeforeIdle -= t,
                    this.coolDownBeforeIdle < 0 && (this.frameFactor = 60),
                    this.frameCounter > this.frameFactor && (this.renderer.render(this.root),
                    this.frameCounter = 0,
                    this.stats && this.stats.end()),
                    this.frameCounter++
                }
            }, {
                key: "render",
                value: function() {
                    this.renderId = window.requestAnimationFrame(this.render);
                    var t = this.clock.getDelta();
                    this.stats && this.stats.begin(),
                    this.currentController.update(t),
                    this.arrPlayer.update(t),
                    e.update(),
                    this.update(t)
                }
            }, {
                key: "pause",
                value: function() {
                    this.renderId && window.cancelAnimationFrame(this.renderId)
                }
            }, {
                key: "_initFpsStat",
                value: function() {
                    this.stats = new y.Stats,
                    document.body.appendChild(this.stats.domElement)
                }
            }, {
                key: "_initViewport",
                value: function() {
                    u.refs.viewport = document.getElementById(this.composerUIController.state.canvasId),
                    this.viewportWidth = window.innerWidth,
                    this.viewportHeight = window.innerHeight
                }
            }, {
                key: "setView",
                value: function(e, t) {
                    t = t || {};
                    var n = this.currentController;
                    switch (this.viewConfig = (0,
                    u.getViewConfig)(e),
                    e) {
                    case u.ID.EDIT_VIEW:
                        this.editController = this.editController || new p.default(this.arrMan,this.viewConfig,this.root,this.composerUIController,this.arrPlayer),
                        this.currentController = this.editController;
                        break;
                    case u.ID.MEASURE_VIEW:
                        this.measureController = this.measureController || new v.default(this.arrMan,this.viewConfig,this.root,this.composerUIController,this.arrPlayer),
                        this.currentController = this.measureController
                    }
                    if (this.currentController != n) {
                        var i = n ? n.generateContext() : {}
                          , o = this.currentController.generateContext();
                        this.composerUIController.changeView(e, i, o, t);
                        var r = this.getCurrentViewCameraContext(i.camera, o.camera, t.camera || {});
                        this.removeListeners(),
                        n && n.leave(),
                        this.initListeners(),
                        this.currentController && this.currentController.resume(r, i.gestureId)
                    }
                }
            }, {
                key: "getCurrentViewCameraContext",
                value: function(e, t, n) {
                    var i = r(t, n)
                      , o = 0;
                    if (e) {
                        var a = i.gridHeight * i.zoomScale
                          , s = e.gridHeight * e.zoomScale
                          , l = a * this.arrMan.arrangement.getBeatLength();
                        o = Math.min(l, e.y * a / s),
                        o = Math.round(o / i.gridHeight) * i.gridHeight
                    }
                    return i.y = o,
                    i
                }
            }]),
            t
        }()
    }
    ).call(t, n(16))
}
, function(e, t, n) {
    "use strict";
    (function(e, i, o) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function s(e) {
            for (var t = 0; t < _.length; t++)
                "function" != typeof e[_[t]] && (e[_[t]] = S,
                console.warn("View Controller (Measure/Edit Controller) needs to implement %s, stubbing with noop", _[t]));
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ComposerUIController = void 0;
        var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , u = n(29)
          , c = r(u)
          , h = n(4)
          , d = n(0)
          , p = n(15)
          , f = n(241)
          , m = n(69)
          , y = r(m)
          , g = n(127)
          , v = r(g)
          , b = n(124)
          , E = c.default.from({
            viewId: h.ID.EDIT_VIEW,
            sideBar: {
                keySigEditHitBox: {
                    visible: !0
                }
            },
            keyboard: {
                visible: !0
            }
        })
          , T = c.default.from({
            viewId: h.ID.MEASURE_VIEW,
            sideBar: {
                keySigEditHitBox: {
                    visible: !1
                }
            },
            keyboard: {
                visible: !1
            }
        })
          , S = function() {}
          , _ = ["onTempoUpdate", "onPlayBtnClick", "onUndone", "onRedone", "onCloseZoomMenu", "onOpenZoomMenu", "onConfirmStartOver"];
        t.ComposerUIController = function() {
            function t(e, n, i) {
                a(this, t),
                this.history = i,
                this.arrMan = e,
                this.arrPlayer = n;
                var o = this.arrMan.arrangement
                  , r = h.ID.EDIT_VIEW;
                window.webUI = this,
                this.viewController = s({}),
                this.state = c.default.from({
                    viewId: r,
                    canvasId: "piano",
                    rootElId: "web-composer",
                    camera: {
                        zoomScale: 1
                    },
                    arrangement: {
                        title: o.title,
                        subtitle: o.subtitle,
                        artist: o.artist,
                        cover: o.cover,
                        tags: o.tags,
                        arrKey: o.arrKey,
                        songId: o.songId,
                        timeSig: o.timeSig,
                        bpm: o.bpm,
                        isEmpty: o.isEmpty(),
                        lastSaved: o.lastSaved,
                        primeArrKey: o.primeArrKey,
                        primeSongId: o.primeSongId,
                        primeCover: o.primeCover
                    },
                    publishing: !1,
                    meta: window.ArrMeta,
                    sideBar: {
                        visible: !0,
                        fadeOut: !1,
                        playBtn: {
                            visible: !0,
                            disabled: !1,
                            jump2Start: !1,
                            playing: !1
                        },
                        keySigEditHitBox: {
                            visible: !0
                        },
                        historyBtn: {
                            canUndo: !1,
                            canRedo: !1,
                            disabled: !1
                        }
                    },
                    zoomMenu: {
                        visible: !1
                    },
                    editSettings: {
                        visible: !0,
                        termsChecked: !1,
                        publishBlocked: !1,
                        tempoScreen: {
                            visible: !1
                        }
                    },
                    pianoMenu: {
                        visible: !0
                    },
                    pegboardPublishBtn: {
                        visible: !1
                    },
                    rowActionMenu: {
                        visible: !1
                    },
                    keyboard: {
                        visible: !0
                    },
                    keySigScreen: {
                        visible: !1,
                        chromatic: !1,
                        keySig: {
                            minor: !1,
                            sharps: 0
                        }
                    },
                    measureActionMenu: {
                        visible: !1,
                        pasteMode: !1,
                        copy: !1,
                        canPaste: !1
                    },
                    modalContainer: {
                        startOverModal: {
                            visible: !1,
                            resetDraft: !1,
                            fromApp: !1,
                            newArrangementJSON: null
                        },
                        helpModal: {
                            visible: !1,
                            shownOnce: !1
                        },
                        catalogModal: {
                            visible: !1,
                            cover: {
                                title: null,
                                artist: null,
                                composer: null,
                                song_id: null
                            }
                        },
                        restrictedModal: {
                            visible: !1
                        },
                        addNotesModal: {
                            visible: !1
                        },
                        lostConnectionModal: {
                            visible: !1
                        },
                        invalidArrModal: {
                            errorType: null
                        }
                    },
                    viewConfig: (0,
                    h.getViewConfig)(r)
                }),
                this.uiMountPoint = document.getElementById(this.state.rootElId),
                this.initListeners()
            }
            return l(t, [{
                key: "getState",
                value: function() {
                    return this.state
                }
            }, {
                key: "changeView",
                value: function(e, t, n, i) {
                    if (e == this.state.viewId)
                        this.onWindowResize();
                    else {
                        switch (e) {
                        case h.ID.EDIT_VIEW:
                            this.state = this.state.merge(E, {
                                deep: !0
                            });
                            break;
                        case h.ID.MEASURE_VIEW:
                            this.state = this.state.merge(T, {
                                deep: !0
                            })
                        }
                        var o = i.camera ? i.camera.zoomScale : n.camera.zoomScale;
                        this.state = this.state.setIn(["camera", "zoomScale"], o),
                        this.state = this.state.setIn(["sideBar", "playBtn", "disabled"], this.arrMan.arrangement.isEmpty()),
                        this.state = this.state.set("viewConfig", c.default.from((0,
                        h.getViewConfig)(e)))
                    }
                    this.renderView()
                }
            }, {
                key: "togglePublishing",
                value: function(e) {
                    this.state = this.state.set("publishing", e),
                    this.renderView()
                }
            }, {
                key: "toggleRowActionMenu",
                value: function(e) {
                    this.state = this.state.setIn(["rowActionMenu", "visible"], e).setIn(["sideBar", "fadeOut"], e),
                    this.renderView()
                }
            }, {
                key: "updateHistoryBtn",
                value: function() {
                    var e = this.state.sideBar.historyBtn
                      , t = this.history.canRedo()
                      , n = this.history.canUndo();
                    e.canUndo == n && e.canRedo == t || (this.state = this.state.updateIn(["sideBar", "historyBtn"], function(e) {
                        return e.merge((0,
                        c.default)({
                            canUndo: n,
                            canRedo: t
                        }))
                    })),
                    this.renderView()
                }
            }, {
                key: "toggleEditSettings",
                value: function(e) {
                    this.state = this.state.setIn(["editSettings", "visible"], e);
                    var t = this.arrMan.arrangement;
                    e ? (this.toggleHelpModal({
                        visible: !1
                    }),
                    y.default.composeSettingsPageview(t.arrKey && t.songId, t.arrKey, t.primeSongId || t.primeCover && t.primeCover.songId, t.primeArrKey)) : (this.toggleHelpModal({
                        visible: !0
                    }),
                    y.default.composeEditPageview(this.state.arrangement.bpm, this.state.arrangement.timeSig.numerator, this.state.arrangement.arrKey && this.state.arrangement.songId, this.state.arrangement.arrKey, this.state.arrangement.primeSongId || this.state.arrangement.primeCover && this.state.arrangement.primeCover.songId, this.state.arrangement.primeArrKey)),
                    this.renderView()
                }
            }, {
                key: "updatePlayBtn",
                value: function(e) {
                    this.state = this.state.updateIn(["sideBar", "playBtn"], function(t) {
                        return t.merge(e)
                    }),
                    this.renderView()
                }
            }, {
                key: "updatePegboardPublishBtn",
                value: function(e) {
                    (this.state.measureActionMenu.visible || this.state.rowActionMenu.visible) && (e = e.set("visible", !1)),
                    this.state = this.state.set("pegboardPublishBtn", e),
                    this.renderView()
                }
            }, {
                key: "toggleMeasureActionMenu",
                value: function(e) {
                    this.state = this.state.set("measureActionMenu", (0,
                    c.default)({
                        visible: e,
                        pasteMode: !1,
                        copy: !1,
                        canPaste: !1
                    })),
                    this.renderView()
                }
            }, {
                key: "toggleSideBar",
                value: function(e) {
                    this.state = this.state.updateIn(["sideBar", "visible"], function(t) {
                        return e
                    }),
                    this.renderView()
                }
            }, {
                key: "toggleZoomMenu",
                value: function(e, t) {
                    this.state = this.state.setIn(["zoomMenu", "visible"], e).setIn(["camera", "zoomScale"], t).setIn(["sideBar", "fadeOut"], e),
                    this.renderView()
                }
            }, {
                key: "toggleMeasureActionPasteMode",
                value: function(e, t) {
                    this.state.measureActionMenu.pasteMode == e && this.state.measureActionMenu.copy == t || (this.state = this.state.updateIn(["measureActionMenu", "pasteMode"], function(t) {
                        return e
                    }),
                    this.state = this.state.updateIn(["measureActionMenu", "copy"], function(e) {
                        return t
                    }),
                    this.renderView())
                }
            }, {
                key: "toggleStartOverModal",
                value: function(e) {
                    this.state = this.state.setIn(["modalContainer", "startOverModal"], e),
                    this.renderView()
                }
            }, {
                key: "confirmStartOverModal",
                value: function(e) {
                    this.arrMan.resetArrangement(e.newArrangementJSON),
                    e.resetDraft && this.arrMan.resetDraft(),
                    this.updateArrangement(),
                    this.state = this.state.setIn(["modalContainer", "startOverModal", "visible"], !1).setIn(["editSettings", "publishBlocked"], !1),
                    this.viewController.onConfirmStartOver(),
                    this.history.flush(this.arrMan),
                    this.updateHistoryBtn(),
                    this.renderView()
                }
            }, {
                key: "declineStartOverModal",
                value: function(e) {
                    e && p.ClientInterface.saveQuit(),
                    this.state = this.state.setIn(["modalContainer", "startOverModal", "visible"], !1),
                    this.renderView()
                }
            }, {
                key: "toggleHelpModal",
                value: function(e) {
                    var t = e.visible
                      , n = e.forced
                      , i = n;
                    t && !n && (v.default.isHelpModalHidden() || this.state.modalContainer.helpModal.shownOnce) || (this.state = this.state.setIn(["modalContainer", "helpModal"], {
                        visible: t,
                        shownOnce: !0,
                        hideCheckbox: i
                    }),
                    this.renderView())
                }
            }, {
                key: "disableHelpModalPerm",
                value: function(e) {
                    v.default.hideHelpModalPerm(e)
                }
            }, {
                key: "toggleInvalidArrModal",
                value: function(e) {
                    this.state = this.state.setIn(["modalContainer", "invalidArrModal", "errorType"], e.errorType),
                    this.renderView()
                }
            }, {
                key: "toggleCatalogModal",
                value: function(e) {
                    this.state = this.state.setIn(["modalContainer", "catalogModal"], e),
                    this.renderView()
                }
            }, {
                key: "toggleRestrictedModal",
                value: function(e) {
                    this.state = this.state.setIn(["modalContainer", "restrictedModal", "visible"], e),
                    this.updateArrangement(),
                    this.renderView()
                }
            }, {
                key: "toggleAddNotesModal",
                value: function(e) {
                    e || (this.state.viewId != h.ID.EDIT_VIEW && (0,
                    d.Dispatch)(d.ACTION.VIEW.CHANGE, {
                        viewId: h.ID.EDIT_VIEW
                    }),
                    this.closeEditSettings()),
                    this.state = this.state.setIn(["modalContainer", "addNotesModal", "visible"], e),
                    this.renderView()
                }
            }, {
                key: "toggleLostConnectionModal",
                value: function(e) {
                    this.state = this.state.setIn(["modalContainer", "lostConnectionModal", "visible"], e).set("publishing", !1),
                    this.renderView()
                }
            }, {
                key: "updateMeasureActionPasteBtn",
                value: function(e) {
                    this.state.measureActionMenu.canPaste != e && (this.state = this.state.updateIn(["measureActionMenu", "canPaste"], function(t) {
                        return e
                    }),
                    this.renderView())
                }
            }, {
                key: "openTempoScreen",
                value: function() {
                    this._blurInput(),
                    this.state = this.state.updateIn(["editSettings", "tempoScreen"], function(e) {
                        return e.merge(c.default.from({
                            visible: !0
                        }))
                    }),
                    this.renderView()
                }
            }, {
                key: "closeTempoScreen",
                value: function(e) {
                    this.state.arrangement.bpm !== e.bpm && (this.arrMan.updateTempoHandler({
                        tempo: e.bpm
                    }),
                    this.state = this.state.setIn(["arrangement", "bpm"], e.bpm)),
                    this.state.arrangement.timeSig !== e.timeSig && (this.arrMan.updateTimeSigHandler({
                        numerator: e.timeSig.numerator,
                        denominator: e.timeSig.denominator
                    }),
                    this.state = this.state.setIn(["arrangement", "timeSig"], e.timeSig)),
                    this.state = this.state.setIn(["editSettings", "tempoScreen", "visible"], !1),
                    this.renderView(),
                    this.viewController.onTempoUpdate(e)
                }
            }, {
                key: "setArrangement",
                value: function() {
                    this.state = this.state.setIn(["editSettings", "termsChecked"], !1),
                    this.updateArrangement(),
                    this.renderView()
                }
            }, {
                key: "updateArrangement",
                value: function() {
                    var e = this.arrMan.arrangement
                      , t = this.state.arrangement.merge({
                        title: e.title,
                        subtitle: e.subtitle,
                        artist: e.artist,
                        cover: e.cover,
                        tags: e.tags,
                        timeSig: e.timeSig,
                        bpm: e.bpm,
                        isEmpty: e.isEmpty(),
                        lastSaved: e.lastSaved,
                        arrKey: e.arrKey,
                        songId: e.songId,
                        primeArrKey: e.primeArrKey,
                        primeSongId: e.primeSongId,
                        primeCover: e.primeCover
                    });
                    this.state = this.state.set("arrangement", t)
                }
            }, {
                key: "updateTitle",
                value: function(e) {
                    this.arrMan.updateTitleHandler(e),
                    this.updateArrangement(),
                    this.renderView()
                }
            }, {
                key: "updateSubtitle",
                value: function(e) {
                    this.arrMan.updateSubtitleHandler(e),
                    this.updateArrangement(),
                    this.renderView()
                }
            }, {
                key: "updateArtist",
                value: function(e) {
                    this.arrMan.updateArtistHandler(e),
                    this.updateArrangement(),
                    this.renderView()
                }
            }, {
                key: "updateTags",
                value: function(e) {
                    this.arrMan.updateTagsHandler(e),
                    this.updateArrangement(),
                    this.renderView()
                }
            }, {
                key: "toggleTermsOfService",
                value: function() {
                    this.arrMan.updateTermsHandler(),
                    this.state = this.state.setIn(["editSettings", "termsChecked"], this.arrMan.arrangement.termsChecked),
                    this.renderView()
                }
            }, {
                key: "setCover",
                value: function(e) {
                    this.arrMan.updateCoverHandler(e),
                    this.updateArrangement(),
                    this.state = this.state.setIn(["modalContainer", "catalogModal", "visible"], !1),
                    this.renderView()
                }
            }, {
                key: "discardCover",
                value: function() {
                    this.state = this.state.setIn(["modalContainer", "catalogModal", "visible"], !1),
                    this.renderView()
                }
            }, {
                key: "toggleKeySigScreen",
                value: function(e, t, n) {
                    this.state = this.state.update("keySigScreen", function(i) {
                        return i.merge(c.default.from({
                            visible: e,
                            keySig: t,
                            chromaticMode: n
                        }), {
                            deep: !0
                        })
                    }),
                    this.renderView()
                }
            }, {
                key: "updateCamera",
                value: function(e) {
                    this.state.zoomMenu.visible && (this.state = this.state.setIn(["camera", "zoomScale"], e),
                    this.renderView())
                }
            }, {
                key: "publishEnabled",
                value: function() {
                    var e = !this.state.arrangement.songId && this.state.arrangement.title && this.state.arrangement.title.length <= ArrangementConfigs.maxNameLength
                      , t = e || this.state.arrangement.subtitle
                      , n = this.state.arrangement.artist && (this.state.arrangement.songId || this.state.arrangement.artist.length <= ArrangementConfigs.maxArtistLength);
                    return t && n && (this.state.editSettings.termsChecked || this.state.arrangement.arrKey) && !this.arrMan.arrangement.isEmpty()
                }
            }, {
                key: "initPreview",
                value: function() {
                    var t = (0,
                    b.validate)(this.arrMan.arrangement);
                    if (t.errorType)
                        switch (t.errorType) {
                        case b.ARR_EMPTY_ERROR:
                            this.toggleAddNotesModal(!0);
                            break;
                        case b.ARR_NO_CHANGE_ERROR:
                            y.default.arrCloneMatch(this.arrMan.arrangement.primeSongId, this.arrMan.arrangement.primeArrKey);
                        case b.ARR_NOTE_ERROR_1:
                        case b.ARR_NOTE_ERROR_2:
                        case b.ARR_NOTE_ERROR_3:
                        case b.ARR_NOTE_ERROR_4:
                            this.toggleInvalidArrModal(t)
                        }
                    else
                        this.publishEnabled() ? (this.state = this.state.setIn(["editSettings", "publishBlocked"], !1).set("publishing", !0),
                        this.arrMan.publishArrangementHandler()) : (this.state = this.state.setIn(["editSettings", "publishBlocked"], !0),
                        this.toggleEditSettings(!0),
                        setTimeout(function() {
                            e(".edit-settings-body").animate({
                                scrollTop: e(".song-details-container").offset().top - 44
                            })
                        }
                        .bind(this), 500));
                    this.renderView()
                }
            }, {
                key: "playBtnClick",
                value: function(e) {
                    var t, n = this.state.sideBar.playBtn;
                    n.disabled || (t = n.jump2Start ? n.set("jump2Start", !1).set("playing", !1) : n.playing ? n.set("playing", !1) : n.set("playing", !0),
                    this.updatePlayBtn(t),
                    this.viewController.onPlayBtnClick(n, t))
                }
            }, {
                key: "openZoomMenu",
                value: function() {
                    this.viewController.onOpenZoomMenu()
                }
            }, {
                key: "closeZoomMenu",
                value: function() {
                    this.viewController.onCloseZoomMenu()
                }
            }, {
                key: "openEditSettings",
                value: function() {
                    this.updateArrangement(),
                    this.toggleEditSettings(!0);
                    var e = this.state.sideBar.playBtn
                      , t = this.state.sideBar.playBtn.set("playing", !1);
                    this.updatePlayBtn(t),
                    this.viewController.onPlayBtnClick(e, t)
                }
            }, {
                key: "closeEditSettings",
                value: function() {
                    this._blurInput(),
                    this.toggleEditSettings(!1)
                }
            }, {
                key: "showPianoMenu",
                value: function() {
                    this.state = this.state.setIn(["pianoMenu", "visible"], !0),
                    this.renderView()
                }
            }, {
                key: "hidePianoMenu",
                value: function() {
                    this.state = this.state.setIn(["pianoMenu", "visible"], !1),
                    this.renderView()
                }
            }, {
                key: "undo",
                value: function() {
                    !this.arrPlayer.isPlaying && this.history.canUndo() && this.arrMan.historyUndoHandler(this.arrMan.arrangement)
                }
            }, {
                key: "redo",
                value: function() {
                    !this.arrPlayer.isPlaying && this.history.canRedo() && this.arrMan.historyRedoHandler(this.arrMan.arrangement)
                }
            }, {
                key: "undone",
                value: function(e) {
                    this.updateHistoryBtn(),
                    this.viewController.onUndone(e)
                }
            }, {
                key: "redone",
                value: function(e) {
                    this.updateHistoryBtn(),
                    this.viewController.onRedone(e)
                }
            }, {
                key: "renderView",
                value: function(e) {
                    var t = this;
                    this.update && clearTimeout(this.update),
                    this.update = setTimeout(function() {
                        i.render(o.createElement(f.ComposerUI, {
                            data: t.state
                        }), t.uiMountPoint, e || S)
                    }, 10)
                }
            }, {
                key: "attach",
                value: function(e) {
                    this.viewController = s(e)
                }
            }, {
                key: "onWindowResize",
                value: function() {
                    this.state.measureActionMenu.visible && this.toggleMeasureActionMenu(!1),
                    this.state.sideBar.visible || this.toggleSideBar(!0),
                    this.state.rowActionMenu.visible && this.toggleRowActionMenu(!1)
                }
            }, {
                key: "onWindowFocus",
                value: function(t) {
                    setTimeout(function() {
                        e("input").blur()
                    }, 10)
                }
            }, {
                key: "initListeners",
                value: function() {
                    d.ActionHandler.on(d.ACTION.MODALS.TOGGLE_ADD_NOTES_MODAL, this.toggleAddNotesModal.bind(this)),
                    d.ActionHandler.on(d.ACTION.MODALS.TOGGLE_CATALOG_MODAL, this.toggleCatalogModal.bind(this)),
                    d.ActionHandler.on(d.ACTION.MODALS.TOGGLE_HELP_MODAL, this.toggleHelpModal.bind(this)),
                    d.ActionHandler.on(d.ACTION.MODALS.NEVER_SHOW_HELP_AGAIN, this.disableHelpModalPerm.bind(this)),
                    d.ActionHandler.on(d.ACTION.MODALS.TOGGLE_LOST_CONNECTION_MODAL, this.toggleLostConnectionModal.bind(this)),
                    d.ActionHandler.on(d.ACTION.MODALS.TOGGLE_RESTRICTED_MODAL, this.toggleRestrictedModal.bind(this)),
                    d.ActionHandler.on(d.ACTION.MODALS.TOGGLE_INVALID_ARR_MODAL, this.toggleInvalidArrModal.bind(this)),
                    d.ActionHandler.on(d.ACTION.MODALS.TOGGLE_START_OVER_MODAL, this.toggleStartOverModal.bind(this)),
                    d.ActionHandler.on(d.ACTION.MODALS.CONFIRM_START_OVER, this.confirmStartOverModal.bind(this)),
                    d.ActionHandler.on(d.ACTION.MODALS.DECLINE_START_OVER, this.declineStartOverModal.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.TEMPO_OPEN, this.openTempoScreen.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.TEMPO_CLOSE, this.closeTempoScreen.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.UPDATE_TITLE, this.updateTitle.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.UPDATE_SUBTITLE, this.updateSubtitle.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.UPDATE_ARTIST, this.updateArtist.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.UPDATE_TAGS, this.updateTags.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.TOGGLE_TOS, this.toggleTermsOfService.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.PUBLISH, this.initPreview.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.PREVIEW, this.togglePublishing.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.SET_COVER, this.setCover.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.DISCARD_COVER, this.discardCover.bind(this)),
                    d.ActionHandler.on(d.ACTION.PLAY_BTN.CLICK, this.playBtnClick.bind(this)),
                    d.ActionHandler.on(d.ACTION.HISTORY.UNDO, this.undo.bind(this)),
                    d.ActionHandler.on(d.ACTION.HISTORY.REDO, this.redo.bind(this)),
                    d.ActionHandler.on(d.ACTION.ZOOM_MENU.CLOSE, this.closeZoomMenu.bind(this)),
                    d.ActionHandler.on(d.ACTION.ZOOM_MENU.OPEN, this.openZoomMenu.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.OPEN, this.openEditSettings.bind(this)),
                    d.ActionHandler.on(d.ACTION.EDIT_SETTINGS.CLOSE, this.closeEditSettings.bind(this)),
                    d.ActionHandler.on(d.ACTION.PIANO_MENU.SHOW, this.showPianoMenu.bind(this)),
                    d.ActionHandler.on(d.ACTION.PIANO_MENU.HIDE, this.hidePianoMenu.bind(this)),
                    window.addEventListener("focus", this.onWindowFocus.bind(this)),
                    d.Event.on(d.EVT.ARRANGEMENT.SET, this.setArrangement.bind(this)),
                    d.Event.on(d.EVT.HISTORY.UNDONE, this.undone.bind(this)),
                    d.Event.on(d.EVT.HISTORY.REDONE, this.redone.bind(this)),
                    d.Event.on(d.EVT.HISTORY.SAVED, this.updateHistoryBtn.bind(this))
                }
            }, {
                key: "removeListeners",
                value: function() {}
            }, {
                key: "_blurInput",
                value: function() {
                    e("input").blur()
                }
            }]),
            t
        }()
    }
    ).call(t, n(11), n(108), n(1))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = n(0)
      , a = n(252)
      , s = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a)
      , l = function() {
        function e(t) {
            i(this, e),
            this.undoStack = [],
            this.redoStack = [],
            this.timeStamp = 0,
            this.historyLength = t
        }
        return o(e, [{
            key: "save",
            value: function(e, t) {
                this.redoStack = [];
                var n = new s.default(e,t,this.timeStamp);
                this.undoStack.push(n),
                this.timeStamp = n.timeStamp,
                this.undoStack.length > this.historyLength && this.undoStack.shift(),
                (0,
                r.Signal)(r.EVT.HISTORY.SAVED, {
                    savedEntry: n,
                    redoStack: this.redoStack,
                    undoStack: this.undoStack
                }, this)
            }
        }, {
            key: "flush",
            value: function(e) {
                this.undoStack = [new s.default(e.arrangement,{
                    evtName: r.EVT.ARRANGEMENT.LOAD
                },0)],
                this.redoStack = []
            }
        }, {
            key: "canUndo",
            value: function() {
                return this.undoStack.length > 1
            }
        }, {
            key: "canRedo",
            value: function() {
                return this.redoStack.length > 0
            }
        }, {
            key: "undo",
            value: function(e) {
                if (this.canUndo()) {
                    var t = this.undoStack.pop();
                    this.redoStack.push(t),
                    this.undoStack[this.undoStack.length - 1].applyTo(e),
                    (0,
                    r.Signal)(r.EVT.HISTORY.UNDONE, {
                        undoneEntry: t,
                        redoStack: this.redoStack,
                        undoStack: this.undoStack
                    }, this)
                }
            }
        }, {
            key: "redo",
            value: function(e) {
                if (this.canRedo()) {
                    var t = this.redoStack.pop();
                    t.applyTo(e),
                    this.undoStack.push(t),
                    (0,
                    r.Signal)(r.EVT.HISTORY.REDONE, {
                        redoneEntry: t,
                        redoStack: this.redoStack,
                        undoStack: this.undoStack
                    }, this)
                }
            }
        }]),
        e
    }();
    t.default = l
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = n(259)
      , a = n(41)
      , s = n(0)
      , l = n(70)
      , u = function() {
        function e() {
            i(this, e),
            this.playQueue = [],
            this.currentTime = 0,
            this.cursor = 0,
            this._isPlaying = !1,
            this.needsUpdate = !1
        }
        return o(e, [{
            key: "updatePlayQueue",
            value: function(e, t) {
                this.arrangement = e,
                this.needsUpdate = !0,
                t.lazy ? console.log("Play Que Updated: Lazily") : this._updatePlayQueue()
            }
        }, {
            key: "_updatePlayQueue",
            value: function() {
                this.playQueue = (0,
                a.Arrangement2List)(this.arrangement);
                var e = this.arrangement.getMeasureCount() - 1
                  , t = this.arrangement.getMeasureGlobalBeat(e) + this.arrangement.getBeats(e);
                this.playQueue.push({
                    onTime: (0,
                    a.beatsToSeconds)(t, this.arrangement.getTempo()),
                    notes: []
                }),
                console.log("Play Que Updated: Explicit"),
                this.needsUpdate = !1
            }
        }, {
            key: "initListeners",
            value: function() {}
        }, {
            key: "removeListeners",
            value: function() {}
        }, {
            key: "updateCurrentTime",
            value: function(e) {
                this.currentTime = e
            }
        }, {
            key: "seek",
            value: function(e) {
                var t = (0,
                l.bRangeSearch)(this.playQueue, e, function(t) {
                    return t.onTime - e
                });
                this.cursor = this.playQueue[t[0]].onTime < e ? t[1] : t[0],
                this.currentTime = e
            }
        }, {
            key: "play",
            value: function(e) {
                this.needsUpdate && this._updatePlayQueue(),
                this.seek(null != e ? e : this.currentTime),
                this._isPlaying = !0
            }
        }, {
            key: "playNoteInterval",
            value: function(e, t) {
                if (!this._isPlaying) {
                    this.needsUpdate && this._updatePlayQueue();
                    var n = t - e;
                    if (e > t) {
                        var i = t;
                        t = e,
                        e = i
                    }
                    n * this.direction < 0 && (this.prevPlayedNoteGroup = null);
                    for (var o = (0,
                    l.findFirstGreaterThanOrEqualTo)(this.playQueue, t, function(e, t) {
                        return e.onTime - t
                    }), r = o - 1; r >= 0 && this.playQueue[r] && this.playQueue[r].onTime >= e; )
                        this.prevPlayedNoteGroup != r && (this.playNoteGroup(this.playQueue[r]),
                        this.prevPlayedNoteGroup = r),
                        r--;
                    this.direction = n
                }
            }
        }, {
            key: "pause",
            value: function() {
                this._isPlaying = !1,
                (0,
                s.Signal)(s.EVT.PLAYER.PAUSED, {}, this)
            }
        }, {
            key: "playNoteGroup",
            value: function(e) {
                var t = e.offTime - e.onTime || 1;
                for (var n in e.notes)
                    r.Player.play(e.notes[n].pitch, e.notes[n].velocity, t);
                (0,
                s.Signal)(s.EVT.NOTE.DID_PLAY, {
                    noteGroup: e,
                    duration: t
                }, this)
            }
        }, {
            key: "update",
            value: function(e) {
                this._isPlaying && this.progress(e)
            }
        }, {
            key: "progress",
            value: function(e) {
                if (this.cursor >= this.playQueue.length)
                    return this._isPlaying = !1,
                    (0,
                    s.Signal)(s.EVT.PLAYER.PAUSED, {}, this),
                    void (0,
                    s.Signal)(s.EVT.PLAYER.ENDED, {}, this);
                for (; this.cursor < this.playQueue.length && this.playQueue[this.cursor].onTime <= this.currentTime + e; )
                    this.playNoteGroup(this.playQueue[this.cursor]),
                    this.cursor++;
                this.currentTime += e,
                (0,
                s.Signal)(s.EVT.PLAYER.TICKED, {
                    currentTime: this.currentTime
                }, this)
            }
        }, {
            key: "isPlaying",
            get: function() {
                return this._isPlaying
            }
        }]),
        e
    }();
    t.default = u
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(t, n, i, a, s) {
            function l(o) {
                e.post("/s/js-log", {
                    error_message: t,
                    file: n || "",
                    url: window.location.href,
                    line_number: i || "",
                    col_number: a || "",
                    stack: o || "",
                    ua: navigator.userAgent
                })
            }
            try {
                window.errorSentToSmule || /googlebot/i.test(navigator.userAgent) || (window.errorSentToSmule = !0,
                s ? o.default.fromError(s, {
                    offline: !0
                }).then(function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(e[n].toString());
                    l(t.join("\n"))
                }).catch(function(e) {
                    l(e.message)
                }) : l())
            } catch (e) {
                r("Failed to send error: ", t, n, i, e)
            }
            return !1
        }
        ;
        var i = n(109)
          , o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i);
        window.errorSentToSmule = !1;
        var r = function() {
            "undefined" != typeof console && console && console.log && console.log.apply && console.log.apply(console, arguments)
        }
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    function i() {
        var e = null
          , t = document.createElement("canvas");
        try {
            e = t.getContext("webgl") || t.getContext("experimental-webgl")
        } catch (e) {}
        return e || (e = null),
        !!e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.checkWebGLSupport = i
}
, , , , , function(e, t, n) {
    "use strict";
    (function(e, i) {
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
          , a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , s = n(4)
          , l = n(52)
          , u = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l)
          , c = function() {
            function t(e, n, i, r) {
                o(this, t),
                this.r = n,
                this.c = e,
                this.viewConfig = r,
                this.arrMan = i,
                this.state = {
                    visible: !1,
                    minimapTween: null
                }
            }
            return a(t, [{
                key: "_toggleUI",
                value: function(e) {
                    e ? (this.r.pegMap.visible = !0,
                    this.r.pegMap.alpha = 1,
                    this.r.measureLinesContainer.visible = !0,
                    this.r.measureBgContainer.visible = !0) : (this.r.pegMap.visible = !1,
                    this.r.pegMap.alpha = 0,
                    this.r.measureLinesContainer.visible = !1,
                    this.r.measureBgContainer.visible = !1,
                    this.backdrop = this.backdrop || this._createMinimapBackdrop())
                }
            }, {
                key: "_createMinimapBackdrop",
                value: function() {
                    var e = u.default.get();
                    return e.beginFill(this.viewConfig.minimapConfig.backdropColor),
                    e.drawRect(0, 0, this.c.w, this.c.h),
                    e.alpha = this.viewConfig.minimapConfig.backdropAlpha,
                    e
                }
            }, {
                key: "_moveMeasure",
                value: function(e, t) {
                    null != e.position.srcY && (e.position.y = e.position.srcY * (1 - t) + e.position.targetY * t)
                }
            }, {
                key: "animateOpen",
                value: function(t, n, o, a) {
                    var l = this;
                    if (!this.state.visible) {
                        this.state.visible = !0,
                        this._toggleUI(!1);
                        var u = this.viewConfig.minimapConfig.measureWidth
                          , c = this.viewConfig.minimapConfig.minimapPadding
                          , h = u - 2 * c
                          , d = h / s.config.availablePitches
                          , p = new e.Point(this.c.x + (this.c.w - u) / 2 - s.config.sidebarWidth,0)
                          , f = this.viewConfig.minimapConfig.gridHeight
                          , m = this.c.zoomScale * this.viewConfig.gridHeight
                          , y = this.r.measureGraphics;
                        this.state = r(this.state, {
                            oldCamY: this.c.y,
                            currentKeySig: n,
                            chromaticMode: o,
                            miniMapFrame: p
                        }),
                        this.backdrop = this._createMinimapBackdrop(),
                        a.addChild(this.backdrop);
                        for (var g = 0, v = this.c.y, b = v, E = 0; E < y.length; E++) {
                            var T = y[E];
                            if (T.position.srcY = T.position.y,
                            g -= this.arrMan.arrangement.getBeats(E) * f,
                            T.position.targetY = g,
                            T.showMinimapOverLay(this.viewConfig, p),
                            T.dimOffscreenNotes(),
                            t == E) {
                                var S = (-T.position.srcY - v) * f / m;
                                b = -T.position.targetY - S
                            }
                        }
                        var _ = {
                            t: 0
                        }
                          , w = {}
                          , O = {};
                        this.state.minimapTween = new i.Tween(_).to({
                            t: 1
                        }, 400).easing(i.Easing.Exponential.Out).onUpdate(function() {
                            this.state.beatHeight = m * (1 - _.t) + f * _.t;
                            for (var e = 0; e < y.length; e++) {
                                this._moveMeasure(y[e], _.t);
                                for (var t = 0; t < y[e].notes.length; t++) {
                                    var i = y[e].notes[t];
                                    i.enableMinimapTexture(),
                                    w[i.col] || (w[i.col] = ColPitchMap.colToX(i.col, n, o, this.viewConfig.gridWidth)),
                                    O[i.col] || (O[i.col] = p.x + c + i.col * d),
                                    i.scale.set(.25 * _.t + (1 - _.t)),
                                    i.position.x = w[i.col] * (1 - _.t) + O[i.col] * _.t,
                                    i.position.y = (y[e].beats - i.localBeat) * this.state.beatHeight
                                }
                            }
                            this.c.panToY(v * (1 - _.t) + b * _.t, {
                                noPanAndPlay: !0,
                                noKeySigAnimation: !0
                            })
                        }
                        .bind(this));
                        var k = {
                            t: 0
                        }
                          , C = new i.Tween(k).to({
                            t: 1
                        }, 400).easing(i.Easing.Exponential.Out).onUpdate(function() {
                            for (var e = 0; e < y.length; e++)
                                y[e].setOverLayAlpha(k.t, l.viewConfig.minimapConfig)
                        });
                        this.state.minimapTween.chain(C),
                        this.state.minimapTween.start()
                    }
                }
            }, {
                key: "animateClose",
                value: function(e) {
                    var t = this;
                    if (this.state.visible) {
                        var n = this.state.oldCamY
                          , o = this.state.currentKeySig
                          , r = this.state.miniMapFrame
                          , a = this.state.chromaticMode
                          , l = this.c.y
                          , u = this.viewConfig.minimapConfig.measureWidth
                          , c = this.viewConfig.minimapConfig.minimapPadding
                          , h = u - 2 * c
                          , d = this.viewConfig.minimapConfig.gridHeight
                          , p = h / s.config.availablePitches
                          , f = this.c.zoomScale * this.viewConfig.gridHeight
                          , m = this.r.measureGraphics;
                        e.removeChild(this.backdrop),
                        this.minimapTween && (this.minimapTween.stop(),
                        this.minimapTween = null);
                        for (var y = 0; y < m.length; y++) {
                            var g = m[y].position.srcY;
                            m[y].position.srcY = m[y].position.y,
                            m[y].position.targetY = g
                        }
                        var v = {
                            t: 0
                        };
                        this.state.minimapTween = new i.Tween(v).to({
                            t: 1
                        }, 100).easing(i.Easing.Exponential.Out).onUpdate(function() {
                            for (var e = 0; e < m.length; e++)
                                m[e].setOverLayAlpha(1 - v.t, t.viewConfig.minimapConfig)
                        }).onComplete(function() {
                            for (var e = 0; e < m.length; e++)
                                m[e].hideMinimapOverLay()
                        });
                        var b = {
                            t: 0
                        }
                          , E = {}
                          , T = {}
                          , S = new i.Tween(b).to({
                            t: 1
                        }, 400).easing(i.Easing.Exponential.Out).onUpdate(function() {
                            t.state.beatHeight = f * b.t + d * (1 - b.t);
                            for (var e = 0; e < m.length; e++) {
                                t._moveMeasure(m[e], b.t);
                                for (var i = 0; i < m[e].notes.length; i++) {
                                    var s = m[e].notes[i];
                                    E[s.col] || (E[s.col] = r.x + c + s.col * p),
                                    T[s.col] || (T[s.col] = ColPitchMap.colToX(s.col, o, a, t.viewConfig.gridWidth)),
                                    s.scale.set(.5 * b.t + .25 * (1 - b.t)),
                                    s.position.x = T[s.col] * b.t + E[s.col] * (1 - b.t),
                                    s.position.y = (m[e].beats - s.localBeat) * t.state.beatHeight
                                }
                            }
                            t.c.panToY(l * (1 - b.t) + n * b.t, {
                                noPanAndPlay: !0,
                                noKeySigAnimation: !0
                            })
                        }).onComplete(function() {
                            t.r.pegMap.visible = !0;
                            for (var e = 0; e < m.length; e++) {
                                m[e].notes.length > 0 && m[e].showOffscreenNotes();
                                for (var n = 0; n < m[e].notes.length; n++)
                                    m[e].notes[n].disableMinimapTexture(),
                                    m[e].notes[n].scale.set(.5)
                            }
                            w.start()
                        })
                          , _ = {
                            t: 0
                        }
                          , w = new i.Tween(_).to({
                            t: 1
                        }, 100).onUpdate(function() {
                            t.r.pegMap.alpha = _.t
                        }).onComplete(function() {
                            t._toggleUI(!0),
                            t.state.minimapTween = null,
                            t.state.visible = !1,
                            t.r.onScreenMeasures = [],
                            t.c.pan(0, 0, {
                                noPayAndPlay: !0,
                                noKeySigAnimation: !0
                            }),
                            t.r.loadMeasureGraphics(o, a, t.arrMan.arrangement)
                        });
                        this.state.minimapTween.chain(S),
                        this.state.minimapTween.start()
                    }
                }
            }, {
                key: "visible",
                get: function() {
                    return this.state.visible
                }
            }, {
                key: "beatHeight",
                get: function() {
                    return this.state.beatHeight
                }
            }]),
            t
        }();
        t.default = c
    }
    ).call(t, n(7), n(16))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function r(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EditCam = void 0;
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
          , s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            if (void 0 !== a)
                return a.call(i)
        }
          , u = n(4)
          , c = (n(22),
        n(0))
          , h = n(111)
          , d = n(30)
          , p = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(d);
        t.EditCam = function(t) {
            function n(e, t, r, a, s, l) {
                i(this, n);
                var c = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, u.ID.EDIT_VIEW_CAMERA, e, r, a, {
                    xZero: u.config.minimap.width,
                    yZero: s.hitLineY
                }, s));
                return c.zoomScale = t,
                c.arrMan = l,
                c
            }
            return r(n, t),
            s(n, [{
                key: "updateCtx",
                value: function(e) {
                    this.zoom(e.zoomScale, {
                        noPan: !0
                    }),
                    this.panToY(e.y, {
                        noPanAndPlay: !0,
                        noKeySigAnimation: !0
                    })
                }
            }, {
                key: "pan",
                value: function(e, t, i) {
                    l(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "pan", this).call(this, e, t),
                    (0,
                    c.Signal)(c.EVT.CAMERA.PANNED, {
                        x: this.x,
                        y: this.y,
                        prevX: this.prevX,
                        prevY: this.prevY,
                        context: this,
                        opt: i || {}
                    }, this)
                }
            }, {
                key: "updateBounds",
                value: function(e, t) {
                    var n = p.default.getBound(e, t) * this.viewConfig.gridWidth;
                    this.camOriginbounds = {
                        right: n - window.innerWidth + u.config.sidebarWidth
                    }
                }
            }, {
                key: "setBounds",
                value: function(e) {
                    this.camOriginbounds = e
                }
            }, {
                key: "getBounds",
                value: function() {
                    return this.camOriginbounds
                }
            }, {
                key: "screenPosToGlobal",
                value: function(e) {
                    return {
                        x: e.x + this.x,
                        y: -this.y - (this.h - e.y)
                    }
                }
            }, {
                key: "clampX",
                value: function(e) {
                    return Math.max(0, Math.min(this.camOriginbounds.right, e))
                }
            }, {
                key: "panToX",
                value: function(e, t) {
                    l(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "panToX", this).call(this, e),
                    (0,
                    c.Signal)(c.EVT.CAMERA.PANNED, {
                        x: this.x,
                        y: this.y,
                        prevX: this.prevX,
                        prevY: this.prevY,
                        context: this,
                        opt: t || {}
                    }, this)
                }
            }, {
                key: "panToY",
                value: function(e, t) {
                    l(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "panToY", this).call(this, e),
                    (0,
                    c.Signal)(c.EVT.CAMERA.PANNED, {
                        x: this.x,
                        y: this.y,
                        prevX: this.prevX,
                        prevY: this.prevY,
                        context: this,
                        opt: t || {}
                    }, this)
                }
            }, {
                key: "zoom",
                value: function(e, t) {
                    t && !t.noPan && this.panToY(this.y * e / this.zoomScale, t),
                    this.zoomScale = Math.round(1e3 * e) / 1e3
                }
            }, {
                key: "animateZoom",
                value: function(t, n, i, o) {
                    if (!this.zoomTween) {
                        var r = this.viewConfig.gridHeight
                          , s = t / this.zoomScale
                          , l = {
                            t: 1
                        }
                          , u = {
                            t: s
                        }
                          , c = l.t
                          , h = function() {
                            this.zoomTween = null,
                            n.pegMap.gridHeight = r,
                            this.zoom(t, {
                                noPan: !0
                            }),
                            i && i()
                        }
                        .bind(this)
                          , o = a({
                            noPanAndPlay: !0
                        }, o)
                          , d = o.duration || 500;
                        this.zoomTween = new e.Tween(l).to(u, d).onUpdate(function() {
                            var e = l.t / c;
                            n.scaleMeasureVertical(e),
                            n.pegMap.gridHeight *= e,
                            this.panToY(this.y * e, o),
                            c = l.t
                        }
                        .bind(this)).onStop(h).onComplete(h).start()
                    }
                }
            }, {
                key: "getCurrentMeasureAndBeat",
                value: function() {
                    return this.arrMan.arrangement.globalBeatToLocal(this.y / this.viewConfig.gridHeight / this.zoomScale)
                }
            }, {
                key: "getNextMeasureAndBeat",
                value: function() {
                    var e = this.getCurrentMeasureAndBeat()
                      , t = e.measureIdx
                      , n = 1 / this.zoomScale * Math.round(this.zoomScale * e.localBeat)
                      , i = this.arrMan.arrangement.timeSig.numerator;
                    return n >= i && (t += Math.floor(n / i),
                    n %= i),
                    {
                        localBeat: n,
                        measureIdx: t
                    }
                }
            }, {
                key: "tweenToBeat",
                value: function(t, n) {
                    var i = this
                      , o = {
                        y: this.y
                    };
                    this.tweenToNextM && this.tweenToNextM.stop();
                    var r = function() {
                        this.tweenToNextM = null,
                        n()
                    }
                    .bind(this);
                    this.tweenToNextM = new e.Tween(o).to({
                        y: t * this.zoomScale * this.viewConfig.gridHeight
                    }, 200).onUpdate(function() {
                        this.panToY(o.y, {
                            noPanAndPlay: !0
                        })
                    }
                    .bind(this)).onStop(function() {
                        i.tweenToNextM = null
                    }).onComplete(r).start()
                }
            }, {
                key: "tweenToNextNote",
                value: function() {
                    this.noteTween && this.noteTween.stop();
                    var t = this.viewConfig.gridHeight
                      , n = (Math.round(this.y / t) + 1) * t
                      , i = {
                        y: this.y
                    };
                    this.noteTween = new e.Tween(i).to({
                        y: n
                    }, 500).easing(e.Easing.Exponential.Out).onUpdate(function() {
                        this.panToY(i.y, {
                            silent: !0
                        })
                    }
                    .bind(this)).onStop(function() {
                        this.panToY(n, {
                            silent: !0
                        }),
                        this.noteTween = null
                    }
                    .bind(this)).onComplete(function() {
                        this.panToY(n, {
                            silent: !0
                        }),
                        this.noteTween = null
                    }
                    .bind(this)).start()
                }
            }, {
                key: "stopAnimations",
                value: function() {
                    this.noteTween && this.noteTween.stop()
                }
            }, {
                key: "zoomIn",
                value: function(e, t, n) {
                    if (8 != this.zoomScale && !this.zoomTween) {
                        var i = Math.min(2 * this.zoomScale, 8);
                        return (0,
                        c.Signal)(c.EVT.CAMERA.ZOOM, {}),
                        t.updateMsg({
                            msg: "1 / " + 4 * i + " Zoom"
                        }),
                        this.animateZoom(i, e, n, {
                            noKeySigAnimation: !0
                        }),
                        !0
                    }
                    return !1
                }
            }, {
                key: "zoomOut",
                value: function(e, t, n) {
                    if (1 != this.zoomScale && !this.zoomTween) {
                        var i = Math.max(this.zoomScale / 2, 1);
                        return (0,
                        c.Signal)(c.EVT.CAMERA.ZOOM, {}),
                        t.updateMsg({
                            msg: "1 / " + 4 * i + " Zoom"
                        }),
                        this.animateZoom(i, e, n, {
                            noKeySigAnimation: !0
                        }),
                        !0
                    }
                    return 1 == this.zoomScale && ((0,
                    c.Dispatch)(c.ACTION.VIEW.CHANGE, {
                        viewId: u.ID.MEASURE_VIEW
                    }),
                    !0)
                }
            }]),
            n
        }(h.BaseCamera)
    }
    ).call(t, n(16))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
          , a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , s = n(261)
          , l = i(s)
          , u = n(4)
          , c = n(22)
          , h = n(0)
          , d = n(29)
          , p = i(d)
          , f = n(30)
          , m = i(f)
          , y = n(122)
          , g = n(199)
          , v = i(g)
          , b = function() {
            function t(e, n, i, r, a) {
                o(this, t),
                this.composerUIController = r,
                this.viewConfig = n,
                this.arrMan = e,
                this.arrPlayer = a,
                window.edit = this,
                this.mode = null,
                this.modeData = {},
                this.state = {
                    chromaticMode: !1,
                    currentMeasureIdx: 0,
                    currentKeySig: this.arrMan.arrangement.getKeySig(0)
                },
                this.view = new l.default(this.viewConfig,i,this.state,this.arrMan,this.arrPlayer),
                this.camera = this.view.camera,
                this.renderer = this.view.renderer,
                this.hud = this.view.hud,
                this.keyboard = this.view.keyboard,
                this.toastMsg = this.view.toastMsg,
                this.keySigIndicator = this.view.keySigIndicator,
                this.interaction = this.view.interactionHandler,
                this.minimap = new v.default(this.camera,this.renderer,this.arrMan,n),
                window.editController = this,
                window.renderer = this.renderer,
                window.player = this.arrPlayer,
                window.editCam = this.camera,
                window.editHud = this.view.hud,
                this.updateLastNotePos(),
                this.keyboard.render(this.state.currentKeySig, this.state.chromaticMode),
                this.camera.pan(-this.viewConfig.gridWidth * (2 * (this.arrMan.arrangement.keySig.chromaticMode ? 12 : 7) - 2), 0, {
                    noPanAndPlay: !0
                }),
                this.keyboard.onCameraPan({
                    x: this.camera.x
                })
            }
            return a(t, [{
                key: "updateLastNotePos",
                value: function() {
                    this.lastBeatY = this.arrMan.arrangement.getLastNoteBeat() * this.camera.getBeatHeight()
                }
            }, {
                key: "update",
                value: function(e) {
                    this.interaction.update(e),
                    this.keyboard.update(e)
                }
            }, {
                key: "setState",
                value: function(e) {
                    r(this.state, e)
                }
            }, {
                key: "cameraPinchZoom",
                value: function(e) {
                    this.cameraZoomAnimationHandle && this.cameraZoomAnimationHandle.stop();
                    var t = this.camera.zoomScale + Math.round(1e3 * (0,
                    c.pinchDeltaToZoomScaleDelta)(this.camera.zoomScale, e.dy)) / 1e3;
                    if ((t = Math.max(.5, Math.min(8, t))) < .7)
                        this.camera.zoom(1, {
                            silent: !0
                        }),
                        (0,
                        h.Dispatch)(h.ACTION.VIEW.CHANGE, {
                            viewId: u.ID.MEASURE_VIEW,
                            targetContext: {
                                camera: {
                                    zoomScale: 1
                                }
                            }
                        });
                    else {
                        this.keySigIndicator.lock();
                        var n = (0,
                        c.zoomScaleChanged)(t);
                        n && this.toastMsg.updateMsg({
                            msg: "1 / " + 4 * n + " Zoom"
                        }),
                        this.camera.zoom(t, {
                            silent: !0
                        }),
                        this.renderer.handleContinuousZoom(this.state.currentKeySig, this.state.chromaticMode, this.arrMan.arrangement),
                        this.keySigIndicator.unlock()
                    }
                }
            }, {
                key: "cameraZoomToNearest",
                value: function() {
                    var t = this
                      , n = (0,
                    c.getNearestZoomScale)(this.camera.zoomScale)
                      , i = 500 * Math.abs(Math.log2(n / this.camera.zoomScale));
                    if (!this.cameraZoomAnimationHandle) {
                        var o = {
                            zoomScale: this.camera.zoomScale
                        }
                          , r = {
                            zoomScale: n
                        };
                        this.keySigIndicator.lock(),
                        this.cameraZoomAnimationHandle = new e.Tween(o).to(r, i).onUpdate(function() {
                            t.camera.zoom(o.zoomScale, {
                                silent: !0
                            }),
                            t.renderer.handleContinuousZoom(t.state.currentKeySig, t.state.chromaticMode, t.arrMan.arrangement)
                        }).onStop(function() {
                            t.cameraZoomAnimationHandle = null,
                            t.keySigIndicator.unlock()
                        }).onComplete(function() {
                            t.cameraZoomAnimationHandle = null,
                            t.renderer.handleZoom(t.state.currentKeySig, t.state.chromaticMode, t.arrMan.arrangement),
                            t.renderer.pegMap.gridHeight = t.viewConfig.gridHeight,
                            t.camera.zoom(n, {
                                noPan: !0
                            });
                            var e = (0,
                            c.zoomScaleChanged)(n);
                            e && t.toastMsg.updateMsg({
                                msg: "1 / " + 4 * e + " Zoom"
                            }),
                            t.keySigIndicator.unlock()
                        }).start()
                    }
                }
            }, {
                key: "postCameraZoom",
                value: function() {
                    this.keySigIndicator.unlock(),
                    this.refreshRenderer(),
                    this.updateLastNotePos(),
                    this.updatePegboardPublishBtn(),
                    this.updatePlayBtn(),
                    this.composerUIController.updateCamera(this.camera.zoomScale)
                }
            }, {
                key: "cameraZoomIn",
                value: function() {
                    this.keySigIndicator.lock(),
                    this.camera.zoomIn(this.renderer, this.toastMsg, this.postCameraZoom.bind(this))
                }
            }, {
                key: "cameraZoomOut",
                value: function() {
                    this.keySigIndicator.lock(),
                    this.camera.zoomOut(this.renderer, this.toastMsg, this.postCameraZoom.bind(this))
                }
            }, {
                key: "cameraAnimateZoom",
                value: function(e) {
                    this.keySigIndicator.lock(),
                    this.camera.animateZoom(e.zoomScale, this.renderer, this.postCameraZoom.bind(this), {
                        noKeySigAnimation: !0
                    })
                }
            }, {
                key: "onCameraPan",
                value: function(e) {
                    var t = e.opt.noCull || e.opt.silent
                      , n = e.opt.noPanAndPlay || e.opt.silent
                      , i = e.opt.noKeySigAnimation
                      , o = this.minimap.visible ? this.minimap.beatHeight : this.camera.zoomScale * this.viewConfig.gridHeight
                      , r = this.arrMan.arrangement.getMeasureIdx(e.y / o)
                      , a = this.arrMan.arrangement.getKeySig(r)
                      , s = r != this.state.currentMeasureIdx
                      , l = this.state.currentKeySig.sharps !== a.sharps || this.state.currentKeySig.minor !== a.minor || this.state.currentKeySig.globalTime !== a.globalTime;
                    if (t || this.renderer.cull(a, this.state.chromaticMode, this.arrMan.arrangement),
                    s && this.keySigIndicator.updateKeySig(r),
                    l && !i) {
                        var c = a.minor ? u.keySigMap.sharpsToKey.minor : u.keySigMap.sharpsToKey.major;
                        this.toastMsg.updateMsg({
                            msg: c[a.sharps] + (a.minor ? " Minor" : " Major")
                        }),
                        this.renderer.animateKeySig(this.state.chromaticMode, a, this.keyboard, this.arrMan.arrangement, {
                            prevKeySig: this.state.currentKeySig,
                            prevChromaticMode: this.state.chromaticMode
                        })
                    }
                    if ((e.y - this.lastBeatY) * (e.prevY - this.lastBeatY) <= 0 && !this.arrPlayer.isPlaying && (this.updatePegboardPublishBtn(),
                    this.composerUIController.updatePlayBtn((0,
                    p.default)({
                        jump2Start: e.y >= this.lastBeatY && e.y > 0
                    }))),
                    e.y != e.prevY && !n) {
                        var h = this.camera.pxPerS(this.arrMan.arrangement.bpm);
                        this.arrPlayer.playNoteInterval(e.prevY / h, e.y / h)
                    }
                    this.keyboard.onCameraPan(e),
                    this.setState({
                        currentMeasureIdx: r,
                        currentKeySig: a
                    })
                }
            }, {
                key: "pegBoardClick",
                value: function(e) {
                    var t = this;
                    if (0 != e.length) {
                        for (var n = [], i = [], o = [], r = {}, a = {}, s = 0; s < e.length; s++)
                            if (!(e[s].y > 0)) {
                                var l = Math.round(Math.abs(e[s].y) / this.viewConfig.gridHeight)
                                  , u = m.default.getColumn(e[s].x, this.state.currentKeySig, this.state.chromaticMode, this.viewConfig.gridWidth).col
                                  , c = l / this.camera.zoomScale
                                  , h = this.arrMan.arrangement.globalBeatToLocal(c);
                                n.push({
                                    pitch: m.default.colToPitch(u),
                                    velocity: 80
                                }),
                                i.push(h.measureIdx),
                                r[h.measureIdx] = !0,
                                a[c] = !0,
                                o.push(h.localBeat)
                            }
                        if (0 != n.length) {
                            this.arrMan.batchNoteEdit(n, i, o, function() {
                                for (var e in r)
                                    t.renderer.renderMeasureUnit(parseInt(e), t.state.currentKeySig, t.state.chromaticMode, t.arrMan.arrangement);
                                t.renderer.cull(t.state.currentKeySig, t.state.chromaticMode, t.arrMan.arrangement)
                            });
                            for (var c in a)
                                this.playArrangementNoteGroup(parseFloat(c));
                            this.updateLastNotePos(),
                            this.updatePegboardPublishBtn(),
                            this.updatePlayBtn(),
                            this.composerUIController.updateHistoryBtn()
                        }
                    }
                }
            }, {
                key: "noteClick",
                value: function(e) {
                    var t = e.columns.map(function(e) {
                        return {
                            pitch: m.default.colToPitch(e),
                            velocity: 80
                        }
                    }
                    .bind(this));
                    this.arrMan.editNotesHandler(r(e, {
                        notes: t,
                        zoomLevel: this.camera.zoomScale
                    })),
                    this.renderer.renderMeasureUnit(e.measureIdx, this.state.currentKeySig, this.state.chromaticMode, this.arrMan.arrangement),
                    this.renderer.cull(this.state.currentKeySig, this.state.chromaticMode, this.arrMan.arrangement),
                    this.interaction.enterNullGesture(),
                    this.updateLastNotePos(),
                    this.updatePegboardPublishBtn(),
                    this.updatePlayBtn(),
                    this.composerUIController.updateHistoryBtn()
                }
            }, {
                key: "playArrangementNoteGroup",
                value: function(e) {
                    var t = this.arrMan.arrangement.globalBeatToLocal(e)
                      , n = this.arrMan.arrangement.getMeasure(t.measureIdx).getNoteGroup(t.localBeat) || {
                        notes: {}
                    };
                    this.arrPlayer.playNoteGroup(n)
                }
            }, {
                key: "notePlay",
                value: function(e) {
                    var t, n = this.arrMan.arrangement;
                    t = e.measureIdx >= n.getMeasureCount() ? {
                        notes: {}
                    } : n.getMeasure(e.measureIdx).getNoteGroup(e.localBeat) || {
                        notes: {}
                    };
                    for (var i = Object.keys(t.notes), o = i.map(function(e) {
                        return t.notes[e]
                    }), r = [], a = [], s = 0; s < e.columns.length; s++) {
                        var l = m.default.colToPitch(e.columns[s]);
                        r.push({
                            pitch: l,
                            velocity: 80
                        }),
                        a.push(l)
                    }
                    var u = o.concat(r).filter(function(t) {
                        return -1 === i.indexOf(t.pitch.toString()) || -1 === a.indexOf(t.pitch) || e.playAllNotes
                    })
                      , c = {
                        notes: u,
                        onTime: t.onTime,
                        offTime: t.offTime
                    };
                    this.arrPlayer.playNoteGroup(c)
                }
            }, {
                key: "postNotePlay",
                value: function(e) {
                    this.keyboard.activatePlayedKeys(e)
                }
            }, {
                key: "openRowActionMenu",
                value: function(e) {
                    var t = Math.round(Math.abs(e.y) / this.viewConfig.gridHeight)
                      , n = t / this.interaction.camera.zoomScale
                      , i = this.arrMan.arrangement.globalBeatToLocal(n)
                      , o = this.arrMan.arrangement.timeSig.numerator;
                    this.mode = "ROW_ACTION",
                    this.modeData[this.mode] = {
                        globalBeat: n,
                        measureIdx: i.measureIdx,
                        localBeat: i.localBeat,
                        row: t
                    },
                    this.composerUIController.toggleRowActionMenu(!0),
                    this.updatePegboardPublishBtn(),
                    this.keyboard.blur(),
                    this.renderer.onRowMenuOpen(o, i.localBeat, i.measureIdx, t)
                }
            }, {
                key: "closeRowActionMenu",
                value: function() {
                    this.modeData[this.mode] = {},
                    this.mode = null,
                    this.composerUIController.toggleRowActionMenu(!1),
                    this.updatePegboardPublishBtn(),
                    this.keyboard.focus(),
                    this.interaction.enterNullGesture(),
                    this.renderer.onRowMenuClose(),
                    this.refreshRenderer()
                }
            }, {
                key: "addRow",
                value: function() {
                    var e = this
                      , t = this.modeData[this.mode]
                      , n = this.arrMan.arrangement.timeSig.numerator;
                    this.renderer.animateAddRow(n, t.localBeat, t.measureIdx, t.row, function() {
                        e.arrMan.rowAddHandler({
                            startBeat: t.globalBeat,
                            deltaBeat: 1 / e.camera.zoomScale,
                            zoomLevel: e.camera.zoomScale
                        }),
                        e.refreshRenderer(),
                        e.updateLastNotePos(),
                        e.updatePegboardPublishBtn(),
                        e.updatePlayBtn(),
                        e.composerUIController.updateHistoryBtn()
                    })
                }
            }, {
                key: "removeRow",
                value: function() {
                    var e = this
                      , t = this.modeData[this.mode]
                      , n = this.arrMan.arrangement.timeSig.numerator;
                    this.renderer.animateRemoveRow(n, t.localBeat, t.measureIdx, t.row, function() {
                        e.arrMan.rowRemoveHandler({
                            startBeat: t.globalBeat,
                            deltaBeat: -1 / e.camera.zoomScale,
                            zoomLevel: e.camera.zoomScale
                        }),
                        e.refreshRenderer(),
                        e.updateLastNotePos(),
                        e.updatePegboardPublishBtn(),
                        e.updatePlayBtn(),
                        e.composerUIController.updateHistoryBtn()
                    })
                }
            }, {
                key: "updatePegboardPublishBtn",
                value: function() {
                    var e = this.composerUIController.getState().pegboardPublishBtn
                      , t = this.camera.y >= this.lastBeatY;
                    e = e.set("visible", t),
                    this.composerUIController.updatePegboardPublishBtn(e)
                }
            }, {
                key: "updatePlayBtn",
                value: function() {
                    var e = this.composerUIController.getState().sideBar.playBtn
                      , t = this.camera.y >= this.lastBeatY && this.camera.y > 0;
                    e.jump2Start != t && (e = e.set("jump2Start", t));
                    var n = this.arrMan.arrangement.isEmpty();
                    e.disabled != n && (e = e.set("disabled", n)),
                    this.composerUIController.updatePlayBtn(e)
                }
            }, {
                key: "refreshRenderer",
                value: function() {
                    this.renderer.loadMeasureGraphics(this.state.currentKeySig, this.state.chromaticMode, this.arrMan.arrangement)
                }
            }, {
                key: "openKeySigScreen",
                value: function() {
                    this.composerUIController.toggleKeySigScreen(!0, this.state.currentKeySig, this.state.chromaticMode)
                }
            }, {
                key: "closeKeySigScreen",
                value: function(e) {
                    var t = r({}, e.keySig);
                    this.setState({
                        currentKeySig: t
                    }),
                    this.arrMan.updateKeySigHandler({
                        measureIdx: this.state.currentMeasureIdx,
                        keySig: t
                    }),
                    this.keySigIndicator.onKeySigUpdated(this.state.currentMeasureIdx),
                    this.composerUIController.toggleKeySigScreen(!1, e.keySig, this.state.chromaticMode),
                    this.keyboard.render(this.state.currentKeySig, this.state.chromaticMode),
                    this.refreshRenderer()
                }
            }, {
                key: "openChromatic",
                value: function() {
                    if (!this.state.chromaticMode) {
                        var e = this.state.chromaticMode;
                        this.state.chromaticMode = !0,
                        this.renderer.animateKeySig(this.state.chromaticMode, this.state.currentKeySig, this.keyboard, this.arrMan.arrangement, {
                            prevKeySig: this.state.currentKeySig,
                            prevChromaticMode: e
                        })
                    }
                }
            }, {
                key: "closeChromatic",
                value: function() {
                    if (this.state.chromaticMode) {
                        var e = this.state.chromaticMode;
                        this.state.chromaticMode = !1,
                        this.renderer.animateKeySig(this.state.chromaticMode, this.state.currentKeySig, this.keyboard, this.arrMan.arrangement, {
                            prevKeySig: this.state.currentKeySig,
                            prevChromaticMode: e
                        })
                    }
                }
            }, {
                key: "openMinimap",
                value: function() {
                    this.composerUIController.toggleSideBar(!1),
                    this.keySigIndicator.hide(),
                    this.keyboard.hide(),
                    this.minimap.animateOpen(this.state.currentMeasureIdx, this.state.currentKeySig, this.state.chromaticMode, this.view.backgroundLayer, this.arrMan.arrangement)
                }
            }, {
                key: "closeMinimap",
                value: function() {
                    this.composerUIController.toggleSideBar(!0),
                    this.keySigIndicator.show(),
                    this.keyboard.show(),
                    this.minimap.animateClose(this.view.backgroundLayer)
                }
            }, {
                key: "tweenToNextMeasure",
                value: function(e) {
                    if (e.delta) {
                        var t = this.arrMan.arrangement.globalBeatToLocal(this.camera.getCurrentBeat())
                          , n = this.arrMan.arrangement.getMeasureGlobalBeat(t.measureIdx + e.delta)
                          , i = this.arrPlayer.isPlaying;
                        i && this.keySigIndicator.lock(),
                        this.camera.tweenToBeat(n, function() {
                            if (this.keySigIndicator.unlock(),
                            i) {
                                var e = this.camera.getCurrentTime(this.arrMan.arrangement.getTempo());
                                this.arrPlayer.updatePlayQueue(this.arrMan.arrangement, {
                                    lazy: !1
                                }),
                                this.arrPlayer.seek(e)
                            } else
                                this.camera.pan(0, 0, {
                                    silent: !0
                                })
                        }
                        .bind(this))
                    }
                }
            }, {
                key: "tweenToNextNote",
                value: function() {
                    this.arrPlayer.isPlaying || this.camera.tweenToNextNote()
                }
            }, {
                key: "playerTick",
                value: function(e) {
                    this.camera.panToTime(e.currentTime, this.arrMan.arrangement.getTempo(), {
                        noPanAndPlay: !0
                    })
                }
            }, {
                key: "onPlaybackEnd",
                value: function(e) {
                    this.updatePegboardPublishBtn(),
                    this.composerUIController.updatePlayBtn((0,
                    p.default)({
                        jump2Start: !0,
                        playing: !1
                    }))
                }
            }, {
                key: "onCloseZoomMenu",
                value: function() {
                    this.composerUIController.toggleZoomMenu(!1, this.camera.zoomScale),
                    this.keyboard.focus(),
                    this.interaction.enterNullGesture()
                }
            }, {
                key: "onOpenZoomMenu",
                value: function() {
                    this.composerUIController.toggleZoomMenu(!0, this.camera.zoomScale),
                    this.keyboard.blur(),
                    this.interaction.enterZoomMenuGesture()
                }
            }, {
                key: "onPlayBtnClick",
                value: function(e, t) {
                    e.jump2Start && this.camera.panToTime(0, this.arrMan.arrangement.getTempo(), {
                        noPanAndPlay: !0
                    }),
                    t.playing ? (this.arrPlayer.play(this.camera.getCurrentTime(this.arrMan.arrangement.bpm)),
                    this.interaction.enterPlayBackPanGesture()) : (this.arrPlayer.pause(),
                    this.renderer.cull(this.state.currentKeySig, this.state.chromaticMode, this.arrMan.arrangement),
                    this.interaction.enterNullGesture(),
                    this.composerUIController.updatePlayBtn((0,
                    p.default)({
                        jump2Start: this.camera.y >= this.lastBeatY && this.camera.y > 0
                    })))
                }
            }, {
                key: "onUndone",
                value: function(e) {
                    this.refreshRenderer(),
                    this.toastMsg.updateMsg({
                        msg: e.undoneEntry.getDescription({
                            undo: !0,
                            keySigReference: this.state.currentKeySig
                        })
                    }),
                    this.keySigIndicator.updateCurrentKeySig(this.state.currentMeasureIdx),
                    this.updateLastNotePos(),
                    this.updatePegboardPublishBtn(),
                    this.updatePlayBtn()
                }
            }, {
                key: "onRedone",
                value: function(e) {
                    this.refreshRenderer(),
                    this.toastMsg.updateMsg({
                        msg: e.redoneEntry.getDescription({
                            undo: !1,
                            keySigReference: this.state.currentKeySig
                        })
                    }),
                    this.keySigIndicator.updateCurrentKeySig(this.state.currentMeasureIdx),
                    this.updateLastNotePos(),
                    this.updatePegboardPublishBtn(),
                    this.updatePlayBtn()
                }
            }, {
                key: "onConfirmStartOver",
                value: function() {
                    this.refreshRenderer()
                }
            }, {
                key: "onTempoUpdate",
                value: function(e) {
                    this.refreshRenderer()
                }
            }, {
                key: "initListeners",
                value: function() {
                    h.ActionHandler.on(h.ACTION.NOTE.CLICK, this.noteClick.bind(this)),
                    h.ActionHandler.on(h.ACTION.NOTE.PLAY, this.notePlay.bind(this)),
                    h.ActionHandler.on(h.ACTION.PEG_BOARD.CLICK, this.pegBoardClick.bind(this)),
                    h.ActionHandler.on(h.ACTION.ROW_MENU.OPEN, this.openRowActionMenu.bind(this)),
                    h.ActionHandler.on(h.ACTION.ROW_MENU.CLOSE, this.closeRowActionMenu.bind(this)),
                    h.ActionHandler.on(h.ACTION.ROW.ADD, this.addRow.bind(this)),
                    h.ActionHandler.on(h.ACTION.ROW.REMOVE, this.removeRow.bind(this)),
                    h.ActionHandler.on(h.ACTION.CAMERA.PINCH_ZOOM, this.cameraPinchZoom.bind(this)),
                    h.ActionHandler.on(h.ACTION.CAMERA.ZOOM_TO_NEAREST, this.cameraZoomToNearest.bind(this)),
                    h.ActionHandler.on(h.ACTION.CAMERA.ZOOM_IN, this.cameraZoomIn.bind(this)),
                    h.ActionHandler.on(h.ACTION.CAMERA.ZOOM_OUT, this.cameraZoomOut.bind(this)),
                    h.ActionHandler.on(h.ACTION.CAMERA.ANIMATE_ZOOM, this.cameraAnimateZoom.bind(this)),
                    h.ActionHandler.on(h.ACTION.CAMERA.TWEEN_TO_ADJ_MEASURE, this.tweenToNextMeasure.bind(this)),
                    h.ActionHandler.on(h.ACTION.CAMERA.TWEEN_TO_NEXT_NOTE, this.tweenToNextNote.bind(this)),
                    h.ActionHandler.on(h.ACTION.KEYSIG_SCREEN.OPEN, this.openKeySigScreen.bind(this)),
                    h.ActionHandler.on(h.ACTION.KEYSIG_SCREEN.CLOSE, this.closeKeySigScreen.bind(this)),
                    h.ActionHandler.on(h.ACTION.CHROMATIC.OPEN, this.openChromatic.bind(this)),
                    h.ActionHandler.on(h.ACTION.CHROMATIC.CLOSE, this.closeChromatic.bind(this)),
                    h.ActionHandler.on(h.ACTION.MINIMAP.OPEN, this.openMinimap.bind(this)),
                    h.ActionHandler.on(h.ACTION.MINIMAP.CLOSE, this.closeMinimap.bind(this)),
                    h.Event.on(h.EVT.NOTE.DID_PLAY, this.postNotePlay.bind(this)),
                    h.Event.on(h.EVT.CAMERA.PANNED, this.onCameraPan.bind(this)),
                    h.Event.on(h.EVT.PLAYER.TICKED, this.playerTick.bind(this)),
                    h.Event.on(h.EVT.PLAYER.ENDED, this.onPlaybackEnd.bind(this))
                }
            }, {
                key: "removeListeners",
                value: function() {
                    h.ActionHandler.removeEvent(h.ACTION.NOTE.CLICK),
                    h.ActionHandler.removeEvent(h.ACTION.NOTE.PLAY),
                    h.ActionHandler.removeEvent(h.ACTION.PEG_BOARD.CLICK),
                    h.ActionHandler.removeEvent(h.ACTION.ROW_MENU.OPEN),
                    h.ActionHandler.removeEvent(h.ACTION.ROW_MENU.CLOSE),
                    h.ActionHandler.removeEvent(h.ACTION.ROW.ADD),
                    h.ActionHandler.removeEvent(h.ACTION.ROW.REMOVE),
                    h.ActionHandler.removeEvent(h.ACTION.CAMERA.PINCH_ZOOM),
                    h.ActionHandler.removeEvent(h.ACTION.CAMERA.ZOOM_TO_NEAREST),
                    h.ActionHandler.removeEvent(h.ACTION.CAMERA.ZOOM_IN),
                    h.ActionHandler.removeEvent(h.ACTION.CAMERA.ZOOM_OUT),
                    h.ActionHandler.removeEvent(h.ACTION.CAMERA.ANIMATE_ZOOM),
                    h.ActionHandler.removeEvent(h.ACTION.CAMERA.TWEEN_TO_ADJ_MEASURE),
                    h.ActionHandler.removeEvent(h.ACTION.CAMERA.TWEEN_TO_NEXT_NOTE),
                    h.ActionHandler.removeEvent(h.ACTION.KEYSIG_SCREEN.OPEN),
                    h.ActionHandler.removeEvent(h.ACTION.KEYSIG_SCREEN.CLOSE),
                    h.ActionHandler.removeEvent(h.ACTION.CHROMATIC.OPEN),
                    h.ActionHandler.removeEvent(h.ACTION.CHROMATIC.CLOSE),
                    h.ActionHandler.removeEvent(h.ACTION.MINIMAP.OPEN),
                    h.ActionHandler.removeEvent(h.ACTION.MINIMAP.CLOSE),
                    h.Event.removeEvent(h.EVT.NOTE.DID_PLAY),
                    h.Event.removeEvent(h.EVT.CAMERA.PANNED),
                    h.Event.removeEvent(h.EVT.PLAYER.TICKED),
                    h.Event.removeEvent(h.EVT.PLAYER.ENDED)
                }
            }, {
                key: "generateContext",
                value: function() {
                    return new y.ViewContext(this.camera,this.viewConfig,this.interaction.getCurrentGestureID())
                }
            }, {
                key: "destroy",
                value: function() {
                    this.leave(),
                    this.keyboard.destroy(),
                    this.keySigIndicator.destroy(),
                    this.toastMsg.destroy(),
                    this.renderer.destroy(),
                    this.hud.destroy(),
                    this.interaction.destroy(),
                    this.view.destroy()
                }
            }, {
                key: "leave",
                value: function() {
                    this.removeListeners(),
                    this.keyboard.removeListeners(),
                    this.keySigIndicator.removeListeners(),
                    this.toastMsg.removeListeners(),
                    this.renderer.removeListeners(),
                    this.camera.removeListeners(),
                    this.hud.removeListeners(),
                    this.interaction.removeListeners(),
                    this.view.leave()
                }
            }, {
                key: "resume",
                value: function(e, t) {
                    this.composerUIController.attach(this),
                    this.camera.updateCtx(e),
                    this.initListeners(),
                    this.camera.initListeners(),
                    this.camera.updateBounds(this.state.currentKeySig, this.state.chromaticMode),
                    this.renderer.initListeners(),
                    this.hud.initListeners(),
                    this.interaction.initListeners(),
                    this.keyboard.initListeners(this.composerUIController.getState()),
                    this.keySigIndicator.initListeners(),
                    this.toastMsg.initListeners(),
                    this.refreshRenderer(),
                    this.updateLastNotePos(),
                    this.updatePegboardPublishBtn(),
                    this.updatePlayBtn(),
                    this.arrPlayer.updatePlayQueue(this.arrMan.arrangement, {
                        lazy: !1
                    }),
                    t && this.interaction.enter(t),
                    this.camera.pan(0, 0, {
                        noPanAndPlay: !0
                    }),
                    this.view.resume()
                }
            }]),
            t
        }();
        t.default = b
    }
    ).call(t, n(16))
}
, function(e, t, n) {
    "use strict";
    (function(e, i) {
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EditViewRenderer = void 0;
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , a = n(30)
          , s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(a)
          , l = n(211)
          , u = n(22)
          , c = n(212)
          , h = n(209);
        t.EditViewRenderer = function() {
            function t(n, i, r, a) {
                o(this, t),
                this.container = new e.Container,
                this.measureLinesContainer = new e.Container,
                this.measureBgContainer = new e.Container,
                this.viewConfig = r,
                this.camera = i,
                this.pegMap = n,
                this.arrMan = a,
                this.resetStates()
            }
            return r(t, [{
                key: "resetStates",
                value: function() {
                    this.onScreenMeasures = [],
                    this.measureGraphics = [],
                    this.measureIndicators = [],
                    this.measureLinesContainer.removeChildren(0),
                    this.measureBgContainer.removeChildren(0),
                    this.container.removeChildren(0),
                    this.pegMap.clearPegs()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.destroyMeasureUnit(),
                    this.pegMap.clearPegs(),
                    this.container.destroy()
                }
            }, {
                key: "destroyMeasureUnit",
                value: function() {
                    for (this.container.removeChildren(); this.measureGraphics && this.measureGraphics.length; )
                        this.measureGraphics.pop().destroy();
                    for (; this.measureIndicators && this.measureIndicators.length; )
                        this.measureIndicators.pop().destroy();
                    for (; this.measureBgCols && this.measureBgCols.length; )
                        this.measureBgCols.pop().destroy();
                    this.onScreenMeasures = [],
                    this.measureGraphics = [],
                    this.measureIndicators = [],
                    this.measureBgCols = []
                }
            }, {
                key: "scaleMeasureVertical",
                value: function(e) {
                    for (var t = 0; t < this.measureGraphics.length; t++) {
                        this.measureGraphics[t].measureHeight *= e,
                        this.measureGraphics[t].position.y *= e;
                        for (var n = this.measureGraphics[t].notes, i = 0; i < n.length; i++)
                            n[i].position.y = n[i].position.y * e
                    }
                    for (var t = 0; t < this.measureIndicators.length; t++)
                        this.measureIndicators[t].position.y *= e;
                    for (var t = 0; t < this.measureBgCols.length; t++) {
                        this.measureBgCols[t].position.y *= e;
                        for (var i = 0; i < this.measureBgCols[t].children.length; i++) {
                            this.measureBgCols[t].children[i].height *= e
                        }
                    }
                }
            }, {
                key: "initListeners",
                value: function() {}
            }, {
                key: "removeListeners",
                value: function() {
                    this.resetStates()
                }
            }, {
                key: "addMeasureUnit",
                value: function(e) {
                    var t = new l.MeasureBlock
                      , n = new c.MeasureIndicator({})
                      , i = new h.MeasureBackgroundColumns;
                    null == e ? (this.measureGraphics.push(t),
                    this.measureIndicators.push(n),
                    this.measureBgCols.push(i)) : (this.measureGraphics[e] = t,
                    this.measureIndicators[e] = n,
                    this.measureBgCols[e] = i)
                }
            }, {
                key: "initMeasureUnit",
                value: function(e, t) {
                    this.measureGraphics[e].init(this.camera.zoomScale, t.getBeats(e), e, this.viewConfig),
                    this.measureIndicators[e].init(),
                    this.measureBgCols[e].init(t.getKeySig(e), t.getTimeSig())
                }
            }, {
                key: "renderMeasureUnit",
                value: function(e, t, n, i) {
                    this.measureGraphics[e].draw(i, this.camera, t, n, this.viewConfig),
                    this.measureIndicators[e].draw(this.viewConfig.gridWidth),
                    this.measureBgCols[e].draw(this.camera, e, i.getKeySig(e), i.getTimeSig(), n, this.viewConfig)
                }
            }, {
                key: "emptyMeasureUnit",
                value: function(e) {
                    this.measureGraphics[e].empty(),
                    this.measureIndicators[e].empty(),
                    this.measureBgCols[e].empty()
                }
            }, {
                key: "positionMeasureUnit",
                value: function(e, t) {
                    this.measureGraphics[e].position.set(0, t),
                    this.measureIndicators[e].position.set(0, t),
                    this.measureBgCols[e].position.set(0, t)
                }
            }, {
                key: "showMeasureUnit",
                value: function(e) {
                    this.container.addChild(this.measureGraphics[e]),
                    this.measureLinesContainer.addChild(this.measureIndicators[e]),
                    this.measureBgContainer.addChild(this.measureBgCols[e])
                }
            }, {
                key: "loadMeasureGraphics",
                value: function(e, t, n) {
                    this.destroyMeasureUnit();
                    for (var i = 0, o = 0; o < n.measures.length; o++)
                        this.addMeasureUnit(o),
                        this.initMeasureUnit(o, n),
                        i -= this.measureGraphics[o].measureHeight,
                        this.positionMeasureUnit(o, i);
                    this.onScreenMeasures = [],
                    this.cull(e, t, n)
                }
            }, {
                key: "cull",
                value: function(e, t, n) {
                    for (var i = {}, o = 0; o < this.onScreenMeasures.length; o++)
                        i[this.onScreenMeasures[o].idx] = !0;
                    this.container.removeChildren(0),
                    this.measureLinesContainer.removeChildren(0),
                    this.measureBgContainer.removeChildren(0),
                    this.onScreenMeasures = [];
                    for (var r = this.measureGraphics[this.measureGraphics.length - 1]; !r || this.camera.isAbove(r); )
                        this._addEmptyMeasure(n),
                        r = this.measureGraphics[this.measureGraphics.length - 1];
                    var a = {}
                      , s = this.camera.topMeasureOnScreen(this.measureGraphics) - 1;
                    for (this.showMeasureUnit(s + 1),
                    i[s + 1] || this.renderMeasureUnit(s + 1, e, t, n),
                    this.onScreenMeasures.push({
                        graphic: this.measureGraphics[s + 1],
                        idx: s + 1
                    }),
                    a[s + 1] = !0; s >= 0 && this.camera.isInView(this.measureGraphics[s]); )
                        this.showMeasureUnit(s),
                        i[s] || this.renderMeasureUnit(s, e, t, n),
                        this.onScreenMeasures.push({
                            graphic: this.measureGraphics[s],
                            idx: s
                        }),
                        this.measureGraphics[s].setOffscreenNotes(n, e, t, this.camera, n.getMeasure(s), this.viewConfig),
                        a[s] = !0,
                        s--;
                    for (var l in i)
                        a[l] || this.emptyMeasureUnit(parseInt(l));
                    this.pegMap.cullTile(e, t)
                }
            }, {
                key: "handleZoom",
                value: function(e, t, n) {
                    for (var i = 0, o = 0; o < this.measureGraphics.length; o++)
                        this.renderMeasureUnit(o, e, t, n),
                        i -= this.measureGraphics[o].measureHeight,
                        this.positionMeasureUnit(o, i);
                    this.pegMap.gridHeight = this.viewConfig.gridHeight,
                    this.cull(e, t, n)
                }
            }, {
                key: "handleContinuousZoom",
                value: function(e, t, n) {
                    var i = 0;
                    this.onScreenMeasures = [];
                    for (var o = 0; o < this.measureGraphics.length; o++)
                        this.measureGraphics[o].init(this.camera.zoomScale, n.getBeats(o), o, this.viewConfig),
                        i -= this.measureGraphics[o].measureHeight,
                        this.positionMeasureUnit(o, i);
                    this.pegMap.gridHeight = (0,
                    u.getPegGridHeight)(this.camera.zoomScale, this.viewConfig.gridHeight),
                    this.cull(e, t, n)
                }
            }, {
                key: "animateKeySig",
                value: function(e, t, n, o, r) {
                    if (e || t) {
                        r = r || {};
                        for (var a = this.viewConfig.gridWidth, l = {
                            t: 0
                        }, u = s.default.getColumn(this.camera.x, null == r.prevKeySig ? t : r.prevKeySig, null == r.prevChromaticMode ? e : r.prevChromaticMode, a), c = this.camera.x, h = s.default.getLaneStates(t, e), d = u ? (h[u.col].normalizedX + u.offset) * a : c, p = this.camera.getBounds().right, f = h[h.length - 1], m = (f.normalizedX + f.normalizedW) * a - this.camera.w, y = s.default.getLaneStates(t, e), g = 0; g < this.onScreenMeasures.length; g++)
                            this.onScreenMeasures[g].graphic.preKeySigAnimation(o.getMeasure(this.onScreenMeasures[g].idx), this.camera.zoomScale, y, e);
                        this.pegMap.preTileKeySigAnimation(),
                        n.preKeyboardAnimation(y, t),
                        this.keySigTween && (this.keySigTween.stop(),
                        this.keySigTween = null),
                        this.keySigTween = new i.Tween(l).to({
                            t: 1
                        }, r.prevChromaticMode != e ? 800 : 400).easing(i.Easing.Exponential.Out).onUpdate(function() {
                            for (var i = l.t, s = 0; s < this.onScreenMeasures.length; s++) {
                                var u = this.onScreenMeasures[s];
                                u.graphic.drawKeySigAnimationFrame(a, y, i, e),
                                u.graphic.setOffscreenNotes(o, t, e, this.camera, o.getMeasure(u.idx), this.viewConfig)
                            }
                            e && r.prevChromaticMode || (this.pegMap.drawTileKeySigAnimationFrame(y, t, e, i),
                            this.activeRow && this.pegMap.dimRowsBelow(this.activeRow)),
                            (!e && r.prevChromaticMode || e && !r.prevChromaticMode) && this.drawMeasureBgColFrame(a, i, t, e),
                            n.drawKeyboardAnimationFrame(y, i, e),
                            this.camera.setBounds({
                                right: (1 - i) * p + i * m
                            }),
                            this.camera.panToX(c * (1 - i) + d * i, {
                                silent: !0
                            }),
                            this.activeRow && this.pegMap.dimRowsBelow(this.activeRow)
                        }
                        .bind(this)).onComplete(function() {
                            for (var i = 0; i < this.onScreenMeasures.length; i++) {
                                var a = this.onScreenMeasures[i];
                                a.graphic.postKeySigAnimation(y),
                                a.graphic.setOffscreenNotes(o, t, e, this.camera, o.getMeasure(a.idx), this.viewConfig)
                            }
                            for (var i = 0; i < this.measureBgCols.length; i++)
                                this.measureBgCols[i].postBgColAnimation(e);
                            this.pegMap.postTileKeySigAnimation(y, t, e),
                            n.postKeyboardAnimation(y),
                            this.camera.updateBounds(t, e),
                            this.activeRow && this.pegMap.dimRowsBelow(this.activeRow),
                            r.callback && r.callback()
                        }
                        .bind(this)),
                        this.keySigTween.start()
                    }
                }
            }, {
                key: "drawMeasureBgColFrame",
                value: function(e, t, n, i) {
                    for (var o = 0; o < this.measureBgCols.length; o++) {
                        this.measureBgCols[o].drawMeasureBgColFrame(e, t, n, i)
                    }
                }
            }, {
                key: "_dimNotesBelow",
                value: function(e, t) {
                    for (var n = 0; n < this.measureGraphics.length; n++)
                        n < e && (this.measureGraphics[n].alpha = .16);
                    if (0 != this.measureGraphics[e].notes.length)
                        for (var i = this.measureGraphics[e].notes, o = 0; o < i.length; o++)
                            i[o].localBeat < t && (i[o].alpha = .16)
                }
            }, {
                key: "_addEmptyMeasure",
                value: function(e) {
                    this.addMeasureUnit();
                    var t = this.measureGraphics.length - 1
                      , n = this.measureGraphics[t - 1];
                    this.initMeasureUnit(t, e);
                    var i = (n ? n.position.y : 0) - this.measureGraphics[t].measureHeight;
                    this.positionMeasureUnit(t, i)
                }
            }, {
                key: "onRowMenuOpen",
                value: function(e, t, n, o) {
                    this.activeRow = o;
                    for (var r = o * this.viewConfig.gridHeight, a = {
                        y: this.camera.y
                    }, s = {
                        y: r - 48
                    }, l = 0; l < this.measureGraphics.length; l++)
                        this.measureGraphics[l].dimOffscreenNotes();
                    this.measureGraphics[n].showEditRowLine(e, this.camera, t, this.viewConfig),
                    this.camTween = new i.Tween(a).to(s, 500).easing(i.Easing.Exponential.Out).onUpdate(function() {
                        this.camera.panToY(a.y, {
                            noPanAndPlay: !0
                        }),
                        this.pegMap.dimRowsBelow(o),
                        this._dimNotesBelow(n, t)
                    }
                    .bind(this)).onComplete(function() {
                        this.camTween = null
                    }
                    .bind(this)).start()
                }
            }, {
                key: "onRowMenuClose",
                value: function() {
                    this.activeRow = null,
                    this.rowActionTween && this.rowActionTween.stop()
                }
            }, {
                key: "animateAddRow",
                value: function(e, t, n, o, r) {
                    this.rowActionTween && this.rowActionTween.stop();
                    for (var a = {
                        t: 0
                    }, s = a.t, l = this.viewConfig.gridHeight, u = this.measureGraphics[n], c = [], h = 0; h < u.notes.length; h++)
                        u.notes[h].localBeat >= t && c.push(u.notes[h]);
                    var d = function() {
                        this.rowActionTween = null,
                        r(),
                        this.pegMap.dimRowsBelow(o),
                        this._dimNotesBelow(n, t);
                        for (var i = 0; i < this.measureGraphics.length; i++)
                            this.measureGraphics[i].dimOffscreenNotes();
                        this.measureGraphics[n].showEditRowLine(e, this.camera, t, this.viewConfig)
                    }
                    .bind(this);
                    this.measureGraphics[n].activateEditRowLine(),
                    setTimeout(function() {
                        this.measureGraphics[n].showEditRowLine(e, this.camera, t, this.viewConfig)
                    }
                    .bind(this), 100),
                    this.rowActionTween = new i.Tween(a).to({
                        t: 1
                    }, 500).easing(i.Easing.Exponential.Out).onUpdate(function() {
                        this.pegMap.setRowAlpha(o, .5);
                        for (var e = a.t - s, t = n + 1; t < this.measureGraphics.length; t++)
                            this.measureGraphics[t].position.y -= e * l;
                        for (var t = 0; t < c.length; t++)
                            c[t].position.y -= e * l;
                        this.pegMap.shiftRowAfter(o, -e * l),
                        s = a.t
                    }
                    .bind(this)).onStop(d).onComplete(d).start()
                }
            }, {
                key: "animateRemoveRow",
                value: function(e, t, n, o, r) {
                    this.rowActionTween && this.rowActionTween.stop();
                    for (var a = {
                        t: 0
                    }, s = a.t, l = this.viewConfig.gridHeight, u = this.measureGraphics[n].notes, c = [], h = 1 / this.camera.zoomScale, d = [], p = 0; p < u.length; p++)
                        u[p].localBeat >= t + h ? c.push(u[p]) : u[p].localBeat >= t && d.push(u[p]);
                    var f = {
                        t: 0
                    }
                      , m = function() {
                        for (var e = 0; e < d.length; e++)
                            d[e].scale.set(0, 0);
                        this.pegMap.moveRowToTop(o)
                    }
                    .bind(this)
                      , y = function() {
                        this.rowActionTween = null,
                        r(),
                        this.pegMap.dimRowsBelow(o),
                        this._dimNotesBelow(n, t);
                        for (var i = 0; i < this.measureGraphics.length; i++)
                            this.measureGraphics[i].dimOffscreenNotes();
                        this.measureGraphics[n].showEditRowLine(e, this.camera, t, this.viewConfig)
                    }
                    .bind(this);
                    this.measureGraphics[n].activateEditRowLine(),
                    setTimeout(function() {
                        this.measureGraphics[n].showEditRowLine(e, this.camera, t, this.viewConfig)
                    }
                    .bind(this), 100),
                    this.rowActionTween = new i.Tween(f).to({
                        t: 1
                    }, 300).onUpdate(function() {
                        for (var e = 0; e < d.length; e++)
                            d[e].scale.set(1 - f.t, 1 - f.t);
                        this.pegMap.setRowAlpha(o, 1 - f.t)
                    }
                    .bind(this)).onStop(function() {
                        m(),
                        y()
                    }).onComplete(m);
                    var g = new i.Tween(a).to({
                        t: 1
                    }, 500).easing(i.Easing.Exponential.Out).onUpdate(function() {
                        this.pegMap.setRowAlpha(o, .5);
                        for (var e = a.t - s, t = n + 1; t < this.measureGraphics.length; t++)
                            this.measureGraphics[t].position.y += e * l;
                        for (var e = a.t - s, t = 0; t < c.length; t++)
                            c[t].position.y += e * l;
                        this.pegMap.shiftRowAfter(o, e * l),
                        s = a.t
                    }
                    .bind(this)).onStop(y).onComplete(y);
                    this.rowActionTween.chain(g).start()
                }
            }]),
            t
        }()
    }
    ).call(t, n(7), n(16))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.MeasureCam = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, i)
        }
        if ("value"in o)
            return o.value;
        var a = o.get;
        if (void 0 !== a)
            return a.call(i)
    }
      , u = n(4)
      , c = n(0)
      , h = n(111)
      , d = n(11);
    (function(e) {
        e && e.__esModule
    })(d),
    t.MeasureCam = function(e) {
        function t(e, n, r, a) {
            i(this, t);
            var s = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, u.ID.MEASURE_VIEW_CAMERA, n, e, {
                w: u.refs.viewport.offsetWidth,
                h: u.refs.viewport.offsetHeight
            }, {
                xZero: u.config.minimap.width,
                yZero: r.hitLineY
            }, r));
            return s.camOriginbounds = {
                top: 1 / 0
            },
            s.zoomScale = 1,
            s.arrMan = a,
            s
        }
        return r(t, e),
        s(t, [{
            key: "updateCtx",
            value: function(e) {
                this.panToY(e.y || 0, {
                    noPanAndPlay: !0
                })
            }
        }, {
            key: "pxPerS",
            value: function(e) {
                return this.viewConfig.gridHeight * e / 60
            }
        }, {
            key: "pxPerBeat",
            value: function() {
                return this.viewConfig.gridHeight
            }
        }, {
            key: "setBounds",
            value: function(e) {
                this.camOriginbounds = a(this.camOriginbounds, e)
            }
        }, {
            key: "getBounds",
            value: function() {
                return this.camOriginbounds
            }
        }, {
            key: "pan",
            value: function(e, n, i) {
                var o = Math.min(n, this.camOriginbounds.top - this.y);
                l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "pan", this).call(this, 0, o),
                (0,
                c.Signal)(c.EVT.CAMERA.PANNED, {
                    x: null,
                    y: this.y,
                    prevX: null,
                    prevY: this.prevY,
                    context: this,
                    opt: i || {}
                }, this)
            }
        }, {
            key: "panToY",
            value: function(e, n) {
                l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "panToY", this).call(this, Math.min(e, this.camOriginbounds.top)),
                (0,
                c.Signal)(c.EVT.CAMERA.PANNED, {
                    x: null,
                    y: this.y,
                    prevX: null,
                    prevY: this.prevY,
                    context: this,
                    opt: n || {}
                }, this)
            }
        }, {
            key: "panToX",
            value: function() {}
        }, {
            key: "panToTime",
            value: function(e, t, n) {
                this.panToY(this.pxPerS(t) * e, n)
            }
        }, {
            key: "stopAnimations",
            value: function() {
                this.noteTween && this.noteTween.stop()
            }
        }]),
        t
    }(h.BaseCamera)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = n(262)
      , s = i(a)
      , l = n(4)
      , u = n(0)
      , c = n(29)
      , h = i(c)
      , d = n(122)
      , p = function() {
        function e(t, n, i, r, a) {
            o(this, e),
            this.composerUIController = r,
            this.viewConfig = n,
            this.arrMan = t,
            this.arrPlayer = a,
            this.resetViewState(),
            this.view = new s.default(this.arrMan,this.viewConfig,i,this.arrPlayer),
            this.camera = this.view.camera,
            this.renderer = this.view.renderer,
            this.interaction = this.view.interactionHandler,
            this.hud = this.view.hud,
            this.toastMsg = this.view.toastMsg,
            this.pasteMode = !1
        }
        return r(e, [{
            key: "updateLastNotePos",
            value: function() {
                this.lastBeatY = this.arrMan.arrangement.getLastNoteBeat() * this.camera.getBeatHeight()
            }
        }, {
            key: "cameraZoomIn",
            value: function() {
                this.composerUIController.getState().measureActionMenu.visible || (0,
                u.Dispatch)(u.ACTION.VIEW.CHANGE, {
                    viewId: l.ID.EDIT_VIEW
                })
            }
        }, {
            key: "onCameraPan",
            value: function(e) {
                this.renderer.cull(this.pasteMode);
                var t = e.opt.noPanAndPlay || e.opt.silent;
                this.arrPlayer.updateCurrentTime(this.camera.getCurrentTime(this.arrMan.arrangement.bpm)),
                (e.y - this.lastBeatY) * (e.prevY - this.lastBeatY) <= 0 && !this.arrPlayer.isPlaying && (this.updatePegboardPublishBtn(),
                this.composerUIController.updatePlayBtn((0,
                h.default)({
                    jump2Start: e.y >= this.lastBeatY && e.y > 0
                }))),
                e.y == e.prevY || t || this.arrPlayer.playNoteInterval(e.prevY / this.view.camera.pxPerS(), e.y / this.view.camera.pxPerS())
            }
        }, {
            key: "zoomInMeasure",
            value: function(e) {
                return
            }
        }, {
            key: "selectMeasure",
            value: function(e) {
                if (!this.composerUIController.state.zoomMenu.visible && !this.arrPlayer.isPlaying) {
                    this.selectedMeasures[e.measureIdx] ? (delete this.selectedMeasures[e.measureIdx],
                    this.renderer.getMeasureBar(e.measureIdx).deactivate(),
                    0 == Object.keys(this.selectedMeasures).length && this.closeMeasureActionMenu()) : (0 == Object.keys(this.selectedMeasures).length && this.openMeasureActionMenu(),
                    this.selectedMeasures[e.measureIdx] = !0,
                    this.renderer.getMeasureBar(e.measureIdx).activate())
                }
            }
        }, {
            key: "openMeasureActionMenu",
            value: function() {
                this.renderer.slideContainer(this.viewConfig.containerSlideLeftOffset, 400),
                this.composerUIController.toggleMeasureActionMenu(!0),
                this.composerUIController.toggleSideBar(!1),
                this.updatePegboardPublishBtn()
            }
        }, {
            key: "closeMeasureActionMenu",
            value: function() {
                this.composerUIController.toggleMeasureActionMenu(!1),
                this.composerUIController.toggleSideBar(!0),
                this.updatePegboardPublishBtn(),
                this.renderer.slideContainer(this.viewConfig.containerSlideRightOffset, 400),
                this.pasteMode && this.togglePasteMode({
                    pasteMode: !1,
                    copy: !1
                }),
                this.renderer.clearSelectedMeasures(),
                this.renderer.clearSelectedPastePoints(),
                this.resetViewState()
            }
        }, {
            key: "postMeasureEditCallback",
            value: function() {
                this.pasteMode = !1,
                this.copy = !1,
                this.composerUIController.updateHistoryBtn(),
                this.composerUIController.toggleMeasureActionMenu(!1),
                this.composerUIController.toggleMeasureActionPasteMode(this.pasteMode, this.copy),
                this.composerUIController.toggleSideBar(!0),
                this.renderer.slideContainer(this.viewConfig.containerSlideRightOffset, 400),
                this.updateLastNotePos(),
                this.updatePegboardPublishBtn(),
                this.updatePlayBtn(),
                this.renderer.enableMeasures(),
                this.renderer.clearSelectedMeasures(),
                this.renderer.clearSelectedPastePoints(),
                this.resetViewState(),
                this.refreshRenderer()
            }
        }, {
            key: "deleteMeasureBars",
            value: function() {
                this.renderer.animateDeleteMeasures(this.selectedMeasures, function() {
                    var e = Object.keys(this.selectedMeasures).map(function(e) {
                        return parseInt(e)
                    });
                    this.arrMan.deleteMeasureHandler({
                        targetIndices: e
                    }),
                    this.postMeasureEditCallback()
                }
                .bind(this))
            }
        }, {
            key: "togglePasteMode",
            value: function(e) {
                this.pasteMode != e.pasteMode && (this.pasteMode = e.pasteMode,
                this.copy = e.copy,
                this.composerUIController.toggleMeasureActionPasteMode(this.pasteMode, this.copy),
                this.pasteMode ? this.renderer.showPastePoints() : this.renderer.hidePastePoints(function() {
                    this.renderer.clearSelectedPastePoints(),
                    this.renderer.enableMeasures(),
                    this.renderer.cull(this.pasteMode)
                }
                .bind(this)))
            }
        }, {
            key: "selectPastePoint",
            value: function(e) {
                var t = this.selectedPastePoint[e.pastePointIdx]
                  , n = this.renderer.getPastePoint(e.pastePointIdx);
                t ? (delete this.selectedPastePoint[e.pastePointIdx],
                n.deactivate()) : (this.selectedPastePoint[e.pastePointIdx] = !0,
                n.activate()),
                this.composerUIController.updateMeasureActionPasteBtn(Object.keys(this.selectedPastePoint).length > 0)
            }
        }, {
            key: "pasteMeasureBars",
            value: function() {
                var e = Object.keys(this.selectedPastePoint).map(function(e) {
                    return parseInt(e)
                }).sort(function(e, t) {
                    return t - e
                })
                  , t = Object.keys(this.selectedMeasures).map(function(e) {
                    return parseInt(e)
                }).sort(function(e, t) {
                    return t - e
                });
                this.renderer.animatePaste(e, t, this.copy, function() {
                    this.arrMan.pasteMeasureHandler({
                        targetIndices: t,
                        pastePoints: e,
                        copy: this.copy
                    }),
                    this.postMeasureEditCallback()
                }
                .bind(this))
            }
        }, {
            key: "refreshRenderer",
            value: function() {
                this.renderer.loadMeasureGraphics(this.arrMan.arrangement)
            }
        }, {
            key: "update",
            value: function(e) {
                this.arrPlayer.isPlaying ? this.renderer.cull(this.pasteMode) : this.interaction.update(e)
            }
        }, {
            key: "updatePegboardPublishBtn",
            value: function() {
                var e = this.composerUIController.getState().pegboardPublishBtn
                  , t = this.camera.y >= this.lastBeatY;
                e = e.set("visible", t),
                this.composerUIController.updatePegboardPublishBtn(e)
            }
        }, {
            key: "updatePlayBtn",
            value: function() {
                var e = this.composerUIController.getState().sideBar.playBtn
                  , t = this.camera.y >= this.lastBeatY && this.camera.y > 0;
                e.jump2Start != t && (e = e.set("jump2Start", t));
                var n = this.arrMan.arrangement.isEmpty();
                e.disabled != n && (e = e.set("disabled", n)),
                this.composerUIController.updatePlayBtn(e)
            }
        }, {
            key: "playerTick",
            value: function(e) {
                this.camera.panToTime(e.currentTime, this.arrMan.arrangement.getTempo(), {
                    noPanAndPlay: !0
                })
            }
        }, {
            key: "onPlaybackEnd",
            value: function(e) {
                this.updatePegboardPublishBtn(),
                this.composerUIController.updatePlayBtn((0,
                h.default)({
                    jump2Start: !0,
                    playing: !1
                })),
                this.interaction.enableGesture()
            }
        }, {
            key: "onCloseZoomMenu",
            value: function() {
                this.composerUIController.toggleZoomMenu(!1, this.camera.zoomScale),
                this.interaction.enterNullGesture()
            }
        }, {
            key: "onOpenZoomMenu",
            value: function() {
                this.composerUIController.toggleZoomMenu(!0, this.camera.zoomScale),
                this.interaction.enterZoomMenuGesture()
            }
        }, {
            key: "onUndone",
            value: function(e) {
                var t = this.renderer.getMeasureByY(this.camera.y)
                  , n = this.arrMan.arrangement.getMeasure(t);
                this.toastMsg.updateMsg({
                    msg: e.undoneEntry.getDescription({
                        undo: !0,
                        keySigReference: n.keySig
                    })
                }),
                this.updateLastNotePos(),
                this.updatePegboardPublishBtn(),
                this.updatePlayBtn(),
                this.refreshRenderer()
            }
        }, {
            key: "onRedone",
            value: function(e) {
                var t = this.renderer.getMeasureByY(this.camera.y)
                  , n = this.arrMan.arrangement.getMeasure(t);
                this.toastMsg.updateMsg({
                    msg: e.redoneEntry.getDescription({
                        undo: !1,
                        keySigReference: n.keySig
                    })
                }),
                this.updateLastNotePos(),
                this.updatePegboardPublishBtn(),
                this.updatePlayBtn(),
                this.refreshRenderer()
            }
        }, {
            key: "onPlayBtnClick",
            value: function(e, t) {
                e.jump2Start && this.camera.panToTime(0, this.arrMan.arrangement.getTempo(), {
                    noPanAndPlay: !0
                }),
                t.playing ? (this.arrPlayer.play(this.camera.getCurrentTime(this.arrMan.arrangement.bpm)),
                this.interaction.disableGesture()) : (this.arrPlayer.pause(),
                this.interaction.enableGesture(),
                this.updatePegboardPublishBtn(),
                this.composerUIController.updatePlayBtn((0,
                h.default)({
                    jump2Start: this.camera.y >= this.lastBeatY && this.camera.y > 0
                })))
            }
        }, {
            key: "onConfirmStartOver",
            value: function() {
                this.refreshRenderer()
            }
        }, {
            key: "onTempoUpdate",
            value: function(e) {
                this.refreshRenderer()
            }
        }, {
            key: "resetViewState",
            value: function() {
                this.pasteMode = !1,
                this.selectedPastePoint = {},
                this.pastePointGraphic = [],
                this.selectedMeasures = {}
            }
        }, {
            key: "initListeners",
            value: function() {
                u.ActionHandler.on(u.ACTION.MEASURE_BAR.ZOOM_INTO, this.zoomInMeasure.bind(this)),
                u.ActionHandler.on(u.ACTION.MEASURE_BAR.SELECT, this.selectMeasure.bind(this)),
                u.ActionHandler.on(u.ACTION.MEASURE_BAR.DELETE, this.deleteMeasureBars.bind(this)),
                u.ActionHandler.on(u.ACTION.MEASURE_BAR.PASTE, this.pasteMeasureBars.bind(this)),
                u.ActionHandler.on(u.ACTION.MEASURE_BAR_MENU.CLOSE, this.closeMeasureActionMenu.bind(this)),
                u.ActionHandler.on(u.ACTION.MEASURE_BAR_MENU.TOGGLE_PASTE_MODE, this.togglePasteMode.bind(this)),
                u.ActionHandler.on(u.ACTION.MEASURE_PASTE_POINT.SELECT, this.selectPastePoint.bind(this)),
                u.ActionHandler.on(u.ACTION.CAMERA.ZOOM_IN, this.cameraZoomIn.bind(this)),
                u.Event.on(u.EVT.CAMERA.PANNED, this.onCameraPan.bind(this)),
                u.Event.on(u.EVT.PLAYER.TICKED, this.playerTick.bind(this)),
                u.Event.on(u.EVT.PLAYER.ENDED, this.onPlaybackEnd.bind(this))
            }
        }, {
            key: "removeListeners",
            value: function() {
                u.ActionHandler.removeEvent(u.ACTION.MEASURE_BAR.ZOOM_INTO),
                u.ActionHandler.removeEvent(u.ACTION.MEASURE_BAR.SELECT),
                u.ActionHandler.removeEvent(u.ACTION.MEASURE_BAR.DELETE),
                u.ActionHandler.removeEvent(u.ACTION.MEASURE_BAR.PASTE),
                u.ActionHandler.removeEvent(u.ACTION.MEASURE_BAR_MENU.CLOSE),
                u.ActionHandler.removeEvent(u.ACTION.MEASURE_BAR_MENU.TOGGLE_PASTE_MODE),
                u.ActionHandler.removeEvent(u.ACTION.MEASURE_PASTE_POINT.SELECT),
                u.ActionHandler.removeEvent(u.ACTION.CAMERA.ZOOM_IN),
                u.Event.removeEvent(u.EVT.CAMERA.PANNED),
                u.Event.removeEvent(u.EVT.PLAYER.TICKED),
                u.Event.removeEvent(u.EVT.PLAYER.ENDED)
            }
        }, {
            key: "generateContext",
            value: function() {
                return new d.ViewContext(this.camera,this.viewConfig,this.interaction.getCurrentGestureID())
            }
        }, {
            key: "destroy",
            value: function() {
                this.leave(),
                this.renderer.destroy(),
                this.interaction.destroy(),
                this.hud.destroy(),
                this.view.destroy()
            }
        }, {
            key: "leave",
            value: function() {
                this.removeListeners(),
                this.camera.removeListeners(),
                this.renderer.removeListeners(),
                this.interaction.removeListeners(),
                this.hud.removeListeners(),
                this.view.leave()
            }
        }, {
            key: "resume",
            value: function(e, t) {
                this.composerUIController.attach(this),
                this.camera.updateCtx(e),
                this.initListeners(),
                this.camera.initListeners(),
                this.renderer.initListeners(),
                this.interaction.initListeners(this.composerUIController.getState()),
                this.hud.initListeners(),
                this.refreshRenderer(),
                this.updateLastNotePos(),
                this.view.resume(),
                t && this.interaction.enter(t),
                this.arrPlayer.updatePlayQueue(this.arrMan.arrangement, {
                    lazy: !1
                }),
                this.toastMsg.updateMsg({
                    msg: "Bar View"
                })
            }
        }]),
        e
    }();
    t.default = p
}
, function(e, t, n) {
    "use strict";
    (function(e, i) {
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MeasureViewRenderer = void 0;
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , a = n(210)
          , s = n(123)
          , l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s);
        t.MeasureViewRenderer = function() {
            function t(n, i, r, a) {
                o(this, t),
                this.container = new e.Container,
                this.camera = i,
                this.container.position.x = r.containerSlideRightOffset,
                this.viewConfig = r,
                this.pastePointHeight = r.pastePointHeight,
                this.pastePointGraphic = [],
                this.measureGraphics = [],
                this.arrMan = a,
                this.loadMeasureGraphics(a.arrangement),
                window.renderer = this,
                n.addChild(this.container)
            }
            return r(t, [{
                key: "destroy",
                value: function() {
                    for (this.container.removeChildren(0); this.measureGraphics && this.measureGraphics.length; )
                        this.measureGraphics.pop().destroy();
                    for (; this.pastePointGraphic && this.pastePointGraphic.length; )
                        this.pastePointGraphic.pop().destroy();
                    this.container.destroy()
                }
            }, {
                key: "getMeasureBar",
                value: function(e) {
                    return this.measureGraphics[e]
                }
            }, {
                key: "getPastePoint",
                value: function(e) {
                    return this.pastePointGraphic[e]
                }
            }, {
                key: "slideContainer",
                value: function(e, t) {
                    this.containerSlide && this.containerSlide.stop();
                    var n = {
                        t: 0
                    }
                      , o = this.container.position.x;
                    this.containerSlide = new i.Tween(n).to({
                        t: 1
                    }, t).easing(i.Easing.Exponential.Out).onUpdate(function() {
                        this.container.position.x = o * (1 - n.t) + e * n.t
                    }
                    .bind(this)).onStop(function() {
                        this.container.position.x = e
                    }
                    .bind(this)).onComplete(function() {
                        this.container.position.x = e
                    }
                    .bind(this)).start()
                }
            }, {
                key: "initListeners",
                value: function() {}
            }, {
                key: "removeListeners",
                value: function() {
                    this.removeGraphicListeners()
                }
            }, {
                key: "removeGraphicListeners",
                value: function() {
                    for (var e = 0; e < this.pastePointGraphic.length; e++)
                        this.pastePointGraphic[e].empty();
                    this.pastePointGraphic = [];
                    for (var e = 0; e < this.measureGraphics.length; e++)
                        this.measureGraphics[e].empty();
                    this.measureGraphics = [],
                    this.container.removeChildren(0)
                }
            }, {
                key: "initPastePoint",
                value: function(e, t, n) {
                    this.pastePointGraphic[e] = this.pastePointGraphic[e] || l.default.get();
                    var i = this.pastePointGraphic[e];
                    i.initListeners(),
                    i.visible = !1,
                    i.alpha = 0,
                    i.position.set(t, n),
                    i.setIdx(e)
                }
            }, {
                key: "showPastePoints",
                value: function() {
                    for (var e = [], t = [], n = 0, i = 0; i < this.measureGraphics.length; i++) {
                        var o = this.measureGraphics[i]
                          , r = o.position.x;
                        e.push({
                            x: r,
                            y: o.position.y
                        }),
                        n -= this.viewConfig.pastePointMargin,
                        n -= this.viewConfig.pastePointHeight,
                        this.initPastePoint(i, r, n),
                        o.disable(),
                        n -= this.viewConfig.pastePointMargin,
                        n -= o.height,
                        t.push({
                            x: r,
                            y: n
                        })
                    }
                    var a = this.measureGraphics.length;
                    n -= this.viewConfig.pastePointMargin,
                    n -= this.viewConfig.pastePointHeight,
                    this.initPastePoint(a, r, n),
                    this.camera.setBounds({
                        top: -n
                    });
                    var s = this.calculateNewCamPos(e, t)
                      , l = this._moveCamera(s.oldCamPos, s.newCamPos, 200)
                      , u = this._moveMeasures(200, e, t, function() {})
                      , c = this._fadeInPastePoints(300);
                    u.chain(c),
                    u.start(),
                    l.start()
                }
            }, {
                key: "hidePastePoints",
                value: function(e) {
                    for (var t = this._fadeOutPastePoints(300), n = [], i = [], o = 0, r = 0; r < this.measureGraphics.length; r++) {
                        var a = this.measureGraphics[r]
                          , s = a.position.x;
                        n.push({
                            x: s,
                            y: a.position.y
                        }),
                        o -= a.height,
                        i.push({
                            x: s,
                            y: o
                        })
                    }
                    this.camera.setBounds({
                        top: -o
                    });
                    var l = this.calculateNewCamPos(n, i)
                      , u = this._moveCamera(l.oldCamPos, l.newCamPos, 200)
                      , c = this._moveMeasures(250, n, i, e);
                    t.chain(c, u),
                    t.start()
                }
            }, {
                key: "animatePaste",
                value: function(e, t, n, o) {
                    this.camera.setBounds({
                        top: 1 / 0
                    });
                    for (var r = this._fadeOutPastePoints(300), a = 0, s = 0; s < t.length; s++)
                        a += this.measureGraphics[t[s]].height;
                    var l;
                    if (n)
                        l = new i.Tween({
                            t: 0
                        }).to({
                            t: 0
                        }, 0);
                    else {
                        for (var s = 0; s < t.length; s++)
                            this.measureGraphics[t[s]].skip = !0;
                        l = this._fadeOutCutMeasures(300, t)
                    }
                    for (var u = [], c = [], h = 0, s = 0; s < this.measureGraphics.length; s++) {
                        var d = this.measureGraphics[s];
                        if (d.skip) {
                            var p = d.position.x
                              , f = d.position.y;
                            u.push({
                                x: p,
                                y: f
                            }),
                            c.push({
                                x: p,
                                y: f
                            }),
                            e.indexOf(s) > -1 && (h -= a)
                        } else {
                            var m = d.position.x;
                            u.push({
                                x: m,
                                y: d.position.y
                            }),
                            e.indexOf(s) > -1 && (h -= a),
                            h -= d.height,
                            c.push({
                                x: m,
                                y: h
                            })
                        }
                    }
                    var y = this._moveMeasures(450, u, c, o)
                      , g = this.calculateNewCamPos(u, c)
                      , v = this._moveCamera(g.oldCamPos, g.newCamPos, 200);
                    r.chain(l),
                    l.chain(y, v),
                    r.start()
                }
            }, {
                key: "getCurrentMeasureIdx",
                value: function() {
                    for (var e = this.camera.topMeasureOnScreen(this.measureGraphics) - 1; e >= 0 && e < this.measureGraphics.length && this.camera.isInView(this.measureGraphics[e]); )
                        e--;
                    return e + 1
                }
            }, {
                key: "getMeasureByY",
                value: function(e) {
                    for (var t = this.camera.topMeasureOnScreen(this.measureGraphics) - 1; t > 0; ) {
                        if (this.measureGraphics[t].position.y <= -e && this.measureGraphics[t - 1].position.y > -e)
                            return t;
                        t--
                    }
                    return t
                }
            }, {
                key: "calculateNewCamPos",
                value: function(e, t) {
                    var n, i = this.camera.y, o = this.getCurrentMeasureIdx();
                    if (e[o]) {
                        var r = i - -e[o].y;
                        n = -t[o].y + r
                    }
                    return {
                        oldCamPos: i,
                        newCamPos: n
                    }
                }
            }, {
                key: "_moveCamera",
                value: function(e, t, n) {
                    var o = {
                        t: 0
                    };
                    return new i.Tween(o).to({
                        t: 1
                    }, n).easing(i.Easing.Exponential.Out).onUpdate(function() {
                        this.camera.panToY(e * (1 - o.t) + t * o.t, {
                            noPanAndPlay: !0
                        })
                    }
                    .bind(this))
                }
            }, {
                key: "_fadeOutPastePoints",
                value: function(e) {
                    var t = this.pastePointGraphic[0] && this.pastePointGraphic[0].alpha
                      , n = {
                        t: null == t ? 1 : t
                    };
                    return new i.Tween(n).to({
                        t: 0
                    }, e).onUpdate(function() {
                        for (var e = 0; e < this.pastePointGraphic.length; e++)
                            this.pastePointGraphic[e].visible = !0,
                            this.pastePointGraphic[e].alpha = n.t;
                        this.cull(!0)
                    }
                    .bind(this))
                }
            }, {
                key: "_fadeInPastePoints",
                value: function(e) {
                    var t = {
                        t: 0
                    };
                    return new i.Tween(t).to({
                        t: 1
                    }, e).onUpdate(function() {
                        for (var e = 0; e < this.pastePointGraphic.length; e++)
                            this.pastePointGraphic[e].visible = !0,
                            this.pastePointGraphic[e].alpha = t.t;
                        this.cull(!0)
                    }
                    .bind(this))
                }
            }, {
                key: "_moveMeasures",
                value: function(e, t, n, o) {
                    var r = {
                        t: 0
                    };
                    return new i.Tween(r).to({
                        t: 1
                    }, e).easing(i.Easing.Exponential.Out).onUpdate(function() {
                        this.tweenStates(t, n, r.t),
                        this.cull()
                    }
                    .bind(this)).onStop(o).onComplete(o)
                }
            }, {
                key: "_fadeOutCutMeasures",
                value: function(e, t) {
                    var n = {
                        t: 1
                    };
                    return new i.Tween(n).to({
                        t: 0
                    }, e).onUpdate(function() {
                        for (var e = 0; e < t.length; e++)
                            this.measureGraphics[t[e]].alpha = n.t;
                        this.cull()
                    }
                    .bind(this))
                }
            }, {
                key: "loadMeasureGraphics",
                value: function(e) {
                    for (this.container.removeChildren(); this.measureGraphics && this.measureGraphics.length; )
                        this.measureGraphics.pop().destroy();
                    this.measureGraphics = [];
                    for (var t = 0, n = 0; n < e.measures.length; n++)
                        this.measureGraphics[n] = new a.MeasureBar,
                        this.renderMeasure(n, null, null, e),
                        t -= this.measureGraphics[n].height,
                        this.measureGraphics[n].setPosition(0, t),
                        this.measureGraphics[n].initListeners();
                    this.camera.setBounds({
                        top: -t
                    }),
                    this.camera.pan(0, 0),
                    this.cull()
                }
            }, {
                key: "cull",
                value: function(e) {
                    this.container.removeChildren(0);
                    var t = this.camera.topMeasureOnScreen(this.measureGraphics) - 1;
                    for (e && t + 1 < this.pastePointGraphic.length && this.container.addChild(this.pastePointGraphic[t + 1]); t >= 0 && t < this.measureGraphics.length && this.camera.isInView(this.measureGraphics[t]); )
                        this.container.addChild(this.measureGraphics[t]),
                        e && this.container.addChild(this.pastePointGraphic[t]),
                        t--
                }
            }, {
                key: "renderMeasure",
                value: function(e, t, n, i) {
                    this.measureGraphics[e].empty(),
                    t = t || this.measureGraphics[e].position.x,
                    n = n || this.measureGraphics[e].position.y,
                    this.measureGraphics[e].draw(e, i, this.viewConfig, t, n)
                }
            }, {
                key: "tweenStates",
                value: function(e, t, n) {
                    for (var i = 0; i < this.measureGraphics.length; i++) {
                        this.measureGraphics[i].position.set(t[i].x * n + (1 - n) * e[i].x, t[i].y * n + (1 - n) * e[i].y)
                    }
                }
            }, {
                key: "animateDeleteMeasures",
                value: function(e, t) {
                    for (var n = Object.keys(e).map(function(e) {
                        return parseInt(e)
                    }), i = this._fadeOutCutMeasures(300, n), o = [], r = [], a = 0, s = 0; s < this.measureGraphics.length; s++) {
                        e[s] || (a -= this.measureGraphics[s].height);
                        var l = this.measureGraphics[s];
                        o.push({
                            y: l.position.y,
                            x: 0
                        }),
                        r.push({
                            y: a,
                            x: 0
                        })
                    }
                    var u = this._moveMeasures(200, o, r, t);
                    i.chain(u),
                    i.start()
                }
            }, {
                key: "enableMeasures",
                value: function() {
                    for (var e = 0; e < this.measureGraphics.length; e++)
                        this.measureGraphics[e].enable()
                }
            }, {
                key: "clearSelectedMeasures",
                value: function() {
                    for (var e = 0; e < this.measureGraphics.length; e++)
                        this.measureGraphics[e].enable(),
                        this.measureGraphics[e].deactivate()
                }
            }, {
                key: "clearSelectedPastePoints",
                value: function() {
                    for (var e = 0; e < this.pastePointGraphic.length; e++)
                        this.pastePointGraphic[e].deactivate()
                }
            }]),
            t
        }()
    }
    ).call(t, n(7), n(16))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, i)
        }
        if ("value"in o)
            return o.value;
        var a = o.get;
        if (void 0 !== a)
            return a.call(i)
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(0)
      , u = n(112)
      , c = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(u)
      , h = (n(15),
    function() {
        function e() {
            r(this, e),
            this.currentState = this.idleState = new p(this),
            this.validatingTagsState = new f(this),
            this.validatingPublishState = new m(this)
        }
        return s(e, [{
            key: "setCurrentState",
            value: function(e) {
                this.currentState = e
            }
        }, {
            key: "validateTags",
            value: function(e) {
                return this.currentState.validateTags(e)
            }
        }, {
            key: "validatePublish",
            value: function(e) {
                return this.currentState.validatePublish(e)
            }
        }]),
        e
    }());
    t.default = h;
    var d = function() {
        function e(t) {
            r(this, e),
            this.validator = t
        }
        return s(e, [{
            key: "enter",
            value: function() {
                this.validator.currentState._leave(),
                this.validator.setCurrentState(this)
            }
        }, {
            key: "_leave",
            value: function() {}
        }]),
        e
    }()
      , p = function(e) {
        function t() {
            return r(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return o(t, e),
        s(t, [{
            key: "validateTags",
            value: function(e) {
                return this.validator.validatingTagsState.enter(e)
            }
        }, {
            key: "validatePublish",
            value: function(e) {
                return this.validator.validatingPublishState.enter(e)
            }
        }]),
        t
    }(d)
      , f = function(e) {
        function t() {
            return r(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return o(t, e),
        s(t, [{
            key: "enter",
            value: function(e) {
                a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enter", this).call(this);
                var n = function(e) {
                    return this.tagValidation = null,
                    this.validator.idleState.enter(),
                    new Promise(function(t, n) {
                        t(e)
                    }
                    )
                }
                .bind(this)
                  , i = function(e) {
                    return this.tagValidation = null,
                    this.validator.idleState.enter(),
                    new Promise(function(t, n) {
                        n(e)
                    }
                    )
                }
                .bind(this);
                return new Promise(function(t, n) {
                    !e.songId && e.title && e.artist ? (this.tagValidation = c.default.validateSong(e.title, e.artist, e.tags),
                    this.tagValidation.then(function(e) {
                        e.valid ? t("Valid Original Arrangement") : ((0,
                        l.Signal)(l.EVT.CATALOG.RESTRICT, {}, this),
                        n("Invalid Original Arrangement"))
                    }
                    .bind(this)).fail(function(e) {
                        t("Aborted")
                    })) : t("No Validation Needed")
                }
                .bind(this)).then(n, i)
            }
        }, {
            key: "_leave",
            value: function() {
                this.tagValidation && this.tagValidation.abort(),
                this.tagValidation = null
            }
        }, {
            key: "validateTags",
            value: function(e) {
                return new Promise(function(e, t) {
                    t({
                        alreadyValidating: !0
                    })
                }
                )
            }
        }, {
            key: "validatePublish",
            value: function(e) {
                return this.validator.validatingPublishState.enter(e)
            }
        }]),
        t
    }(d)
      , m = function(e) {
        function t() {
            return r(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return o(t, e),
        s(t, [{
            key: "enter",
            value: function(e) {
                a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enter", this).call(this),
                this.publishValidation = null;
                var n = function(e) {
                    return this.publishValidation = null,
                    this.validator.idleState.enter(),
                    new Promise(function(t, n) {
                        t(e)
                    }
                    )
                }
                .bind(this)
                  , i = function(e) {
                    return this.publishValidation = null,
                    this.validator.idleState.enter(),
                    new Promise(function(t, n) {
                        n(e)
                    }
                    )
                }
                .bind(this);
                return new Promise(function(t, n) {
                    !e.songId && e.title && e.artist ? (this.publishValidation = c.default.validateSong(e.title, e.artist, e.tags),
                    this.publishValidation.then(function(e) {
                        e.valid ? t("Valid Original Arrangement") : ((0,
                        l.Signal)(l.EVT.CATALOG.RESTRICT, {}, this),
                        n("Invalid Original Arrangement"))
                    }
                    .bind(this)).fail(function(e) {
                        (0,
                        l.Dispatch)(l.ACTION.MODALS.TOGGLE_LOST_CONNECTION_MODAL, !0),
                        n(e)
                    })) : t("No Validation Needed")
                }
                .bind(this)).then(n, i)
            }
        }, {
            key: "validateTags",
            value: function(e) {
                return new Promise(function(e, t) {
                    t({
                        alreadyValidating: !0
                    })
                }
                )
            }
        }, {
            key: "validatePublish",
            value: function(e) {
                return new Promise(function(e, t) {
                    t({
                        alreadyValidating: !0
                    })
                }
                )
            }
        }]),
        t
    }(d)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Keyboard = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            if (void 0 !== a)
                return a.call(i)
        }
          , u = n(7)
          , c = i(u)
          , h = n(0)
          , d = n(4)
          , p = n(21)
          , f = i(p)
          , m = n(30)
          , y = i(m)
          , g = n(40)
          , v = i(g)
          , b = n(25)
          , E = i(b)
          , T = d.config.octave
          , S = (t.Keyboard = function(t) {
            function n(e, t, i, a) {
                o(this, n);
                var s = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return s.addNoteThreshold = .25,
                s.container = new c.default.Container,
                s.keyCircleSize = i.gridWidth,
                s.gridWidth = i.gridWidth,
                s.position.set(d.config.minimap.mapMeasureWidth, i.hitLineY),
                s.arrMan = e,
                s.camera = t,
                s.keys = [],
                s.viewState = a,
                s.keysTapped = {},
                s.hasTouches = !1,
                s.addChild(s.container),
                s
            }
            return a(n, t),
            s(n, [{
                key: "update",
                value: function(e) {
                    this.hasTouches && this._updateTouches(e)
                }
            }, {
                key: "hide",
                value: function() {
                    this.container.alpha = 0,
                    this.container.visible = !1
                }
            }, {
                key: "show",
                value: function() {
                    this.container.visible = !0,
                    this.container.alpha = 1
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeChildren(),
                    this.container.removeChildren(),
                    this.container.destroy();
                    for (var e = 0; e < this.keys.length; e++)
                        this.keys[e].destroy();
                    l(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "onCameraPan",
                value: function(e) {
                    -e.x != this.container.position.x && (this.container.position.x = -e.x)
                }
            }, {
                key: "_handleDown",
                value: function(e) {
                    this._registerTouches(e);
                    var t = this.camera.getNextMeasureAndBeat()
                      , n = Object.keys(this.keysTapped).map(function(e) {
                        return this.keysTapped[e].col
                    }
                    .bind(this));
                    (0,
                    h.Dispatch)(h.ACTION.NOTE.PLAY, {
                        columns: n,
                        localBeat: t.localBeat,
                        measureIdx: t.measureIdx,
                        playAllNotes: !0
                    })
                }
            }, {
                key: "_handleMove",
                value: function(e) {
                    var t = Object.keys(this.keysTapped);
                    if (1 === e.length && 1 === t.length) {
                        var n = e[0].x - this.prevTouches[0].x
                          , i = e[0].x - t[0].x;
                        this.prevTouches = e,
                        this.camera.pan(n, 0, {
                            noKeySigAnimation: !0
                        }),
                        this.movedKeys = this.movedKeys || Math.abs(i) > this.gridWidth / 2
                    } else if (this.keysTapped.length > 1)
                        throw "More than one key was originally tapped - cannot move keyboard"
                }
            }, {
                key: "_handleUp",
                value: function(e) {
                    this._registerTouches(e);
                    for (var t = this.camera.getNextMeasureAndBeat(), n = Object.keys(this.keysTapped), i = [], o = 0; o < n.length; o++)
                        this.keysTapped[n[o]].currentTime < this.addNoteThreshold && i.push(this.keysTapped[n[o]].col);
                    if (n.length > 0 && 0 === e.length) {
                        if (i.length > 0 && !this.movedKeys) {
                            var r = i.every(function(e) {
                                var n = this.arrMan.arrangement.measures[t.measureIdx]
                                  , i = n && n.noteGroups[t.localBeat];
                                return i && i.notes[y.default.colToPitch(e)]
                            }
                            .bind(this));
                            (0,
                            h.Dispatch)(h.ACTION.NOTE.CLICK, {
                                columns: i,
                                localBeat: t.localBeat,
                                measureIdx: t.measureIdx
                            }, this),
                            r || (0,
                            h.Dispatch)(h.ACTION.CAMERA.TWEEN_TO_NEXT_NOTE, {}, this)
                        }
                        this._clearKeyStates()
                    }
                    this.movedKeys = !1
                }
            }, {
                key: "_handleLeave",
                value: function() {
                    this._clearKeyStates()
                }
            }, {
                key: "_registerTouches",
                value: function(e) {
                    this.prevTouches = e.sort(function(e, t) {
                        return e.x - t.x
                    });
                    for (var t = 0; t < e.length; t++) {
                        var n = y.default.getColumn(e[t].x + this.camera.x - d.config.minimap.width, this.viewState.currentKeySig, this.viewState.chromaticMode, this.gridWidth).col;
                        this.keysTapped[n] = {
                            x: e[t].x,
                            col: n,
                            currentTime: this.keysTapped[n] && this.keysTapped[n].currentTime || 0
                        },
                        this.keys[n].activateNote()
                    }
                    this.hasTouches = !0
                }
            }, {
                key: "_updateTouches",
                value: function(e) {
                    for (var t in this.keysTapped)
                        this.keysTapped[t].currentTime += e,
                        this.keysTapped[t].currentTime > this.addNoteThreshold && 1 === this.keys[parseInt(t)].noteTappedSprite.alpha && this.keys[t].activateSound()
                }
            }, {
                key: "_clearKeyStates",
                value: function() {
                    this.hasTouches = !1;
                    for (var e in this.keysTapped)
                        this.keys[parseInt(e)].deactivate(1e3);
                    this.keysTapped = {}
                }
            }, {
                key: "activatePlayedKeys",
                value: function(e) {
                    for (var t in e.noteGroup.notes) {
                        var n = e.noteGroup.notes[t].pitch - d.config.pitchOffset;
                        this.keysTapped[n] || this.keys[n].activateNote(),
                        this.keysTapped[n] || this.keys[n].deactivate(1e3)
                    }
                }
            }, {
                key: "blur",
                value: function() {
                    this.removeKeyListeners(),
                    this.keyboardFade({
                        fadeOut: !0
                    })
                }
            }, {
                key: "focus",
                value: function() {
                    this.initKeyListeners(),
                    this.keyboardFade({
                        fadeOut: !1
                    })
                }
            }, {
                key: "keyboardFade",
                value: function(t) {
                    var n = {
                        containerOpacity: t.fadeOut ? 1 : .24,
                        textOpacity: t.fadeOut ? 1 : 0
                    }
                      , i = {
                        containerOpacity: t.fadeOut ? .24 : 1,
                        textOpacity: t.fadeOut ? 0 : 1
                    };
                    this.tweenFade = new e.Tween(n).to(i, 500).onUpdate(function() {
                        this.container.alpha = n.containerOpacity;
                        for (var e = 0; e < this.keys.length; e++)
                            this.keys[e].keyNameSprite.alpha = n.textOpacity,
                            this.keys[e].octaveNumSprite && (this.keys[e].octaveNumSprite.alpha = n.textOpacity)
                    }
                    .bind(this)).onStop(function() {
                        this.tweenFade = null,
                        this.container.alpha = i.containerOpacity;
                        for (var e = 0; e < this.keys.length; e++)
                            this.keys[e].keyNameSprite.alpha = i.textOpacity,
                            this.keys[e].octaveNumSprite && (this.keys[e].octaveNumSprite.alpha = i.textOpacity)
                    }
                    .bind(this)).onComplete(function() {
                        this.tweenFade = null,
                        this.container.alpha = i.containerOpacity;
                        for (var e = 0; e < this.keys.length; e++)
                            this.keys[e].keyNameSprite.alpha = i.textOpacity,
                            this.keys[e].octaveNumSprite && (this.keys[e].octaveNumSprite.alpha = i.textOpacity)
                    }
                    .bind(this)).easing(e.Easing.Cubic.Out).start()
                }
            }, {
                key: "initListeners",
                value: function(e) {
                    this.initKeyListeners(),
                    e.zoomMenu.visible && this.removeKeyListeners(),
                    this.keyboardFade({
                        fadeOut: e.zoomMenu.visible
                    })
                }
            }, {
                key: "initKeyListeners",
                value: function() {
                    this.oDownHandler = this._handleDown.bind(this),
                    this.oUpHandler = this._handleUp.bind(this),
                    this.oMoveHandler = this._handleMove.bind(this),
                    this.oLeaveHandler = this._handleLeave.bind(this),
                    h.Event.on(h.EVT.KEYBOARD.PRESSED, this.oDownHandler),
                    h.Event.on(h.EVT.KEYBOARD.UP, this.oUpHandler),
                    h.Event.on(h.EVT.KEYBOARD.MOVED, this.oMoveHandler),
                    h.Event.on(h.EVT.KEYBOARD.LEFT, this.oLeaveHandler)
                }
            }, {
                key: "removeListeners",
                value: function() {
                    this.removeKeyListeners()
                }
            }, {
                key: "removeKeyListeners",
                value: function() {
                    h.Event.off(h.EVT.KEYBOARD.PRESSED, this.oDownHandler),
                    h.Event.off(h.EVT.KEYBOARD.UP, this.oUpHandler),
                    h.Event.off(h.EVT.KEYBOARD.MOVED, this.oMoveHandler),
                    h.Event.off(h.EVT.KEYBOARD.LEFT, this.oLeaveHandler)
                }
            }, {
                key: "preKeyboardAnimation",
                value: function(e, t) {
                    this.keySig = t,
                    this.oldKeyStates = [];
                    for (var n = Math.sign(this.keySig.sharps) < 0 ? "minor" : "major", i = T[n], o = this.keySig.minor ? 33 : 36, r = 7 * this.keySig.sharps % 12, a = i[(o + r) % 12], s = 0; s < this.keys.length; s++) {
                        !this.laneStates[s].inKey && e[s].inKey ? this.keys[s].container.scale.set(.125) : this.laneStates[s].inKey && !e[s].inKey && this.keys[s].container.scale.set(1.6),
                        this.oldKeyStates.push({
                            x: this.keys[s].container.position.x,
                            scale: this.keys[s].container.scale.x
                        });
                        var l = T[n][s % 12];
                        this.keys[s].setText(a, l, e[s].inKey),
                        this.keys[s].setTextures(e[s].inKey)
                    }
                }
            }, {
                key: "drawKeyboardAnimationFrame",
                value: function(e, t, n) {
                    for (var i = 0; i < this.keys.length; i++) {
                        var o = this.oldKeyStates[i].scale
                          , r = e[i].inKey || n ? 1 : 0;
                        this.keys[i].container.scale.set(t * r + (1 - t) * o);
                        var a = this.oldKeyStates[i].x
                          , s = e[i].normalizedX + e[i].normalizedW / 2;
                        this.keys[i].container.position.x = t * s * this.gridWidth + (1 - t) * a
                    }
                }
            }, {
                key: "postKeyboardAnimation",
                value: function(e) {
                    this.laneStates = e
                }
            }, {
                key: "render",
                value: function(e, t) {
                    this.keys = [],
                    this.container.removeChildren(0),
                    this.keySig = e;
                    var n = Math.sign(this.keySig.sharps) < 0 ? "minor" : "major"
                      , i = T[n];
                    this.laneStates = y.default.getLaneStates(this.keySig, t);
                    for (var o = this.keySig.minor ? 33 : 36, r = 7 * this.keySig.sharps % 12, a = i[(o + r) % 12], s = 0; s < this.laneStates.length; s++) {
                        var l = Math.floor(s / 12) + 2
                          , u = d.config.octave[n][s % 12]
                          , c = new _(l,u);
                        c.container.scale.set(this.laneStates[s].inKey || t ? 1 : 0),
                        c.container.position.x = this.laneStates[s].normalizedX * this.gridWidth + .5 * this.gridWidth,
                        c.render(a, u, this.laneStates[s].inKey),
                        this.container.addChild(c.container),
                        this.keys.push(c)
                    }
                }
            }]),
            n
        }(c.default.Container),
        13408716)
          , _ = function() {
            function t(e, n) {
                o(this, t),
                this.container = new c.default.Container,
                this.octaveNum = e,
                this.inKeyTex = d.refs.textureCache["key_btn_note.png"],
                this.inKeyTapTex = d.refs.textureCache["key_btn_note_tap.png"],
                this.outOfKeyTex = d.refs.textureCache["key_btn_acc_note.png"],
                this.outOfKeyTapTex = d.refs.textureCache["key_btn_acc_note_tap.png"],
                this.keyNameSprite = E.default.get(d.SPRITE_TYPE.KEY_NAME),
                this.keyNameSprite.texture = f.default.getKeyLarge(n),
                this.octaveNumSprite = v.default.get(this.octaveNum, {
                    font: "16px ProximaNova",
                    fill: S
                }, 2),
                this.keyNameSprite.anchor.set(.5),
                this.octaveNumSprite.anchor.set(.5),
                this.noteSpriteScale = .5
            }
            return s(t, [{
                key: "destroy",
                value: function() {
                    E.default.recycle(this.keyNameSprite, d.SPRITE_TYPE.KEY_NAME),
                    v.default.recycle(this.octaveNumSprite),
                    this.noteCircleSprite && E.default.recycle(this.noteCircleSprite, d.SPRITE_TYPE.KEY_CIRCLE),
                    this.noteTappedSprite && E.default.recycle(this.noteTappedSprite, d.SPRITE_TYPE.KEY_CIRCLE_TAPPED)
                }
            }, {
                key: "deactivate",
                value: function(t) {
                    this.deactivateTween && this.deactivateTween.stop();
                    var n = {
                        alpha: this.noteTappedSprite.alpha
                    }
                      , i = {
                        alpha: 0
                    };
                    this.deactivateTween = new e.Tween(n).to(i, t).onUpdate(function() {
                        this.noteTappedSprite.alpha = n.alpha
                    }
                    .bind(this)).onStop(function() {
                        this.deactivateTween = null,
                        this.noteTappedSprite.alpha = i.alpha
                    }
                    .bind(this)).onComplete(function() {
                        this.deactivateTween = null,
                        this.noteTappedSprite.alpha = i.alpha
                    }
                    .bind(this)).easing(e.Easing.Cubic.Out).start()
                }
            }, {
                key: "randomizeTappedState",
                value: function() {
                    this.noteTappedSprite.scale.x = Math.random() > .5 ? -this.noteSpriteScale : this.noteSpriteScale,
                    this.noteTappedSprite.scale.y = Math.random() > .5 ? -this.noteSpriteScale : this.noteSpriteScale
                }
            }, {
                key: "activateSound",
                value: function() {
                    this.deactivateTween && this.deactivateTween.stop(),
                    this.noteTappedSprite.alpha = .5,
                    this.randomizeTappedState()
                }
            }, {
                key: "activateNote",
                value: function() {
                    this.deactivateTween && this.deactivateTween.stop(),
                    this.noteTappedSprite.alpha = 1,
                    this.randomizeTappedState()
                }
            }, {
                key: "setText",
                value: function(e, t, n) {
                    this.noteCircleSprite.removeChildren(0),
                    this.keyNameSprite.texture = n ? f.default.getKeyLarge(t) : f.default.getKeySmall(t),
                    this.keyNameSprite.scale.set(1 / this.noteSpriteScale),
                    this.keyNameSprite.position.x = 0,
                    t == e && (this.octaveNumSprite.position.x = this.keyNameSprite.position.x + (t.length > 1 ? 20 : 12),
                    this.keyNameSprite.position.x = -8,
                    this.octaveNumSprite.scale.set(1 / this.noteSpriteScale),
                    this.noteCircleSprite.addChild(this.octaveNumSprite)),
                    this.noteCircleSprite.addChild(this.keyNameSprite)
                }
            }, {
                key: "setTextures",
                value: function(e) {
                    e ? (this.noteCircleSprite.texture = this.inKeyTex,
                    this.noteTappedSprite.texture = this.inKeyTapTex) : (this.noteCircleSprite.texture = this.outOfKeyTex,
                    this.noteTappedSprite.texture = this.outOfKeyTapTex)
                }
            }, {
                key: "render",
                value: function(e, t, n) {
                    this.noteCircleSprite = E.default.get(d.SPRITE_TYPE.KEY_CIRCLE),
                    this.noteCircleSprite.anchor.set(.5),
                    this.noteTappedSprite = E.default.get(d.SPRITE_TYPE.KEY_CIRCLE_TAPPED),
                    this.noteTappedSprite.anchor.set(.5),
                    this.noteTappedSprite.alpha = 0,
                    this.setText(e, t, n),
                    this.setTextures(n),
                    this.noteCircleSprite.scale.set(this.noteSpriteScale),
                    this.noteTappedSprite.scale.set(this.noteSpriteScale),
                    this.container.addChild(this.noteTappedSprite),
                    this.container.addChild(this.noteCircleSprite)
                }
            }]),
            t
        }()
    }
    ).call(t, n(16))
}
, function(e, t, n) {
    "use strict";
    (function(e, i) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function s(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.KeySigIndicator = void 0;
        var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , u = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            if (void 0 !== a)
                return a.call(i)
        }
          , c = n(4)
          , h = (n(0),
        n(40))
          , d = o(h)
          , p = n(25)
          , f = o(p)
          , m = n(52)
          , y = o(m);
        t.KeySigIndicator = function(t) {
            function n(t, i) {
                r(this, n);
                var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                o.position.y = i.hitLineY - i.gridHeight / 2,
                o.barWindow = y.default.get(),
                o.barWindow.beginFill(16777215, .2),
                o.barWindow.drawRect(0, 0, c.config.sidebarWidth, i.gridHeight),
                o.arrMan = t,
                o.viewConfig = i,
                o._locked = !1,
                o.background = f.default.get(c.SPRITE_TYPE.KEY_SIG_BG),
                o.background.texture = e.loader.resources["./res/sidebar/side_bar_gradient-4c8dcb592f4dc7f84279e94cbe38e8cb.jpg"].texture,
                o.background.position.y = -i.hitLineY + i.gridHeight / 2,
                o.background.width = c.config.sidebarWidth,
                o.background.height = window.innerHeight,
                o.backgroundMidGradient = f.default.get(c.SPRITE_TYPE.KEY_SIG_GRADIENT),
                o.backgroundMidGradient.texture = c.refs.textureCache["grad_bar.png"],
                o.backgroundMidGradient.anchor.set(0, 1),
                o.backgroundMidGradient.position.y = 0,
                o.backgroundMidGradient.width = c.config.sidebarWidth,
                o.backgroundMidGradient.height = 64;
                var s = i.hitLineY - .5 * i.gridHeight - 64;
                return o.backgroundTopPatch = y.default.get(),
                o.backgroundTopPatch.beginFill(5646473),
                o.backgroundTopPatch.drawRect(0, 0, c.config.sidebarWidth, s),
                o.backgroundTopPatch.position.y = -i.hitLineY + i.gridHeight / 2,
                o.keySigContainer = new e.Container,
                o.initKeySigs(),
                window.keySig = o,
                o.addChild(o.background),
                o.addChild(o.barWindow),
                o.addChild(o.keySigContainer),
                o.addChild(o.backgroundMidGradient),
                o.addChild(o.backgroundTopPatch),
                o
            }
            return s(n, t),
            l(n, [{
                key: "hide",
                value: function() {
                    this.alpha = 0,
                    this.visible = !1
                }
            }, {
                key: "show",
                value: function() {
                    this.visible = !0,
                    this.alpha = 1
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeChildren(),
                    f.default.recycle(this.background, c.SPRITE_TYPE.KEY_SIG_BG),
                    f.default.recycle(this.backgroundMidGradient, c.SPRITE_TYPE.KEY_SIG_GRADIENT),
                    y.default.recycle(this.backgroundTopPatch),
                    y.default.recycle(this.barWindow),
                    d.default.recycleArray(this.keySigs),
                    u(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "getKeySigString",
                value: function(e) {
                    var t, n = this.arrMan.arrangement.getMeasure(e);
                    if (n && n.keySig) {
                        t = (n.keySig.minor ? c.keySigMap.sharpsToKey.minor : c.keySigMap.sharpsToKey.major)[n.keySig.sharps] + (n.keySig.minor ? " Minor" : " Major")
                    } else
                        t = "N/A";
                    return "Bar " + (e + 1) + "\n" + t
                }
            }, {
                key: "getKeySigObject",
                value: function(e) {
                    var t = d.default.get(this.getKeySigString(e), {
                        font: "12px ProximaNova",
                        fill: "#FFFFFF"
                    }, 2);
                    return t.anchor.set(.5),
                    t
                }
            }, {
                key: "initKeySigs",
                value: function(e) {
                    this.currentMeasureIdx = e || 0;
                    var t = [0, 1, .5, 0];
                    this.keySigsDestPos = [];
                    for (var n = 0; n < 4; n++)
                        this.keySigsDestPos[n] = {
                            x: c.config.sidebarWidth / 2,
                            y: this.viewConfig.gridHeight * (1.5 - n),
                            a: t[n]
                        };
                    this.keySigs = [];
                    for (var n = 0; n < 4; n++)
                        this.keySigs[n] = this.getKeySigObject(this.currentMeasureIdx + n - 1),
                        this.keySigs[n].position.set(this.keySigsDestPos[n].x, this.keySigsDestPos[n].y),
                        this.keySigs[n].alpha = this.keySigsDestPos[n].a,
                        this.keySigContainer.addChild(this.keySigs[n])
                }
            }, {
                key: "onKeySigUpdated",
                value: function(e) {
                    this.updateComplete(e)
                }
            }, {
                key: "updateCurrentKeySig",
                value: function(e) {
                    this.updateComplete(e)
                }
            }, {
                key: "updateKeySig",
                value: function(e) {
                    if (!this._locked && e != this.currentMeasureIdx) {
                        var t = e > this.currentMeasureIdx;
                        this.keySigTween && this.keySigTween.stop();
                        var n = {
                            t: 0
                        };
                        this.keySigTween = new i.Tween(n).to({
                            t: 1
                        }, 250).onUpdate(function() {
                            if (t)
                                for (var e = 1; e < 4; e++)
                                    this.keySigs[e].position.y = (1 - n.t) * this.keySigsDestPos[e].y + n.t * this.keySigsDestPos[e - 1].y,
                                    this.keySigs[e].alpha = (1 - n.t) * this.keySigsDestPos[e].a + n.t * this.keySigsDestPos[e - 1].a;
                            else
                                for (var e = 0; e < 3; e++)
                                    this.keySigs[e].position.y = (1 - n.t) * this.keySigsDestPos[e].y + n.t * this.keySigsDestPos[e + 1].y,
                                    this.keySigs[e].alpha = (1 - n.t) * this.keySigsDestPos[e].a + n.t * this.keySigsDestPos[e + 1].a
                        }
                        .bind(this)).onStop(function() {
                            this.updateComplete(e),
                            this.keySigTween = null
                        }
                        .bind(this)).onComplete(function() {
                            this.updateComplete(e),
                            this.keySigTween = null
                        }
                        .bind(this)),
                        this.keySigTween.start()
                    }
                }
            }, {
                key: "updateComplete",
                value: function(e) {
                    for (var t = 0; t < 4; t++)
                        this.keySigs[t].text = this.getKeySigString(e + t - 1),
                        this.keySigs[t].position.y = this.keySigsDestPos[t].y,
                        this.keySigs[t].alpha = this.keySigsDestPos[t].a;
                    this.currentMeasureIdx = e
                }
            }, {
                key: "lock",
                value: function() {
                    this._locked = !0
                }
            }, {
                key: "unlock",
                value: function() {
                    this._locked = !1
                }
            }, {
                key: "initListeners",
                value: function() {}
            }, {
                key: "removeListeners",
                value: function() {}
            }]),
            n
        }(e.Container)
    }
    ).call(t, n(7), n(16))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MeasureBackgroundColumns = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            if (void 0 !== a)
                return a.call(i)
        }
          , u = n(4)
          , c = (n(0),
        n(21))
          , h = i(c)
          , d = n(25)
          , p = i(d)
          , f = n(30)
          , m = i(f);
        t.MeasureBackgroundColumns = function(e) {
            function t() {
                o(this, t);
                var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.bgColMap = {},
                e
            }
            return a(t, e),
            s(t, [{
                key: "empty",
                value: function() {
                    p.default.recycleArray(this.removeChildren(), u.SPRITE_TYPE.MEASURE_BG_COLUMN)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.empty(),
                    l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                }
            }, {
                key: "init",
                value: function(e, t) {
                    this.keySig = e,
                    this.timeSig = t
                }
            }, {
                key: "draw",
                value: function(e, t, n, i, o, r) {
                    this.empty(),
                    this.bgColMap = {},
                    this.keySig = n,
                    this.timeSig = i,
                    this.colStates = m.default.getLaneStates(n, o);
                    for (var a = r.gridWidth, s = r.gridHeight * e.zoomScale * this.timeSig.numerator + (0 === t ? u.config.keyboardOffset + 32 : 0), l = 0; l < u.config.availablePitches; l++)
                        if (!this.colStates[l].inKey) {
                            var c = p.default.get(u.SPRITE_TYPE.MEASURE_BG_COLUMN);
                            c.texture = h.default.getBackgroundColumnsTex(),
                            this.bgColMap[l] = c,
                            c.height = s,
                            c.scale.x = o ? 1 : 0,
                            c.position.x = l * a,
                            this.addChild(c)
                        }
                }
            }, {
                key: "drawMeasureBgColFrame",
                value: function(e, t, n, i) {
                    for (var o = m.default.getLaneStates(this.keySig, i), r = Object.keys(this.bgColMap), a = 0; a < r.length; a++) {
                        var s = parseInt(r[a])
                          , l = this.bgColMap[r[a]];
                        l.position.x = t * o[s].normalizedX * e + (1 - t) * this.colStates[s].normalizedX * e,
                        l.scale.x = i ? t : 1 - t
                    }
                }
            }, {
                key: "postBgColAnimation",
                value: function(e) {
                    this.colStates = m.default.getLaneStates(this.keySig, e)
                }
            }]),
            t
        }(e.Container)
    }
    ).call(t, n(7))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MeasureBar = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            if (void 0 !== a)
                return a.call(i)
        }
          , u = n(4)
          , c = n(0)
          , h = n(21)
          , d = i(h)
          , p = n(40)
          , f = i(p)
          , m = n(25)
          , y = i(m);
        t.MeasureBar = function(t) {
            function n() {
                o(this, n);
                var e = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return e.measureHeight = 0,
                e
            }
            return a(n, t),
            s(n, [{
                key: "empty",
                value: function() {
                    this.removeChildren(0),
                    this.ff && y.default.recycle(this.ff, u.SPRITE_TYPE.MEASURE_VIEW_FF_TEX) && this.ff.texture.destroy(),
                    this.checkBox && y.default.recycle(this.checkBox, u.SPRITE_TYPE.MEASURE_VIEW_CHECKBOX),
                    this.label && f.default.recycle(this.label),
                    this.bg && y.default.recycle(this.bg, u.SPRITE_TYPE.MEASURE_VIEW_BG),
                    this.checkBox && this.removeListeners()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.empty(),
                    l(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setPosition",
                value: function(e, t) {
                    this.position.set(e, t)
                }
            }, {
                key: "getStartPos",
                value: function() {
                    return this.position.y + this.measureHeight
                }
            }, {
                key: "draw",
                value: function(t, n, i) {
                    this.empty();
                    var o = n.getMeasure(t)
                      , r = u.config.availablePitches
                      , a = i.gridHeight
                      , s = i.ffSize
                      , l = this.measureHeight = a * o.beats
                      , c = i.measureWidth - i.labelWidth;
                    this.bg = y.default.get(u.SPRITE_TYPE.MEASURE_VIEW_BG),
                    this.bg.texture = d.default.getMeasureBarBgTex(!1),
                    this.bg.position.x = i.measureMargin,
                    this.bg.height = l - 2 * i.measureMargin,
                    this.addChild(this.bg);
                    var h = new e.Container
                      , p = new e.RenderTexture(u.refs.renderer,c,l,e.SCALE_MODES.DEFAULT,2);
                    for (var f in o.noteGroups) {
                        var m = Math.min(o.noteGroups[f].noteCount(), 4)
                          , g = .5 * s + (l - s) * (1 - f / o.beats);
                        for (var v in o.noteGroups[f].notes) {
                            var b = .5 * s + (parseInt(v) - u.config.pitchOffset) / r * (c - s)
                              , E = y.default.get(u.SPRITE_TYPE.MEASURE_VIEW_FF_SPRITE);
                            E.texture = u.refs.textureCache["icn_ff_sm_" + m + ".png"],
                            E.anchor.set(.5),
                            E.position.set(b, g),
                            E.width = s,
                            E.height = s,
                            h.addChild(E)
                        }
                    }
                    p.render(h),
                    this.ff = y.default.get(u.SPRITE_TYPE.MEASURE_VIEW_FF_TEX),
                    this.ff.texture = p,
                    this.addChild(this.ff);
                    var T = h.removeChildren();
                    y.default.recycleArray(T, u.SPRITE_TYPE.MEASURE_VIEW_FF_SPRITE),
                    h.destroy(),
                    this._drawLabel(t, i.labelColor, i.labelAlpha, i.labelX, i.labelY),
                    this.checkBox = y.default.get(u.SPRITE_TYPE.MEASURE_VIEW_CHECKBOX),
                    this.checkBox.texture = u.refs.textureCache["icn_empty.png"],
                    this.checkBox.anchor.set(.5),
                    this.checkBox.scale.set(.5),
                    this.checkBox.position.set(c - i.checkBoxSize / 2, l - i.checkBoxSize / 2),
                    this.checkBoxHitBox = new e.Circle(this.checkBox.position.x,this.checkBox.position.y,i.checkBoxSize / 2),
                    this.addChild(this.checkBox),
                    this.viewConfig = i,
                    this.idx = t
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    if (this.inputState.mouseDown && !this.disabled) {
                        switch (this.inputState.mouseDown) {
                        case "checkbox":
                            (0,
                            c.Dispatch)(c.ACTION.MEASURE_BAR.SELECT, {
                                measureIdx: this.idx
                            })
                        }
                        this.inputState.mouseDown = null,
                        this.inputState.mouseMove = 0,
                        e.stopPropagation()
                    }
                }
            }, {
                key: "initListeners",
                value: function() {
                    this.removeListeners(),
                    this.initMeasureListeners()
                }
            }, {
                key: "initMeasureListeners",
                value: function() {
                    this.interactive = !0,
                    this.inputState = {
                        mouseMove: 0,
                        mouseDown: null
                    };
                    var e = function(e) {
                        this.inputState.mouseMove = 0;
                        var t = e.data.getLocalPosition(this);
                        this.checkBoxHitBox.contains(t.x, t.y) ? this.inputState.mouseDown = "checkbox" : this.inputState.mouseDown = "measure"
                    }
                    .bind(this)
                      , t = function(e) {
                        this.inputState.mouseMove += 1,
                        this.inputState.mouseMove > 5 && (this.inputState.mouseDown = null)
                    }
                    .bind(this);
                    this.on("mousedown", e),
                    this.on("touchstart", e),
                    this.on("touchmove", t),
                    this.on("mousemove", t),
                    this.on("mouseup", this.handleClick.bind(this)),
                    this.on("touchend", this.handleClick.bind(this))
                }
            }, {
                key: "removeListeners",
                value: function() {
                    this.removeMeasureListeners()
                }
            }, {
                key: "removeMeasureListeners",
                value: function() {
                    this.off("touchstart"),
                    this.off("mousedown"),
                    this.off("touchmove"),
                    this.off("mousemove"),
                    this.off("touchend"),
                    this.off("mouseup")
                }
            }, {
                key: "_drawLabel",
                value: function(e, t, n, i, o) {
                    this.removeChild(this.label),
                    this.label = f.default.get(e + 1, {
                        font: "12px ProximaNova",
                        fill: t,
                        lineJoin: "round"
                    }, 2),
                    this.label.anchor.set(.5, 0),
                    this.label.x = i,
                    this.label.y = o,
                    this.addChild(this.label)
                }
            }, {
                key: "activate",
                value: function() {
                    this.checkBox.visible = !0,
                    this.checkBox.texture = u.refs.textureCache["icn_check.png"],
                    this.bg.texture = d.default.getMeasureBarBgTex(!0),
                    this.label.alpha = this.viewConfig.labelBgBrightAlpha,
                    this.activated = !0
                }
            }, {
                key: "deactivate",
                value: function() {
                    this.checkBox.visible = !0,
                    this.checkBox.texture = u.refs.textureCache["icn_empty.png"],
                    this.bg.texture = d.default.getMeasureBarBgTex(!1),
                    this.label.alpha = this.viewConfig.labelBgAlpha,
                    this.activated = !1
                }
            }, {
                key: "disable",
                value: function() {
                    this.disabled = !0,
                    this.activated || (this.checkBox.visible = !1)
                }
            }, {
                key: "enable",
                value: function() {
                    this.disabled = !1,
                    this.checkBox.visible = !0
                }
            }]),
            n
        }(e.Container)
    }
    ).call(t, n(7))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MeasureBlock = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            if (void 0 !== a)
                return a.call(i)
        }
          , u = n(4)
          , c = n(30)
          , h = i(c)
          , d = n(22)
          , p = n(253)
          , f = i(p)
          , m = n(40)
          , y = i(m)
          , g = n(25)
          , v = i(g)
          , b = n(52)
          , E = i(b)
          , T = n(254)
          , S = i(T);
        t.MeasureBlock = function(t) {
            function n(t) {
                o(this, n);
                var i = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return i.measureHeight = 0,
                i.notes = [],
                i.columns = [],
                i.noteColIndex = {},
                i.offscreenNotesContainer = new e.Container,
                i.editRowLineContainer = new e.Container,
                i.editRowLineContainer.alpha = .5,
                i.noteContainer = new e.Container,
                i.minimapBgContainer = new e.Container,
                i.addChild(i.noteContainer),
                i.addChild(i.offscreenNotesContainer),
                i.addChild(i.editRowLineContainer),
                i.addChild(i.minimapBgContainer),
                i.rendered = !1,
                i
            }
            return a(n, t),
            s(n, [{
                key: "empty",
                value: function() {
                    this.noteContainer.removeChildren(0),
                    f.default.recycleArray(this.notes),
                    this.notes = [],
                    S.default.recycleArray(this.offscreenNotesContainer.removeChildren()),
                    this.emptyEditRowLine()
                }
            }, {
                key: "init",
                value: function(e, t, n, i) {
                    this.measureHeight = e * t * i.gridHeight,
                    this.beats = t,
                    this.idx = n
                }
            }, {
                key: "destroy",
                value: function() {
                    this.empty(),
                    l(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "draw",
                value: function(e, t, n, i, o) {
                    this.chromaticMode = i,
                    this.empty();
                    var r = t.zoomScale
                      , a = (0,
                    d.isValidZoomScale)(r) ? r : (0,
                    d.getNearestZoomScale)(r)
                      , s = o.gridHeight
                      , l = o.gridWidth
                      , c = o.gridSpriteSize || 32
                      , p = this.idx
                      , m = e.getBeats(p);
                    this.measureHeight = s * r * m,
                    this.colStates = h.default.getLaneStates((i ? e.getKeySig(p) : n) || {
                        sharps: 0
                    }, i),
                    this.notes = [];
                    var y = e.getMeasure(p);
                    if (y)
                        for (var g in y.noteGroups)
                            for (var v = y.noteGroups[g].noteCount(), b = Object.keys(y.noteGroups[g].notes), E = 0; E < b.length; E++) {
                                var T = f.default.get()
                                  , S = parseInt(b[E]) - u.config.pitchOffset
                                  , _ = (this.colStates[S].normalizedX + this.colStates[S].normalizedW / 2) * l
                                  , w = this.measureHeight * (1 - g / m)
                                  , O = g * a % 1 < .001 && (i || this.colStates[S].inKey);
                                T.alpha = 1,
                                T.setPosition(_, w),
                                T.setSize(c),
                                T.updateTexture(v, O, a),
                                T.localBeat = parseFloat(g),
                                T.col = S,
                                this.noteColIndex[S] = this.noteColIndex[S] || [],
                                this.noteColIndex[S].push(T),
                                this.notes.push(T),
                                this.noteContainer.addChild(T)
                            }
                }
            }, {
                key: "preKeySigAnimation",
                value: function(e, t, n, i) {
                    e && this.notes.forEach(function(o) {
                        var r = n[o.col]
                          , a = this.colStates[o.col]
                          , s = Object.keys(e.noteGroups[o.localBeat].notes).length
                          , l = o.localBeat * t % 1 < .001 && (i || r.inKey);
                        o.updateTexture(s, l, t),
                        o.oldPosition = {
                            x: o.position.x,
                            y: o.position.y
                        },
                        a.inKey || !r.inKey || i || o.scale.set(.125)
                    }
                    .bind(this))
                }
            }, {
                key: "drawKeySigAnimationFrame",
                value: function(e, t, n, i) {
                    if (t)
                        for (var o = 0; o < this.notes.length; o++) {
                            var r = this.notes[o].col
                              , a = n * (t[r].normalizedX + t[r].normalizedW / 2) * e + (1 - n) * this.notes[o].oldPosition.x;
                            this.notes[o].position.x = a,
                            this.colStates[r].inKey || !t[r].inKey || i || this.notes[o].scale.set(.125 * (1 - n) + .5 * n)
                        }
                }
            }, {
                key: "postKeySigAnimation",
                value: function(e) {
                    e && (this.colStates = e)
                }
            }, {
                key: "setOffscreenNotes",
                value: function(e, t, n, i, o, r) {
                    if (o) {
                        S.default.recycleArray(this.offscreenNotesContainer.removeChildren());
                        var a = r.gridWidth
                          , t = n ? o.keySig : t;
                        for (var s in o.noteGroups)
                            for (var l = o.noteGroups[s].noteCount(), u = Object.keys(o.noteGroups[s].notes), c = !1, d = !1, p = 0; p < u.length; p++) {
                                var f = h.default.pitchToX(u[p], t, n, a)
                                  , m = this.measureHeight * (1 - s / e.timeSig.numerator)
                                  , y = f < i.x
                                  , g = f > i.x + i.w - i.xZero;
                                if (y && !c || g && !d) {
                                    var v = y ? i.x : i.x + i.w - i.xZero
                                      , b = S.default.get();
                                    b.setPosition(v, m),
                                    b.setSize(40, 48),
                                    b.updateTexture(l),
                                    this.offscreenNotesContainer.addChild(b),
                                    y && (c = !0),
                                    g && (d = !0)
                                } else if (c && d)
                                    break
                            }
                    }
                }
            }, {
                key: "showMinimapOverLay",
                value: function(e, t) {
                    if (!this.label) {
                        this.minimapBgContainer.alpha = 0;
                        var n = e.minimapConfig
                          , i = n.measureWidth
                          , o = n.measureHeight
                          , r = i
                          , a = n.labelBgWidthRatio * r
                          , s = this.ffBg = E.default.get()
                          , l = n.measureBgMargin;
                        s.beginFill(n.measureBgColor),
                        s.drawRect(0, l, r, o - l),
                        s.alpha = n.measureBgAlpha,
                        this.minimapBgContainer.addChild(s);
                        var u = this.labelBg = E.default.get();
                        u.beginFill(n.labelBgColor),
                        u.drawRect(r, l, a, o - l),
                        u.alpha = n.labelBgAlpha,
                        this.minimapBgContainer.addChild(u),
                        this.label = y.default.get(this.idx + 1, {
                            font: "12px ProximaNova",
                            fill: n.labelColor,
                            lineJoin: "round"
                        }, 2),
                        this.label.anchor.set(.5),
                        this.label.x = r + a / 2,
                        this.label.y = n.labelY,
                        this.label.alpha = n.labelAlpha,
                        this.minimapBgContainer.addChild(this.label),
                        this.minimapBgContainer.position.set(t.x, t.y)
                    }
                }
            }, {
                key: "hideMinimapOverLay",
                value: function() {
                    this.label && (this.minimapBgContainer.removeChild(this.label),
                    this.minimapBgContainer.removeChild(this.ffBg),
                    this.minimapBgContainer.removeChild(this.labelBg),
                    y.default.recycle(this.label),
                    E.default.recycleArray([this.ffBg, this.labelBg]),
                    this.label = null,
                    this.ffBg = null,
                    this.labelBg = null)
                }
            }, {
                key: "setOverLayAlpha",
                value: function(e, t) {
                    this.label && (this.minimapBgContainer.alpha = e)
                }
            }, {
                key: "dimOffscreenNotes",
                value: function() {
                    this.offscreenNotesContainer.visible && (this.offscreenNotesContainer.alpha = 0,
                    this.offscreenNotesContainer.visible = !1)
                }
            }, {
                key: "showOffscreenNotes",
                value: function() {
                    this.offscreenNotesContainer.visible || (this.offscreenNotesContainer.visible = !0,
                    this.offscreenNotesContainer.alpha = 1)
                }
            }, {
                key: "emptyEditRowLine",
                value: function() {
                    for (var e = this.editRowLineContainer.removeChildren(), t = 0; t < e; t++)
                        e[t].destroy()
                }
            }, {
                key: "showEditRowLine",
                value: function(e, t, n, i) {
                    this.emptyEditRowLine();
                    var o = v.default.get(u.SPRITE_TYPE.EDIT_ROW_LINE);
                    o.texture = u.refs.textureCache["row_highlight.png"],
                    o.height = 40,
                    o.width = window.innerWidth + i.gridWidth,
                    o.position.set(t.x - u.config.minimap.width, this.measureHeight * (1 - n / e)),
                    o.anchor.set(0, .5),
                    this.editRowLineContainer.addChild(o),
                    this.dimEditRowLine()
                }
            }, {
                key: "activateEditRowLine",
                value: function() {
                    this.editRowLineContainer.alpha = 1
                }
            }, {
                key: "dimEditRowLine",
                value: function() {
                    this.editRowLineContainer.alpha = .5
                }
            }]),
            n
        }(e.Container)
    }
    ).call(t, n(7))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MeasureIndicator = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            if (void 0 !== a)
                return a.call(i)
        }
          , u = n(4)
          , c = (n(0),
        n(21))
          , h = i(c)
          , d = n(25)
          , p = i(d);
        t.MeasureIndicator = function(e) {
            function t() {
                return o(this, t),
                r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, e),
            s(t, [{
                key: "empty",
                value: function() {
                    this.removeChildren(0),
                    this.gridLineSprite && p.default.recycle(this.gridLineSprite, u.SPRITE_TYPE.MEASURE_INDICATOR),
                    this.gridLineSprite = null
                }
            }, {
                key: "destroy",
                value: function() {
                    this.empty(),
                    l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                }
            }, {
                key: "init",
                value: function() {}
            }, {
                key: "draw",
                value: function(e) {
                    this.empty();
                    var t = e * u.config.availablePitches;
                    this.gridLineSprite = p.default.get(u.SPRITE_TYPE.MEASURE_INDICATOR),
                    this.gridLineSprite.texture = h.default.getLineIndicatorTex(),
                    this.gridLineSprite.width = t,
                    this.gridLineSprite.height = 2,
                    this.gridLineSprite.anchor.set(0, .5),
                    this.addChild(this.gridLineSprite)
                }
            }]),
            t
        }(e.Container)
    }
    ).call(t, n(7))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MeasurePastePoint = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = (n(4),
        n(22),
        n(21))
          , u = i(l)
          , c = n(123)
          , h = i(c)
          , d = n(0);
        t.MeasurePastePoint = function(e) {
            function t() {
                o(this, t);
                var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, u.default.getPastePoint(!1)));
                return e.activated = !1,
                e
            }
            return a(t, e),
            s(t, [{
                key: "setIdx",
                value: function(e) {
                    this.idx = e
                }
            }, {
                key: "empty",
                value: function() {
                    this.removeListeners(),
                    h.default.recycle(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.empty()
                }
            }, {
                key: "initListeners",
                value: function() {
                    this.removeListeners(),
                    this.interactive = !0,
                    this.inputState = {
                        mouseMove: 0
                    },
                    this.on("mousedown", function(e) {
                        this.inputState.mouseMove = 0
                    }
                    .bind(this)),
                    this.on("touchstart", function(e) {
                        this.inputState.mouseMove = 0
                    }
                    .bind(this)),
                    this.on("touchmove", function(e) {
                        this.inputState.mouseMove += 1
                    }
                    .bind(this)),
                    this.on("mousemove", function(e) {
                        this.inputState.mouseMove += 1
                    }
                    .bind(this)),
                    this.on("mouseup", this.click.bind(this)),
                    this.on("touchend", this.click.bind(this))
                }
            }, {
                key: "removeListeners",
                value: function() {
                    this.interactive = !1,
                    this.activated = !1,
                    this.off("touchstart"),
                    this.off("mousedown"),
                    this.off("touchmove"),
                    this.off("mousemove"),
                    this.off("touchend"),
                    this.off("mouseup")
                }
            }, {
                key: "activate",
                value: function() {
                    this.texture = u.default.getPastePoint(!0),
                    this.activated = !0
                }
            }, {
                key: "deactivate",
                value: function() {
                    this.texture = u.default.getPastePoint(!1),
                    this.activated = !1
                }
            }, {
                key: "click",
                value: function() {
                    this.inputState.mouseMove > 5 || (0,
                    d.Dispatch)(d.ACTION.MEASURE_PASTE_POINT.SELECT, {
                        pastePointIdx: this.idx
                    })
                }
            }]),
            t
        }(e.Sprite)
    }
    ).call(t, n(7))
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.OffScreenNote = void 0;
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(7)
      , u = i(l)
      , c = n(21)
      , h = i(c);
    t.OffScreenNote = function(e) {
        function t() {
            o(this, t);
            var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.anchor.set(.5),
            e
        }
        return a(t, e),
        s(t, [{
            key: "setSize",
            value: function(e, t) {
                this.width = e,
                this.height = t
            }
        }, {
            key: "setPosition",
            value: function(e, t) {
                this.position.set(e, t),
                this.oldPosition = new u.default.Point(e,t)
            }
        }, {
            key: "updateTexture",
            value: function(e) {
                var t = "offscreen_" + Math.max(1, Math.min(4, e)) + ".png";
                this.texture = h.default.get(t)
            }
        }]),
        t
    }(u.default.Sprite)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Pegmap = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = n(22)
          , u = n(30)
          , c = i(u)
          , h = n(21)
          , d = i(h)
          , p = n(255)
          , f = i(p);
        t.Pegmap = function(e) {
            function t(e, n, i) {
                o(this, t);
                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 15e3, {
                    position: !0,
                    alpha: !0
                }));
                return a.camera = e,
                a.viewConfig = n,
                a.gridWidth = a.viewConfig.gridWidth,
                a.gridHeight = a.viewConfig.gridHeight,
                a.locked = !1,
                a.arrPlayer = i,
                window.pegMap = a,
                a
            }
            return a(t, e),
            s(t, [{
                key: "clearPegs",
                value: function() {
                    f.default.recycleArray(this.removeChildren(0))
                }
            }, {
                key: "genTile",
                value: function(e, t, n, i) {
                    this.rowMap = {},
                    this.colMap = {},
                    this.laneStates = c.default.getLaneStates(n, i);
                    for (var o = (0,
                    l.getNearestZoomScale)(this.camera.zoomScale), r = this.getXRange(e, n, i), a = this.getYRange(t), s = this.arrPlayer.isPlaying, u = a.a; u < a.b; u++)
                        for (var h = d.default.getPegTex(u % o == 0, s), p = r.a; p < r.b; p++) {
                            var m = f.default.get(this.laneStates[p].inKey || i ? 1 : 0, this.laneStates[p].normalizedX * e, -u * t, 0, .5, h);
                            this.rowMap[u] = this.rowMap[u] || [],
                            this.rowMap[u].push(m),
                            this.colMap[p] = this.colMap[p] || [],
                            this.colMap[p].push(m),
                            this.addChild(m)
                        }
                }
            }, {
                key: "preTileKeySigAnimation",
                value: function() {}
            }, {
                key: "drawTileKeySigAnimationFrame",
                value: function(e, t, n, i) {
                    this.rowMap = {},
                    this.colMap = {},
                    this.animating = !0,
                    this.clearPegs();
                    for (var o = this.getXRange(this.gridWidth, t, n), r = this.getYRange(this.gridHeight), a = this.gridHeight, s = this.gridWidth, l = this.arrPlayer.isPlaying, u = o.a; u < o.b; u++)
                        for (var c = (this.laneStates[u].normalizedX + (!this.laneStates[u].inKey && e[u].inKey ? .5 : 0)) * s, h = (e[u].normalizedX + (this.laneStates[u].inKey && !e[u].inKey ? -.5 : 0)) * s, p = r.a; p < r.b; p++) {
                            var m = d.default.getPegTex(p % this.camera.zoomScale == 0, l)
                              , y = f.default.get(i * (e[u].inKey ? 1 : 0) + (1 - i) * (this.laneStates[u].inKey ? 1 : 0), c * (1 - i) + h * i, -p * a, 0, .5, m);
                            this.rowMap[p] = this.rowMap[p] || [],
                            this.rowMap[p].push(y),
                            this.colMap[u] = this.colMap[u] || [],
                            this.colMap[u].push(y),
                            this.addChild(y)
                        }
                }
            }, {
                key: "postTileKeySigAnimation",
                value: function(e, t, n) {
                    this.animating = !1,
                    this.laneStates = e,
                    this.cullTile(t, n)
                }
            }, {
                key: "cullTile",
                value: function(e, t) {
                    this.animating || (this.clearPegs(),
                    this.genTile(this.gridWidth, this.gridHeight, e, t))
                }
            }, {
                key: "getXRange",
                value: function(e, t, n) {
                    return {
                        a: c.default.getColumn(Math.max(0, this.camera.x - e), t, n, e).col,
                        b: c.default.getColumn(this.camera.x + this.camera.w, t, n, e).col + 1
                    }
                }
            }, {
                key: "getYRange",
                value: function(e) {
                    return {
                        a: Math.max(0, Math.floor(this.camera.y / e) - 1),
                        b: Math.floor((this.camera.y + this.camera.h) / e)
                    }
                }
            }, {
                key: "dimRowsBelow",
                value: function(e) {
                    for (var t in this.rowMap)
                        t < e && this.setRowAlpha(t, 0)
                }
            }, {
                key: "setRowAlpha",
                value: function(e, t) {
                    if (this.rowMap[e])
                        for (var n = 0; n < this.rowMap[e].length; n++)
                            this.rowMap[e][n].alpha = t
                }
            }, {
                key: "shiftRowAfter",
                value: function(e, t) {
                    for (var n in this.rowMap)
                        parseInt(n) < e || this.shiftRow(n, t)
                }
            }, {
                key: "shiftRow",
                value: function(e, t) {
                    if (this.rowMap[e])
                        for (var n = 0; n < this.rowMap[e].length; n++)
                            this.rowMap[e][n].position.y += t
                }
            }, {
                key: "moveRow",
                value: function(e, t) {
                    if (this.rowMap[e]) {
                        this.rowMap[t] = this.rowMap[e],
                        this.rowMap[e] = null;
                        for (var n = 0; n < this.rowMap[t].length; n++)
                            this.rowMap[t][n].position.y = -this.gridHeight * t
                    }
                }
            }, {
                key: "moveRowToTop",
                value: function(e) {
                    var t = this.getYRange(this.gridHeight);
                    this.moveRow(e, t.b)
                }
            }]),
            t
        }(e.ParticleContainer)
    }
    ).call(t, n(7))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.AddNotesModal = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(l)
      , c = n(0)
      , h = n(35)
      , d = (t.AddNotesModal = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        s(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.data.visible
                  , t = u.default.createElement("div", {
                    className: "icon add-notes-icon",
                    style: d.addNotesIcon
                })
                  , n = u.default.createElement("div", {
                    className: "add-notes-header",
                    style: d.addNotesHeader
                }, "Uh Oh!")
                  , i = u.default.createElement("div", {
                    className: "add-notes-body",
                    style: d.addNotesBody
                }, "Your song needs notes first!");
                return u.default.createElement("div", {
                    className: "add-notes-modal",
                    style: a({}, d.addNotesModal, {
                        visibility: e ? "visible" : "hidden",
                        pointerEvents: e ? "initial" : "none"
                    })
                }, u.default.createElement(h.PianoModal, {
                    open: e,
                    iconContainer: t,
                    headerContainer: n,
                    bodyContainer: i,
                    confirmBtnText: "Go Back",
                    confirmCallback: this.confirm.bind(this)
                }))
            }
        }, {
            key: "confirm",
            value: function() {
                (0,
                c.Dispatch)(c.ACTION.MODALS.TOGGLE_ADD_NOTES_MODAL, !1)
            }
        }]),
        t
    }(u.default.Component),
    {
        addNotesModal: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden"
        },
        addNotesIcon: {
            display: "inline-block",
            width: 25,
            height: 25,
            marginBottom: 15
        },
        addNotesHeader: {
            width: "100%",
            textAlign: "center",
            color: "#444",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 7
        },
        addNotesBody: {
            width: "100%",
            textAlign: "center",
            color: "#585858",
            fontSize: 14,
            fontWeight: "normal",
            marginBottom: 24
        }
    })
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.InvalidArrModal = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(0)
      , c = n(218)
      , h = n(124);
    t.InvalidArrModal = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "getErrorMessage",
            value: function(e) {
                switch (e) {
                case h.ARR_NO_CHANGE_ERROR:
                    return l.default.createElement("span", null, "We noticed you haven't changed anything. ", l.default.createElement("br", null), "Make the song your own or start over!");
                case h.ARR_NOTE_ERROR_1:
                    return l.default.createElement("span", null, "We noticed you haven't added very many notes. Keep composing!");
                case h.ARR_NOTE_ERROR_2:
                case h.ARR_NOTE_ERROR_3:
                    return l.default.createElement("span", null, "We noticed your song has a lot of empty bars. ", l.default.createElement("br", null), " Keep composing!");
                case h.ARR_NOTE_ERROR_4:
                    return l.default.createElement("span", null, "We noticed the beginning of your song ", l.default.createElement("br", null), " doesn't have any notes. Keep composing!");
                default:
                    return null
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getErrorMessage(this.props.data.errorType);
                return l.default.createElement(c.InvalidModal, {
                    confirm: this.confirm.bind(this),
                    visible: !!e,
                    modalWidth: 350
                }, e)
            }
        }, {
            key: "confirm",
            value: function() {
                (0,
                u.Dispatch)(u.ACTION.MODALS.TOGGLE_INVALID_ARR_MODAL, {
                    errorType: null
                })
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.InvalidModal = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(l)
      , c = n(35)
      , h = (t.InvalidModal = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        s(t, [{
            key: "render",
            value: function() {
                var e = this.props.visible
                  , t = u.default.createElement("div", {
                    className: "icon invalid-icon",
                    style: h.modalIcon
                })
                  , n = u.default.createElement("div", {
                    style: h.modalHeader
                }, "Heads Up!")
                  , i = u.default.createElement("div", {
                    style: h.modalBody
                }, this.props.children);
                return u.default.createElement("div", {
                    style: a({}, h.modal, {
                        visibility: e ? "visible" : "hidden",
                        pointerEvents: e ? "initial" : "none"
                    })
                }, u.default.createElement(c.PianoModal, {
                    open: e,
                    modalWidth: this.props.modalWidth,
                    iconContainer: t,
                    headerContainer: n,
                    bodyContainer: i,
                    confirmBtnText: "Ok",
                    confirmCallback: this.props.confirm
                }))
            }
        }]),
        t
    }(u.default.Component),
    {
        modal: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden"
        },
        modalIcon: {
            display: "inline-block",
            width: 25,
            height: 25,
            marginBottom: 15
        },
        modalHeader: {
            width: "100%",
            textAlign: "center",
            color: "#444",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 7
        },
        modalBody: {
            width: "100%",
            textAlign: "center",
            color: "#585858",
            fontSize: 14,
            lineHeight: "18px",
            fontWeight: "normal",
            marginBottom: 24
        }
    })
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.LostConnectionModal = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(l)
      , c = n(0)
      , h = n(35)
      , d = (t.LostConnectionModal = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        s(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.data.visible
                  , t = u.default.createElement("div", {
                    className: "icon lost-connection-icon",
                    style: d.lostConnectionIcon
                })
                  , n = u.default.createElement("div", {
                    className: "lost-connection-header",
                    style: d.lostConnectionHeader
                }, "Uh Oh!")
                  , i = u.default.createElement("div", {
                    className: "lost-connection-body",
                    style: d.lostConnectionBody
                }, "Sorry, something went wrong. Please try again.");
                return u.default.createElement("div", {
                    className: "lost-connection-modal",
                    style: a({}, d.lostConnectionModal, {
                        visibility: e ? "visible" : "hidden",
                        pointerEvents: e ? "initial" : "none"
                    })
                }, u.default.createElement(h.PianoModal, {
                    open: e,
                    iconContainer: t,
                    headerContainer: n,
                    bodyContainer: i,
                    confirmBtnText: "Ok",
                    confirmCallback: this.confirm.bind(this)
                }))
            }
        }, {
            key: "confirm",
            value: function() {
                (0,
                c.Dispatch)(c.ACTION.MODALS.TOGGLE_LOST_CONNECTION_MODAL, !1)
            }
        }]),
        t
    }(u.default.Component),
    {
        lostConnectionModal: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden"
        },
        lostConnectionIcon: {
            display: "inline-block",
            width: 25,
            height: 25,
            marginBottom: 15
        },
        lostConnectionHeader: {
            width: "100%",
            textAlign: "center",
            color: "#444",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 7
        },
        lostConnectionBody: {
            width: "100%",
            textAlign: "center",
            color: "#585858",
            fontSize: 14,
            fontWeight: "normal",
            marginBottom: 24
        }
    })
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.LastSavedText = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s);
    t.LastSavedText = function(e) {
        function t(e) {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.lastSavedTime !== e.lastSavedTime
            }
        }, {
            key: "render",
            value: function() {
                if (!this.props.lastSavedTime)
                    return null;
                var e = this.getStyles()
                  , t = new Date(this.props.lastSavedTime)
                  , n = t.toDateString() === (new Date).toDateString() ? "today at " + (t.getHours() % 12 || 12) + ":" + (t.getMinutes() < 10 ? "0" : "") + t.getMinutes() + (t.getHours() >= 12 ? "pm" : "am") : t.getMonth() + 1 + "/" + t.getDate() + "/" + t.getFullYear() % 2e3;
                return l.default.createElement("div", {
                    className: "last-saved-container noselect",
                    style: e.lastSavedContainer
                }, "Last saved " + n)
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    lastSavedContainer: {
                        fontSize: 14,
                        fontWeight: "normal",
                        lineHeight: "14px",
                        display: "inline-block",
                        paddingTop: 2,
                        color: "#A392B1"
                    }
                }
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.TimeSigContainer = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = (n(119),
    n(0))
      , c = (n(15),
    t.TimeSigContainer = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.touchStartTempoBtn = n.touchStartTempoBtn.bind(n),
            n.openTempoScreen = n.openTempoScreen.bind(n),
            n
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return this.props.timeSig !== e.timeSig || this.props.bpm !== e.bpm
            }
        }, {
            key: "openTempoScreen",
            value: function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                this._touchStart && (this._touchStart = !1,
                (0,
                u.Dispatch)(u.ACTION.EDIT_SETTINGS.TEMPO_OPEN))
            }
        }, {
            key: "touchStartTempoBtn",
            value: function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                this._touchStart = !0
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    className: "time-sig-container"
                }, l.default.createElement("div", {
                    className: "tempo-button flex-component",
                    style: c.tempoBtn,
                    onTouchStart: this.touchStartTempoBtn,
                    onTouchEnd: this.openTempoScreen
                }, l.default.createElement("div", {
                    className: "icon tempo-icon flex-component"
                }), l.default.createElement("div", {
                    className: "tempo-value flex-component",
                    style: c.btnValue
                }, Math.round(this.props.bpm) + " BPM")))
            }
        }]),
        t
    }(l.default.Component),
    {
        tempoBtn: {
            alignItems: "center",
            WebkitAlignItems: "center",
            lineHeight: "30px",
            borderRadius: 4,
            fontSize: 14,
            color: "#fff"
        },
        btnValue: {
            alignSelf: "flex-end",
            WebkitAlignSelf: "flex-end",
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: "bold",
            color: "#fff"
        }
    })
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ArtistContainer = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = n(1)
          , u = i(l)
          , c = n(105)
          , h = i(c)
          , d = n(0)
          , p = n(68)
          , f = n(51);
        t.ArtistContainer = function(t) {
            function n(e) {
                return o(this, n),
                r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e))
            }
            return a(n, t),
            s(n, [{
                key: "autocompleteArtist",
                value: function(t) {
                    return e.get("/s/upload/autocomplete/artist", {
                        term: t,
                        appFamily: "MINIPIANO"
                    }).then(function(e) {
                        return (0 === Object.keys(e).length ? [] : e).map(function(e) {
                            return e.value
                        })
                    })
                }
            }, {
                key: "updateArtist",
                value: function(e) {
                    (0,
                    d.Dispatch)(d.ACTION.EDIT_SETTINGS.UPDATE_ARTIST, e.trim())
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.getStyles()
                      , t = !this.props.artist || !this.props.isCover && this.props.artist.length > h.default.maxArtistLength;
                    return u.default.createElement("div", {
                        className: "artist-container",
                        style: e.artistContainer
                    }, u.default.createElement(f.PublishBlocker, {
                        enabled: this.props.publishBlocked && t
                    }), u.default.createElement(p.AutocompleteInput, {
                        value: this.props.artist,
                        disabled: this.props.isCover,
                        maxLength: h.default.maxArtistLength,
                        autocompleteCallback: this.autocompleteArtist.bind(this),
                        placeholder: "Artist Name",
                        saveCallback: this.updateArtist.bind(this)
                    }))
                }
            }, {
                key: "getStyles",
                value: function() {
                    return {
                        artistContainer: {
                            position: "relative",
                            zIndex: 2
                        }
                    }
                }
            }]),
            n
        }(u.default.Component)
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.CatalogModal = void 0;
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = i(l)
      , c = n(0)
      , h = n(35)
      , d = n(69)
      , p = i(d);
    t.CatalogModal = function(e) {
        function t(e) {
            return o(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return a(t, e),
        s(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "setCover",
            value: function() {
                p.default.arrMatchClick(!0, this.props.data.cover.song_id),
                (0,
                c.Dispatch)(c.ACTION.EDIT_SETTINGS.SET_COVER, this.props.data.cover)
            }
        }, {
            key: "discardCover",
            value: function() {
                p.default.arrMatchClick(!1, this.props.data.cover.song_id),
                (0,
                c.Dispatch)(c.ACTION.EDIT_SETTINGS.DISCARD_COVER, this.props.data.cover)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getStyles()
                  , t = u.default.createElement("div", {
                    className: "catalog-top-container",
                    style: e.catalogTop
                }, "Do you mean...")
                  , n = u.default.createElement("div", {
                    className: "catalog-header",
                    style: e.catalogHeader
                }, this.props.data.cover.title)
                  , i = u.default.createElement("div", {
                    className: "catalog-body",
                    style: e.catalogBody
                }, this.props.data.cover.artist)
                  , o = u.default.createElement("div", {
                    className: "catalog-body",
                    style: e.catalogBody
                }, this.props.data.cover.composer);
                return u.default.createElement("div", {
                    className: "catalog-modal",
                    style: e.catalogModal
                }, u.default.createElement(h.PianoModal, {
                    open: this.props.data.visible,
                    iconContainer: t,
                    headerContainer: n,
                    bodyContainer: this.props.data.cover.artist ? i : o,
                    cancelBtnText: "No",
                    cancelCallback: this.discardCover.bind(this),
                    confirmBtnText: "Yes",
                    confirmCallback: this.setCover.bind(this)
                }))
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    catalogModal: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        overflow: "hidden",
                        visibility: this.props.data.visible ? "visible" : "hidden",
                        pointerEvents: this.props.data.visible ? "initial" : "none"
                    },
                    catalogTop: {
                        display: "inline-block",
                        width: "100%",
                        height: 17,
                        marginBottom: 16,
                        fontSize: 14,
                        lineHeight: "17px",
                        color: "#585858"
                    },
                    catalogHeader: {
                        width: "100%",
                        textAlign: "center",
                        color: "#444",
                        fontSize: 16,
                        fontWeight: "bold",
                        marginBottom: 7
                    },
                    catalogBody: {
                        width: "100%",
                        textAlign: "center",
                        color: "#585858",
                        fontSize: 14,
                        fontWeight: "normal",
                        marginBottom: 24
                    }
                }
            }
        }]),
        t
    }(u.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.EditSettings = void 0;
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = i(l)
      , c = n(29)
      , h = i(c)
      , d = n(0)
      , p = n(15)
      , f = n(221)
      , m = n(119)
      , y = n(229)
      , g = n(231)
      , v = n(220);
    t.EditSettings = function(e) {
        function t(e) {
            o(this, t);
            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                data: (0,
                h.default)({})
            },
            n
        }
        return a(t, e),
        s(t, [{
            key: "shouldComponentUpdate",
            value: function(e, t) {
                var n = !this.props.data.visible && e.data.visible || this.props.data.tempoScreen.visible && !e.data.tempoScreen.visible
                  , i = this.props.data.visible && !e.data.visible || e.data.tempoScreen.visible;
                return n ? (0,
                d.Dispatch)(d.ACTION.PIANO_MENU.SHOW) : i && (0,
                d.Dispatch)(d.ACTION.PIANO_MENU.HIDE),
                this.state.data !== t.data || this.props.data !== e.data || this.props.arrangement !== e.arrangement || this.props.publishing !== e.publishing
            }
        }, {
            key: "beginStartComposing",
            value: function(e) {
                this.setState({
                    data: this.state.data.set("startTapped", !0)
                })
            }
        }, {
            key: "endStartComposing",
            value: function() {
                this.setState({
                    data: this.state.data.set("startTapped", !1)
                })
            }
        }, {
            key: "startComposing",
            value: function() {
                (0,
                d.Dispatch)(d.ACTION.EDIT_SETTINGS.CLOSE)
            }
        }, {
            key: "beginPublish",
            value: function() {
                this.setState({
                    data: this.state.data.set("publishTapped", !0)
                })
            }
        }, {
            key: "endPublish",
            value: function() {
                this.setState({
                    data: this.state.data.set("publishTapped", !1)
                })
            }
        }, {
            key: "beginStartOver",
            value: function() {
                this.setState({
                    data: this.state.data.set("startOverTapped", !0)
                })
            }
        }, {
            key: "endStartOver",
            value: function() {
                this.setState({
                    data: this.state.data.set("startOverTapped", !1)
                })
            }
        }, {
            key: "startOver",
            value: function() {
                (0,
                d.Dispatch)(d.ACTION.MODALS.TOGGLE_START_OVER_MODAL, {
                    visible: !0,
                    resetDraft: !0,
                    fromApp: !1,
                    newArrangementJSON: null
                }, this)
            }
        }, {
            key: "initPreview",
            value: function() {
                (0,
                d.Dispatch)(d.ACTION.EDIT_SETTINGS.PUBLISH)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.data.visible
                  , t = this.props.arrangement.isEmpty
                  , n = "settings-container edit-settings-container " + (e ? "open" : "closed");
                return this.styles = {
                    editSettingsHeader: {
                        height: p.ClientInterface.android ? screen.height >= 600 ? 64 : 48 : window.innerWidth > 736 ? 64 : 44
                    },
                    settingsHeaderLabel: {
                        justifyContent: "center",
                        WebkitJustifyContent: "center",
                        lineHeight: p.ClientInterface.android ? screen.height >= 600 ? "68px" : "52px" : window.innerWidth > 736 ? "68px" : "44px"
                    },
                    headerRightContainer: {
                        position: "absolute",
                        right: 0,
                        top: 0,
                        margin: p.ClientInterface.android ? screen.height >= 600 ? "16px 24px 16px 0" : "8px 16px 8px 0" : window.innerWidth > 736 ? "16px 24px 16px" : "6px 16px 6px 0",
                        zIndex: 2
                    },
                    topContainer: {
                        position: "relative",
                        width: "100%",
                        padding: "0 16px",
                        boxSizing: "border-box"
                    },
                    btnsContainer: {
                        marginBottom: 23
                    },
                    publishBtn: {
                        justifyContent: "center",
                        WebkitJustifyContent: "center",
                        height: 44,
                        width: "50%",
                        margin: "0 10px 0 16px",
                        borderRadius: 4,
                        lineHeight: "48px",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#fff",
                        backgroundColor: this.state.data.publishTapped ? "#5C378A" : "#7949B6",
                        opacity: 1,
                        transition: "opacity 250ms ease",
                        WebkitTransition: "opacity 250ms ease"
                    },
                    startComposingBtn: {
                        justifyContent: "center",
                        WebkitJustifyContent: "center",
                        height: 44,
                        width: "50%",
                        margin: "0 16px 0 10px",
                        borderRadius: 4,
                        lineHeight: "48px",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#fff",
                        backgroundColor: this.state.data.startTapped ? "#0059C2" : "#0076FF",
                        textAlign: "center",
                        verticalAlign: "top"
                    },
                    lastSavedContainer: {
                        position: "relative",
                        justifyContent: "center",
                        WebkitJustifyContent: "center",
                        alignItems: "center",
                        WebkitAlignItems: "center",
                        height: 44,
                        margin: "0 0 32px",
                        lineHeight: "48px",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#fff",
                        backgroundColor: "rgba(255, 255, 255, " + (this.state.data.startOverTapped ? "0.24" : "0.08") + ")",
                        textAlign: "center"
                    },
                    startOverBtn: {
                        display: "block",
                        position: "absolute",
                        top: 8,
                        right: 0,
                        marginRight: 16
                    },
                    faqLinkContainer: {
                        fontSize: 14,
                        margin: "0 8px 32px",
                        color: "#A392B1",
                        textAlign: "center",
                        WebkitTextSizeAdjust: "none"
                    },
                    faqLink: {
                        textDecoration: "none",
                        color: "#fff"
                    }
                },
                u.default.createElement("div", {
                    className: n
                }, u.default.createElement("div", {
                    className: "settings-panel edit-settings-panel"
                }, u.default.createElement("div", {
                    className: "settings-header edit-settings-header",
                    style: this.styles.editSettingsHeader
                }, u.default.createElement("div", {
                    className: "settings-header-label flex-component noselect",
                    style: this.styles.settingsHeaderLabel
                }, "Composer", u.default.createElement(y.SettingsHelpBtn, null)), u.default.createElement("div", {
                    className: "header-right-container",
                    style: this.styles.headerRightContainer
                }, u.default.createElement(f.TimeSigContainer, {
                    timeSig: this.props.arrangement.timeSig,
                    bpm: this.props.arrangement.bpm
                }))), u.default.createElement("div", {
                    className: "settings-body edit-settings-body"
                }, u.default.createElement(g.SongDetailsContainer, {
                    arrangement: this.props.arrangement,
                    publishBlocked: this.props.data.publishBlocked,
                    termsChecked: this.props.data.termsChecked
                }), u.default.createElement("div", {
                    className: "settings-btns-container flex-component noselect",
                    style: this.styles.btnsContainer
                }, u.default.createElement("div", {
                    className: "preview-publish-btn flex-component",
                    style: this.styles.publishBtn,
                    onTouchStart: this.beginPublish.bind(this),
                    onMouseDown: this.beginPublish.bind(this),
                    onTouchEnd: this.endPublish.bind(this),
                    onMouseUp: this.endPublish.bind(this),
                    onClick: this.initPreview.bind(this)
                }, u.default.createElement("span", {
                    className: "publish-btn-text"
                }, this.props.publishing ? "Loading..." : "Preview & " + (this.props.arrangement.arrKey ? "Update" : "Publish"))), u.default.createElement("div", {
                    className: "start-composing-btn flex-component noselect",
                    style: this.styles.startComposingBtn,
                    onTouchStart: this.beginStartComposing.bind(this),
                    onMouseDown: this.beginStartComposing.bind(this),
                    onTouchEnd: this.endStartComposing.bind(this),
                    onMouseUp: this.endStartComposing.bind(this),
                    onClick: this.startComposing.bind(this)
                }, t && !this.props.arrangement.arrKey ? "Start Composing" : "Edit Song")), u.default.createElement("div", {
                    className: "last-saved-container flex-component noselect",
                    style: this.styles.lastSavedContainer
                }, u.default.createElement(v.LastSavedText, {
                    lastSavedTime: this.props.arrangement.lastSaved
                }), u.default.createElement("div", {
                    className: "icon discard-button",
                    style: this.styles.startOverBtn,
                    onTouchStart: this.beginStartOver.bind(this),
                    onMouseDown: this.beginStartOver.bind(this),
                    onTouchEnd: this.endStartOver.bind(this),
                    onMouseUp: this.endStartOver.bind(this),
                    onClick: this.startOver.bind(this)
                })), u.default.createElement("div", {
                    className: "faq-link-container noselect",
                    style: this.styles.faqLinkContainer
                }, "If you have any questions, please refer to our ", u.default.createElement("a", {
                    href: "/support/magicpiano#composer",
                    style: this.styles.faqLink
                }, "FAQ"), " or email support@smule.com"))), u.default.createElement(m.TempoScreen, {
                    data: this.props.data.tempoScreen,
                    bpm: this.props.arrangement.bpm,
                    timeSig: this.props.arrangement.timeSig
                }))
            }
        }]),
        t
    }(u.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.HistoryBtn = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(l)
      , c = n(0)
      , h = function() {}
      , d = (t.HistoryBtn = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.undo = n.undo.bind(n),
            n.redo = n.redo.bind(n),
            n
        }
        return r(t, e),
        s(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "undo",
            value: function() {
                (0,
                c.Dispatch)(c.ACTION.HISTORY.UNDO)
            }
        }, {
            key: "redo",
            value: function() {
                (0,
                c.Dispatch)(c.ACTION.HISTORY.REDO)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.data.canUndo && !this.props.data.disabled
                  , t = this.props.data.canRedo && !this.props.data.disabled;
                return u.default.createElement("div", {
                    style: d.wrapper
                }, u.default.createElement("div", {
                    onTouchEnd: e ? this.undo : h,
                    className: "icon undo-btn",
                    style: a({}, d.btn, e ? {} : d.disabled)
                }), u.default.createElement("div", {
                    onTouchEnd: t ? this.redo : h,
                    className: "icon redo-btn",
                    style: a({}, d.btn, t ? {} : d.hide)
                }))
            }
        }]),
        t
    }(u.default.Component),
    {
        wrapper: {
            position: "relative",
            zIndex: 3
        },
        btn: {
            position: "relative",
            width: 48,
            height: 48,
            margin: "0 auto",
            transition: "opacity 250ms ease",
            WebkitTransition: "opacity 250ms ease"
        },
        disabled: {
            opacity: .24
        },
        hide: {
            display: "none"
        }
    })
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function r(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.KeysigEditHitBox = void 0;
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , s = n(1)
          , l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s)
          , u = n(0);
        t.KeysigEditHitBox = function(t) {
            function n(e) {
                return i(this, n),
                o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e))
            }
            return r(n, t),
            a(n, [{
                key: "shouldComponentUpdate",
                value: function(e) {
                    return this.props.data.visible != e.data.visible
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.props.data.visible ? this.initListeners() : this.removeListeners()
                }
            }, {
                key: "initListeners",
                value: function() {
                    var t = {}
                      , n = e(this.refs.hitbox)
                      , i = n.offset().top;
                    n.on("touchstart", function(e) {
                        var n = e.originalEvent;
                        return t.prevY = t.y = n.touches && n.touches[0].clientY || n.clientY - i,
                        t.moveDist = 0,
                        t.signedDist = 0,
                        !1
                    }
                    .bind(this)),
                    n.on("touchmove", function(e) {
                        var n = e.originalEvent;
                        return t.y = n.touches && n.touches[0].clientY || n.clientY - i,
                        t.moveDist += Math.abs(t.y - t.prevY),
                        t.signedDist += t.y - t.prevY,
                        t.prevY = t.y,
                        !1
                    }
                    .bind(this)),
                    n.on("touchend", function(e) {
                        return t.moveDist < 10 && !this.props.playing ? (0,
                        u.Dispatch)(u.ACTION.KEYSIG_SCREEN.OPEN) : t.moveDist >= 10 && (0,
                        u.Dispatch)(u.ACTION.CAMERA.TWEEN_TO_ADJ_MEASURE, {
                            delta: Math.sign(t.signedDist)
                        }),
                        t.moveDist = 0,
                        t.signedDist = 0,
                        !1
                    }
                    .bind(this))
                }
            }, {
                key: "removeListeners",
                value: function() {
                    e(this.refs.hitbox).off("touchstart", "touchmove", "touchend")
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.props.data.visible ? this.initListeners() : this.removeListeners()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.removeListeners()
                }
            }, {
                key: "render",
                value: function() {
                    return l.default.createElement("div", {
                        ref: "hitbox",
                        style: {
                            position: "absolute",
                            zIndex: 2,
                            height: this.props.viewConfig.barWindowScrollArea.h,
                            width: this.props.viewConfig.barWindowScrollArea.w,
                            top: this.props.viewConfig.hitLineY - .75 * this.props.viewConfig.barWindowScrollArea.h
                        }
                    })
                }
            }]),
            n
        }(l.default.Component)
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PegboardPublishBtn = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(0);
    t.PegboardPublishBtn = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                tapped: !1
            },
            n
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data || this.props.arrangement !== e.arrangement || this.props.publishing !== e.publishing
            }
        }, {
            key: "initPreview",
            value: function() {
                (0,
                u.Dispatch)(u.ACTION.EDIT_SETTINGS.PUBLISH)
            }
        }, {
            key: "startTap",
            value: function() {
                this.state.tapped || this.setState({
                    tapped: !0
                })
            }
        }, {
            key: "endTap",
            value: function() {
                this.setState({
                    tapped: !1
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getStyles();
                return l.default.createElement("div", {
                    className: "pegboard-publish-container noselect",
                    style: e.publishContainer
                }, l.default.createElement("div", {
                    className: "pegboard-publish-btn",
                    style: e.publishBtn,
                    onTouchStart: this.startTap.bind(this),
                    onMouseDown: this.startTap.bind(this),
                    onTouchEnd: this.endTap.bind(this),
                    onMouseUp: this.endTap.bind(this),
                    onClick: this.initPreview.bind(this)
                }, l.default.createElement("span", {
                    className: "publish-btn-text"
                }, this.props.publishing ? "Loading..." : "Preview & " + (this.props.arrangement.arrKey ? "Update" : "Publish"))))
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    publishContainer: {
                        position: "absolute",
                        top: 8,
                        right: 8,
                        height: 44,
                        width: 164,
                        overflow: "hidden",
                        borderRadius: 4,
                        padding: 6,
                        boxSizing: "border-box",
                        backgroundColor: "rgba(0, 0, 0, 0.32)",
                        transform: "scale(" + (this.props.publishing || this.props.data.visible ? 1 : 0) + ")",
                        WebkitTransform: "scale(" + (this.props.publishing || this.props.data.visible ? 1 : 0) + ")",
                        transition: "height 250ms ease, width 250ms ease, transform 250ms ease",
                        WebkitTransition: "height 250ms ease, width 250ms ease, -webkit-transform 250ms ease"
                    },
                    publishBtn: {
                        height: "100%",
                        width: "100%",
                        borderRadius: 4,
                        textAlign: "center",
                        lineHeight: "32px",
                        fontSize: 14,
                        color: "#fff",
                        opacity: 1,
                        backgroundColor: this.state.tapped ? "#412864" : "#7949B6",
                        transition: "background-color 250ms ease",
                        WebkitTransition: "background-color 250ms ease"
                    }
                }
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.RestrictedModal = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(0)
      , c = n(35);
    t.RestrictedModal = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getStyles()
                  , t = l.default.createElement("div", {
                    className: "icon restricted-icon",
                    style: e.restrictedIcon
                })
                  , n = l.default.createElement("div", {
                    className: "restricted-body",
                    style: e.restrictedBody
                }, "Due to licensing restrictions, this song cannot be added to the Songbook at this time.");
                return l.default.createElement("div", {
                    className: "catalog-modal",
                    style: e.catalogModal
                }, l.default.createElement(c.PianoModal, {
                    open: this.props.data.visible,
                    iconContainer: t,
                    headerContainer: null,
                    bodyContainer: n,
                    confirmBtnText: "Okay",
                    confirmCallback: this.confirm.bind(this)
                }))
            }
        }, {
            key: "confirm",
            value: function() {
                (0,
                u.Dispatch)(u.ACTION.MODALS.TOGGLE_RESTRICTED_MODAL, !1)
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    catalogModal: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        overflow: "hidden",
                        visibility: this.props.data.visible ? "visible" : "hidden",
                        pointerEvents: this.props.data.visible ? "initial" : "none"
                    },
                    restrictedIcon: {
                        display: "inline-block",
                        width: 25,
                        height: 25,
                        marginBottom: 15
                    },
                    restrictedBody: {
                        width: "100%",
                        height: 34,
                        textAlign: "center",
                        color: "#585858",
                        fontSize: 14,
                        fontWeight: "normal",
                        marginBottom: 24
                    }
                }
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.SettingsHelpBtn = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(0);
    t.SettingsHelpBtn = function(e) {
        function t(e) {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return r(t, e),
        a(t, [{
            key: "showHelpModal",
            value: function() {
                (0,
                u.Dispatch)(u.ACTION.MODALS.TOGGLE_HELP_MODAL, {
                    visible: !0,
                    forced: !0
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getStyles();
                return l.default.createElement("div", {
                    className: "icon help-btn flex-component",
                    style: e.settingsHelpBtn,
                    onClick: this.showHelpModal.bind(this)
                })
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    settingsHelpBtn: {
                        justifyContent: "center",
                        WebkitJustifyContent: "center",
                        alignSelf: "center",
                        WebkitAlignSelf: "center"
                    }
                }
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Sidebar = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(l)
      , c = n(0)
      , h = n(236)
      , d = n(239)
      , p = n(225)
      , f = n(226);
    t.Sidebar = function(e) {
        function t(e) {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return r(t, e),
        s(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "openSettings",
            value: function() {
                this.settingsOpenTimeout && clearTimeout(this.settingsOpenTimeout),
                this.settingsOpenTimeout = setTimeout(function() {
                    (0,
                    c.Dispatch)(c.ACTION.EDIT_SETTINGS.OPEN)
                }, 100)
            }
        }, {
            key: "openZoomMenu",
            value: function(e) {
                this.setState({
                    zoomBtnTapped: !0
                }),
                e.preventDefault(),
                e.stopPropagation()
            }
        }, {
            key: "openZoomMenuEnd",
            value: function(e) {
                this.setState({
                    zoomBtnTapped: !1
                }),
                this.props.data.playBtn.playing || (0,
                c.Dispatch)(c.ACTION.ZOOM_MENU.OPEN)
            }
        }, {
            key: "renderKeySigEditHitBox",
            value: function(e) {
                return "EDIT" == e ? u.default.createElement(f.KeysigEditHitBox, {
                    data: this.props.data.keySigEditHitBox,
                    viewConfig: this.props.viewConfig
                }) : null
            }
        }, {
            key: "renderHistoryBtn",
            value: function() {
                return u.default.createElement(p.HistoryBtn, {
                    data: this.props.data.historyBtn
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.viewConfig.viewId
                  , t = "icon settings-button " + ("PREVIEW" == e ? "preview-settings-button" : "edit-settings-button")
                  , n = "EDIT" == e ? 0 : "100%"
                  , i = this.getStyles();
                return u.default.createElement("div", {
                    id: "sidebar"
                }, u.default.createElement("div", {
                    ref: "sidebar",
                    className: "sidebar",
                    style: i.sidebar
                }, u.default.createElement("div", {
                    className: "sidebar-top-gradient",
                    style: a({}, i.topGradient, {
                        height: n
                    })
                }), u.default.createElement("div", {
                    className: t,
                    style: i.settingsIcon,
                    onTouchEnd: this.openSettings.bind(this),
                    onMouseUp: this.openSettings.bind(this)
                }), u.default.createElement("div", {
                    className: "icon zoom-sidebar-icon",
                    style: i.zoomSidebarIcon,
                    onTouchStart: this.openZoomMenu.bind(this),
                    onTouchEnd: this.openZoomMenuEnd.bind(this),
                    onMouseDown: this.openZoomMenu.bind(this),
                    onMouseUp: this.openZoomMenuEnd.bind(this)
                }), this.renderHistoryBtn(), u.default.createElement(h.ImportBtn, null), u.default.createElement(d.PlayBtn, {
                    data: this.props.data.playBtn,
                    viewConfig: this.props.viewConfig
                }), this.renderKeySigEditHitBox(e)))
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    sidebar: {
                        width: this.props.config.sidebarWidth,
                        opacity: this.props.data.fadeOut ? .24 : 1,
                        pointerEvents: this.props.data.fadeOut ? "none" : "auto",
                        left: this.props.data.visible ? 0 : -this.props.config.sidebarWidth
                    },
                    topGradient: {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        zIndex: 2,
                        backgroundSize: "cover",
                        pointerEvents: "none"
                    },
                    midGradient: {
                        position: "absolute",
                        left: 0,
                        width: "100%",
                        height: 96,
                        zIndex: 2,
                        pointerEvents: "none"
                    },
                    settingsIcon: {
                        position: "relative",
                        margin: "8px 8px 0 8px",
                        zIndex: 5
                    },
                    zoomSidebarIcon: {
                        position: "relative",
                        zIndex: 3,
                        margin: "0 8px",
                        opacity: this.props.data.playBtn.playing ? .24 : 1,
                        transition: "opacity 250ms ease",
                        WebkitTransition: "opacity 250ms ease"
                    },
                    botGradient: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 64,
                        height: "100%",
                        zIndex: 2,
                        pointerEvents: "none"
                    }
                }
            }
        }]),
        t
    }(u.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.SongDetailsContainer = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(0)
      , c = n(234)
      , h = n(222)
      , d = n(232)
      , p = n(233)
      , f = n(51);
    t.SongDetailsContainer = function(e) {
        function t(e) {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.arrangement !== e.arrangement || this.props.publishBlocked !== e.publishBlocked || this.props.termsChecked !== e.termsChecked
            }
        }, {
            key: "toggleTermsCheck",
            value: function(e) {
                this.checkTriggered || (this.checkTriggered = !0,
                setTimeout(function() {
                    this.checkTriggered = !1
                }
                .bind(this), 250),
                e.preventDefault(),
                e.stopPropagation(),
                (0,
                u.Dispatch)(u.ACTION.EDIT_SETTINGS.TOGGLE_TOS))
            }
        }, {
            key: "preventDefaultLink",
            value: function(e) {
                e.preventDefault(),
                window.location = "/termsofservice"
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getStyles()
                  , t = null != this.props.arrangement.cover;
                return l.default.createElement("div", {
                    className: "song-details-container",
                    style: e.songDetailsContainer
                }, l.default.createElement(c.TitleContainer, {
                    title: this.props.arrangement.title,
                    isCover: t,
                    publishBlocked: this.props.publishBlocked
                }), l.default.createElement(d.SubtitleContainer, {
                    subtitle: this.props.arrangement.subtitle,
                    songId: this.props.arrangement.songId,
                    publishBlocked: this.props.publishBlocked
                }), l.default.createElement(h.ArtistContainer, {
                    artist: t ? this.props.arrangement.cover.artist : this.props.arrangement.artist,
                    isCover: t,
                    publishBlocked: this.props.publishBlocked
                }), l.default.createElement(p.TagsContainer, {
                    tags: this.props.arrangement.tags
                }), l.default.createElement("div", {
                    className: "terms-check-container",
                    style: e.termsCheckContainer
                }, l.default.createElement(f.PublishBlocker, {
                    enabled: this.props.publishBlocked && !this.props.termsChecked,
                    extraContainerStyles: {
                        top: 9
                    }
                }), l.default.createElement("label", {
                    className: "terms-check",
                    onClick: this.toggleTermsCheck.bind(this)
                }, l.default.createElement("input", {
                    checked: this.props.termsChecked,
                    type: "checkbox",
                    style: e.termsCheckInput
                }), l.default.createElement("div", {
                    className: "icon terms-check-icon " + (this.props.termsChecked ? "on" : "off"),
                    style: e.termsCheckIcon
                }), l.default.createElement("div", {
                    className: "terms-text noselect",
                    style: e.termsText
                }, "I agree that this song complies with Smule's", l.default.createElement("a", {
                    href: "/termsofservice",
                    className: "terms-link",
                    style: e.termsLink,
                    onTouchStart: this.preventDefaultLink.bind(this),
                    onMouseDown: this.preventDefaultLink.bind(this)
                }, " Terms of Service "), "and does not infringe on anyone else's rights."))))
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    songDetailsContainer: {
                        width: "100%"
                    },
                    termsCheckContainer: {
                        padding: "18px 32px 20px",
                        position: "relative",
                        height: "" + (this.props.arrangement.arrKey ? 0 : "initial"),
                        visibility: this.props.arrangement.arrKey ? "hidden" : "visible"
                    },
                    termsCheckInput: {
                        display: "none"
                    },
                    termsCheckIcon: {
                        position: "absolute",
                        top: 12,
                        height: 44,
                        width: 44
                    },
                    termsText: {
                        display: "table-cell",
                        paddingLeft: "54px",
                        height: 38,
                        verticalAlign: "middle",
                        color: "#A392B1",
                        fontSize: 14,
                        fontWeight: "normal"
                    },
                    termsLink: {
                        color: "#fff",
                        fontWeight: "bold",
                        textDecoration: "none"
                    }
                }
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function r(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SubtitleContainer = void 0;
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , s = n(1)
          , l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s)
          , u = n(0)
          , c = (n(68),
        n(51))
          , h = n(15);
        t.SubtitleContainer = function(t) {
            function n(e) {
                i(this, n);
                var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                return t.state = {
                    subtitle: e.subtitle
                },
                t
            }
            return r(n, t),
            a(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.setState({
                        subtitle: e.subtitle
                    })
                }
            }, {
                key: "updateSubtitle",
                value: function() {
                    this.setState({
                        subtitle: this.refs.subtitleInput.value
                    }),
                    this.updateDebounced && clearTimeout(this.updateDebounced),
                    this.updateDebounced = setTimeout(function() {
                        (0,
                        u.Dispatch)(u.ACTION.EDIT_SETTINGS.UPDATE_SUBTITLE, this.refs.subtitleInput.value)
                    }
                    .bind(this), 250)
                }
            }, {
                key: "onKeyUp",
                value: function(e) {
                    13 != e.keyCode && 13 != e.which || e.target.blur()
                }
            }, {
                key: "onFocus",
                value: function(e) {
                    (0,
                    u.Dispatch)(u.ACTION.PIANO_MENU.HIDE),
                    this.setState({
                        focused: !0
                    }),
                    this.androidFocus(e)
                }
            }, {
                key: "androidFocus",
                value: function(t) {
                    if (h.ClientInterface.android) {
                        var n = e(".edit-settings-body")
                          , i = e(this.refs.subtitleInput).offset().top
                          , o = n.scrollTop()
                          , r = o + i - e(".settings-header").height();
                        n.scrollTop(r)
                    }
                }
            }, {
                key: "onBlur",
                value: function(e) {
                    if ((0,
                    u.Dispatch)(u.ACTION.PIANO_MENU.SHOW),
                    this.blurDisabled)
                        return void e.preventDefault();
                    this.setState({
                        focused: !1,
                        subtitle: this.refs.subtitleInput.value
                    }),
                    (0,
                    u.Dispatch)(u.ACTION.EDIT_SETTINGS.UPDATE_SUBTITLE, this.refs.subtitleInput.value.trim())
                }
            }, {
                key: "clear",
                value: function(e) {
                    e.preventDefault(),
                    this.blurDisabled = !0
                }
            }, {
                key: "clearEnd",
                value: function(e) {
                    e.preventDefault(),
                    this.blurDisabled = !1,
                    this.refs.subtitleInput.focus(),
                    this.refs.subtitleInput.value = "",
                    this.setState({
                        focused: !0,
                        subtitle: ""
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.getStyles();
                    return l.default.createElement("div", {
                        className: "subtitle-container",
                        style: e.subtitleContainer
                    }, l.default.createElement(c.PublishBlocker, {
                        enabled: this.props.publishBlocked && this.props.songId && !this.props.subtitle
                    }), l.default.createElement("input", {
                        onChange: this.updateSubtitle.bind(this),
                        onKeyUp: this.onKeyUp.bind(this),
                        onFocus: this.onFocus.bind(this),
                        onBlur: this.onBlur.bind(this),
                        maxLength: ArrangementConfigs.maxNameLength,
                        disabled: !this.props.songId,
                        autoCorrect: "off",
                        value: this.state.subtitle,
                        ref: "subtitleInput",
                        placeholder: "Subtitle",
                        style: e.subtitleInput
                    }), l.default.createElement("div", {
                        className: "icon close-input-btn",
                        style: e.closeInputBtn,
                        onTouchStart: this.clear.bind(this),
                        onMouseDown: this.clear.bind(this),
                        onTouchEnd: this.clearEnd.bind(this),
                        onMouseUp: this.clearEnd.bind(this)
                    }))
                }
            }, {
                key: "getStyles",
                value: function() {
                    return {
                        subtitleContainer: {
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            height: this.props.songId ? 48 : 0,
                            borderBottom: this.props.songId ? "1px solid #514D72" : 0,
                            transition: "height 500ms ease, border 500ms ease",
                            zIndex: 1
                        },
                        subtitleInput: {
                            position: "relative",
                            width: "100%",
                            height: 48,
                            backgroundColor: "rgba(255, 255, 255, " + (this.state.focused ? "0.24" : "0.08") + ")",
                            border: "none",
                            borderRadius: 0,
                            outline: "none",
                            color: "#FFF",
                            fontSize: 16,
                            paddingLeft: 32
                        },
                        closeInputBtn: {
                            display: this.state.focused ? "block" : "none",
                            position: "absolute",
                            zIndex: 2,
                            top: 8,
                            right: 28,
                            width: 32,
                            height: 32
                        }
                    }
                }
            }]),
            n
        }(l.default.Component)
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TagsContainer = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = n(1)
          , u = i(l)
          , c = n(105)
          , h = i(c)
          , d = n(0)
          , p = n(235);
        t.TagsContainer = function(t) {
            function n(e) {
                return o(this, n),
                r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e))
            }
            return a(n, t),
            s(n, [{
                key: "autocompleteTag",
                value: function(t) {
                    return e.get("/s/upload/autocomplete/tag", {
                        term: t,
                        appFamily: "MINIPIANO"
                    }).then(function(e) {
                        return (0 === Object.keys(e).length ? [] : e).map(function(e) {
                            return e.value
                        })
                    })
                }
            }, {
                key: "updateTags",
                value: function(e) {
                    (0,
                    d.Dispatch)(d.ACTION.EDIT_SETTINGS.UPDATE_TAGS, e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.getStyles();
                    return u.default.createElement("div", {
                        className: "tags-container",
                        style: e.tagsContainer
                    }, u.default.createElement(p.AutocompleteTagInput, {
                        tags: this.props.tags.asMutable(),
                        minTagLength: h.default.minTagLength,
                        maxTagLength: h.default.maxTagLength,
                        maxTagTotal: h.default.maxTotalTagsLength,
                        placeholder: "Tags",
                        autocompleteCallback: this.autocompleteTag.bind(this),
                        saveCallback: this.updateTags.bind(this)
                    }))
                }
            }, {
                key: "getStyles",
                value: function() {
                    return {
                        tagsContainer: {
                            position: "relative",
                            zIndex: 1
                        }
                    }
                }
            }]),
            n
        }(u.default.Component)
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TitleContainer = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = n(1)
          , u = i(l)
          , c = n(105)
          , h = i(c)
          , d = n(0)
          , p = n(68)
          , f = n(51);
        t.TitleContainer = function(t) {
            function n(e) {
                return o(this, n),
                r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e))
            }
            return a(n, t),
            s(n, [{
                key: "autocompleteTitle",
                value: function(t) {
                    return e.get("/s/upload/autocomplete/title", {
                        term: t,
                        appFamily: "MINIPIANO"
                    }).then(function(e) {
                        return (0 === Object.keys(e).length ? [] : e).map(function(e) {
                            return e.title
                        })
                    })
                }
            }, {
                key: "updateTitle",
                value: function(e) {
                    (0,
                    d.Dispatch)(d.ACTION.EDIT_SETTINGS.UPDATE_TITLE, e.trim())
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.getStyles()
                      , t = !this.props.title || !this.props.isCover && this.props.title.length > h.default.maxNameLength;
                    return u.default.createElement("div", {
                        className: "title-container",
                        style: e.titleContainer
                    }, u.default.createElement(f.PublishBlocker, {
                        enabled: this.props.publishBlocked && t
                    }), u.default.createElement(p.AutocompleteInput, {
                        value: this.props.title,
                        disabled: this.props.isCover,
                        maxLength: h.default.maxNameLength,
                        autocompleteCallback: this.autocompleteTitle.bind(this),
                        placeholder: "Song Title",
                        saveCallback: this.updateTitle.bind(this)
                    }))
                }
            }, {
                key: "getStyles",
                value: function() {
                    return {
                        titleContainer: {
                            position: "relative",
                            zIndex: 3
                        }
                    }
                }
            }]),
            n
        }(u.default.Component)
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.AutocompleteTagInput = void 0;
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , l = n(1)
          , u = i(l)
          , c = n(116)
          , h = n(15)
          , d = n(0)
          , p = n(125)
          , f = i(p)
          , m = new RegExp("[^A-Za-z]", "g")
          , y = (t.AutocompleteTagInput = function(t) {
            function n(e) {
                o(this, n);
                var t = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                return t.state = {
                    open: !1,
                    suggestions: [],
                    tagTotalLength: t.props.tags.join("").length,
                    selectedTagIndex: null
                },
                t.focusInput = t.focusInput.bind(t),
                t.onKeyDown = t.onKeyDown.bind(t),
                t.open = t.open.bind(t),
                t.onBlur = t.onBlur.bind(t),
                t.clearInput = t.clearInput.bind(t),
                t.onChange = t.onChange.bind(t),
                t.inputRateLimit = new f.default,
                t
            }
            return a(n, t),
            s(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.setState({
                        tagTotalLength: e.tags.join("").length
                    })
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    var t = e.keyCode || e.which;
                    this.oldValue = e.target.value,
                    13 == t || 32 == t || 9 == t ? (0 !== e.target.value.length ? this.addTag(e.target.value) : e.target.blur(),
                    e.preventDefault()) : 8 == t && this.props.tags.length > 0 && "" == e.target.value.trim() ? (null === this.state.selectedTagIndex ? this.setState({
                        selectedTagIndex: this.props.tags.length - 1
                    }) : this.removeTag(this.state.selectedTagIndex),
                    e.preventDefault()) : this.setState({
                        selectedTagIndex: null
                    })
                }
            }, {
                key: "onChange",
                value: function(e) {
                    /(\s|\u3000)+$/.test(e.target.value) ? (e.target.value = e.target.value.trim(),
                    0 === e.target.value.length || this.reachTagLimits(e.target.value) || this.addTag(e.target.value)) : this.reachTagLimits(e.target.value) && (e.target.value = this.oldValue),
                    this.updateSuggestions()
                }
            }, {
                key: "reachTagLimits",
                value: function(e) {
                    return e.length > this.props.maxTagLength || this.state.tagTotalLength + this.props.tags.length + e.length > this.props.maxTagTotal
                }
            }, {
                key: "focusInput",
                value: function() {
                    this.blurTimeout && clearTimeout(this.blurTimeout),
                    this.open(),
                    this.refs.input.focus(),
                    this.inputRateLimit.reset()
                }
            }, {
                key: "onBlur",
                value: function(e) {
                    (0,
                    d.Dispatch)(d.ACTION.PIANO_MENU.SHOW),
                    this.setState({
                        selectedTagIndex: null
                    });
                    var t = e.target.value;
                    this.blurTimeout = setTimeout(function() {
                        this.addTag(t),
                        this.inputRateLimit.reset(),
                        this.clearInput(),
                        this.setState({
                            open: !1
                        })
                    }
                    .bind(this), 100)
                }
            }, {
                key: "addTag",
                value: function(e) {
                    var t = n._filterTagName(e);
                    if (t.length >= this.props.minTagLength) {
                        if (this.clearInput(),
                        -1 !== this.props.tags.indexOf(t))
                            return;
                        var i = this.props.tags.concat([t]);
                        this.save(i)
                    }
                }
            }, {
                key: "removeTag",
                value: function(e) {
                    var t = this.props.tags.slice();
                    t.splice(e, 1),
                    this.setState({
                        selectedTagIndex: null
                    }),
                    this.save(t)
                }
            }, {
                key: "selectTag",
                value: function(e) {
                    this.clearInput(),
                    this.setState({
                        selectedTagIndex: e
                    })
                }
            }, {
                key: "renderTags",
                value: function() {
                    for (var e = [], t = 0; t < this.props.tags.length; t++)
                        e.push(u.default.createElement(y, {
                            key: "tag-" + t,
                            tagName: this.props.tags[t],
                            selected: this.state.selectedTagIndex === t,
                            onClick: this.selectTag.bind(this, t)
                        }));
                    return e
                }
            }, {
                key: "renderSuggestions",
                value: function() {
                    return this.state.suggestions.filter(function(e) {
                        return e.length > 0
                    }).map(function(e) {
                        return u.default.createElement(c.AutocompleteSuggestion, {
                            key: e,
                            suggestion: e,
                            clickCallback: this.pickSuggestion.bind(this, e)
                        })
                    }
                    .bind(this))
                }
            }, {
                key: "updateSuggestions",
                value: function() {
                    this.debouncedUpdate && clearTimeout(this.debouncedUpdate);
                    var e = this.refs.input.value;
                    this.inputRateLimit.allow(e) && (this.debouncedUpdate = setTimeout(function() {
                        this.refs.input.value.length > 0 && this.props.autocompleteCallback(e).then(function(e) {
                            this.setState({
                                suggestions: e
                            })
                        }
                        .bind(this))
                    }
                    .bind(this), 250))
                }
            }, {
                key: "pickSuggestion",
                value: function(e, t) {
                    if (t.preventDefault(),
                    this.clearInput(),
                    -1 === this.props.tags.indexOf(e)) {
                        var n = this.props.tags.concat([e]);
                        this.save(n)
                    }
                }
            }, {
                key: "save",
                value: function(e) {
                    this.props.saveCallback(e)
                }
            }, {
                key: "clearInput",
                value: function() {
                    this.refs.input.value = "",
                    this.setState({
                        suggestions: []
                    })
                }
            }, {
                key: "open",
                value: function() {
                    (0,
                    d.Dispatch)(d.ACTION.PIANO_MENU.HIDE),
                    this.setState({
                        open: !0
                    }),
                    this.updateSuggestions(this.refs.input.value),
                    this.androidFocus()
                }
            }, {
                key: "androidFocus",
                value: function(t) {
                    if (h.ClientInterface.android) {
                        var n = e(".edit-settings-body")
                          , i = e(this.refs.input).offset().top
                          , o = n.scrollTop()
                          , r = o + i - e(".settings-header").height();
                        n.scrollTop(r)
                    }
                }
            }, {
                key: "close",
                value: function() {
                    this.setState({
                        open: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.getStyles();
                    return u.default.createElement("div", {
                        className: "autocomplete-input-container",
                        style: e.autocompleteInputContainer,
                        onClick: this.focusInput
                    }, this.renderTags(), u.default.createElement("input", {
                        ref: "input",
                        onKeyDown: this.onKeyDown,
                        onFocus: this.open,
                        onBlur: this.onBlur,
                        onChange: this.onChange,
                        autoCorrect: "off",
                        placeholder: 0 == this.props.tags.length ? this.props.placeholder : "",
                        style: e.autocompleteInput
                    }), u.default.createElement("div", {
                        className: "icon close-input-btn",
                        style: e.closeInputBtn,
                        onClick: this.clearInput
                    }), u.default.createElement("div", {
                        className: "suggestions-container",
                        style: e.suggestionsContainer
                    }, this.renderSuggestions()))
                }
            }, {
                key: "getStyles",
                value: function() {
                    return {
                        autocompleteInputContainer: {
                            width: "100%",
                            boxSizing: "border-box",
                            minHeight: 48,
                            borderBottom: "1px solid #514D72",
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "rgba(255, 255, 255, " + (this.state.open ? "0.24" : "0.08") + ")",
                            flexWrap: "wrap",
                            alignContent: "space-around",
                            padding: "0 60px 0 24px"
                        },
                        autocompleteInput: {
                            minWidth: 32,
                            height: 48,
                            lineHeight: "26px",
                            backgroundColor: "rgba(255, 255, 255, 0)",
                            border: "none",
                            borderRadius: 0,
                            outline: "none",
                            color: "#FFF",
                            fontSize: 16,
                            fontFamily: '"ProximaNova","Helvetica Neue","Helvetica","Arial",sans-serif',
                            paddingLeft: 8
                        },
                        closeInputBtn: {
                            display: this.state.open && this.refs.input.value ? "block" : "none",
                            position: "absolute",
                            zIndex: 2,
                            top: 8,
                            right: 28,
                            width: 32,
                            height: 32
                        },
                        suggestionsContainer: {
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            zIndex: 2,
                            display: this.state.open ? "block" : "none",
                            background: "linear-gradient(45deg, rgba(61, 66, 119, 0.76), rgba(98, 47, 115, 0.76)), linear-gradient(black, black)",
                            width: "100%"
                        },
                        suggestionRow: {
                            height: 48,
                            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                            color: "#fff",
                            fontSize: 16,
                            lineHeight: "48px",
                            paddingLeft: 32
                        }
                    }
                }
            }], [{
                key: "_filterTagName",
                value: function(e) {
                    return e.replace(m, "")
                }
            }]),
            n
        }(u.default.Component),
        function(e) {
            function t(e) {
                return o(this, t),
                r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return a(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    var e = this.getStyles();
                    return u.default.createElement("div", {
                        className: "tag",
                        style: e.tag.default,
                        onClick: this.props.onClick
                    }, this.props.tagName)
                }
            }, {
                key: "getStyles",
                value: function() {
                    return {
                        tag: {
                            default: {
                                display: "inline-block",
                                color: this.props.selected ? "#352852" : "#665778",
                                fontSize: 16,
                                fontWeight: "bold",
                                lineHeight: "32px",
                                backgroundColor: this.props.selected ? "#E8E4EC" : "#A392B1",
                                padding: "0 8px",
                                borderRadius: "4px",
                                height: 28,
                                margin: "8px 3px",
                                whiteSpace: "nowrap"
                            }
                        }
                    }
                }
            }]),
            t
        }(u.default.Component))
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ImportBtn = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(260)
      , c = n(0);
    n(4),
    n(41),
    t.ImportBtn = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        a(t, [{
            key: "componentDidMount",
            value: function() {
                var e = [];
                this.oKonamiHandler = function(t) {
                    if (e.push(t.keyCode),
                    e.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
                        window.removeEventListener("keydown", this.oKonamiHandler);
                        var n = new Event("click",{
                            bubbles: !0
                        });
                        this.refs.midi.dispatchEvent(n)
                    }
                }
                .bind(this),
                window.addEventListener("keydown", this.oKonamiHandler)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("keydown", this.oKonamiHandler)
            }
        }, {
            key: "importMidi",
            value: function() {
                var e = this.refs.midi;
                if (0 != e.files.length) {
                    var t = new FileReader;
                    t.onload = function(n) {
                        (0,
                        u.uploadMidi)({
                            file: t.result,
                            name: e.files[0].name.replace(/\..*$/, "")
                        }, {
                            success: function(e) {
                                (0,
                                c.Signal)(c.EVT.ARRANGEMENT.LOAD, {
                                    arrangement: e
                                }, this)
                            }
                        })
                    }
                    .bind(this),
                    t.readAsDataURL(e.files[0])
                }
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    style: {
                        position: "relative",
                        width: 48,
                        height: 48,
                        margin: 8,
                        zIndex: 5,
                        textAlign: "center",
                        fontSize: "12px",
                        display: "none"
                    }
                }, l.default.createElement("label", {
                    htmlFor: "midi-upload"
                }, "Import", l.default.createElement("br", null), l.default.createElement("span", {
                    style: {
                        fontSize: "9px"
                    }
                }, "(debug)")), l.default.createElement("input", {
                    ref: "midi",
                    id: "midi-upload",
                    type: "file",
                    accept: "audio/midi",
                    onChange: this.importMidi.bind(this),
                    style: {
                        visibility: "hidden",
                        position: "absolute"
                    }
                }))
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Metronome = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = {
        0: 1,
        1: .25,
        2: .25,
        3: .25
    }
      , c = [.16, .08, .08, .08]
      , h = (t.Metronome = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                active: !1
            },
            n.tick = n.tick.bind(n),
            n.activate = n.activate.bind(n),
            n
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return e.beats != this.props.beats || e.bpm != this.props.bpm || this.state.active != t.active
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.ctx = this.refs.canvas.getContext("2d"),
                this.ctx.fillStyle = "#E3BAFD",
                this.ctx.globalAlpha = c[0]
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t) {
                var n = this;
                this.tickHandle && window.cancelAnimationFrame(this.tickHandle),
                this.state.active && (this.prevEpoch = 0,
                this.bpm = this.props.bpm,
                this.period = 1e3 / (this.bpm / 60),
                this.beats = this.props.beats,
                this.refs.sound.volume = 0,
                this.refs.sound.play(),
                t.active ? (this.handle && (clearTimeout(this.handle),
                this.handle = null),
                this.handle = setTimeout(function() {
                    n.tickHandle = window.requestAnimationFrame(n.tick)
                }, 100)) : this.tickHandle = window.requestAnimationFrame(this.tick)),
                1 == t.active && 0 == this.state.active && this.ctx.clearRect(0, 0, 72, 72)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.tickHandle && window.cancelAnimationFrame(this.tickHandle),
                this.handle && (clearTimeout(this.handle),
                this.handle = null)
            }
        }, {
            key: "activate",
            value: function() {
                this.setState({
                    active: !this.state.active
                })
            }
        }, {
            key: "tick",
            value: function(e) {
                this.tickHandle = window.requestAnimationFrame(this.tick),
                this.startTime || (this.startTime = e);
                var t = e - this.startTime
                  , n = parseInt(t / this.period)
                  , i = u[n % this.beats]
                  , o = t % this.period / this.period;
                this.prevEpoch != n && (this._play(i),
                this.prevEpoch = n,
                this.ctx.globalAlpha = c[n % this.beats]),
                this._drawCircle(o)
            }
        }, {
            key: "_drawCircle",
            value: function(e) {
                this.ctx.clearRect(0, 0, 72, 72),
                this.ctx.beginPath(),
                this.ctx.arc(36, 36, 12 * e + 36 * (1 - e), 0, 2 * Math.PI, !1),
                this.ctx.fill()
            }
        }, {
            key: "_play",
            value: function(e) {
                this.refs.sound.currentTime = 0,
                this.refs.sound.volume = e,
                this.refs.sound.play()
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    className: "metronome",
                    style: h.default,
                    onClick: this.activate
                }, l.default.createElement("audio", {
                    ref: "sound"
                }, l.default.createElement("source", {
                    type: "audio/mpeg",
                    src: "./res/metronome-6d353cdcc7e60c9dcdba5825a6fca527.mp3"
                })), l.default.createElement("div", {
                    style: {
                        position: "relative"
                    }
                }, l.default.createElement("canvas", {
                    ref: "canvas",
                    width: "72",
                    height: "72"
                }), l.default.createElement("div", {
                    className: "icon " + (this.state.active ? "active" : ""),
                    style: h.icon
                })))
            }
        }]),
        t
    }(l.default.Component),
    {
        default: {
            position: "absolute",
            top: 48,
            right: 4
        },
        icon: {
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -24,
            marginTop: -24
        }
    })
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.MultiPageModal = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(l);
    t.MultiPageModal = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                open: e.open,
                pageNum: 0
            },
            n.crumbAnimationLength = "100ms",
            n
        }
        return r(t, e),
        s(t, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState({
                    open: e.open,
                    pageNum: 0
                })
            }
        }, {
            key: "closeModal",
            value: function() {
                this.setState({
                    open: !1
                }),
                this.props.closeCallback()
            }
        }, {
            key: "getCurrentPages",
            value: function() {
                var e = {
                    position: "absolute",
                    left: 0,
                    width: "100%",
                    height: "100%",
                    transition: "left 500ms ease",
                    WebkitTransition: "left 500ms ease",
                    backgroundColor: "#fff"
                };
                return this.props.pages.map(function(t, n) {
                    return u.default.createElement("div", {
                        key: n,
                        className: "page-wrapper",
                        style: a({}, e, {
                            left: 100 * (n - this.state.pageNum) + "%",
                            transition: "left 500ms ease"
                        })
                    }, t)
                }
                .bind(this))
            }
        }, {
            key: "renderBreadcrumbs",
            value: function() {
                for (var e = this.getStyles(), t = [], n = 0; n < this.props.pages.length; n++)
                    t.push(u.default.createElement("div", {
                        key: n,
                        className: "breadcrumb",
                        style: this.state.pageNum === n ? e.activeCrumb : e.inactiveCrumb
                    }));
                return t
            }
        }, {
            key: "pan",
            value: function(e) {
                if (this.props.noCycle && e > 0 && this.state.pageNum === this.props.pages.length - 1)
                    return void this.closeModal();
                var t = (this.state.pageNum + e + this.props.pages.length) % this.props.pages.length;
                this.setState({
                    pageNum: t
                });
                for (var n = this.refs.pagesContainer.children, i = 0; i < this.props.pages.length; i++)
                    n[i].style.transition = "left 500ms ease",
                    n[i].style.left = 100 * (i - this.state.pageNum) + "%"
            }
        }, {
            key: "modalTouchStart",
            value: function(e) {
                this.xDown = e.touches ? e.touches[0].clientX : e.clientX
            }
        }, {
            key: "modalTouchMove",
            value: function(e) {
                e.preventDefault(),
                this.xDown && (this.xUp = e.touches ? e.touches[0].clientX : e.clientX,
                this.xDiff = this.xDown - this.xUp,
                this.xDiff > 10 ? (this.state.pageNum !== this.props.pages.length - 1 && this.pan(1),
                this.xDown = null) : this.xDiff < -10 && (0 !== this.state.pageNum && this.pan(-1),
                this.xDown = null))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getStyles();
                return u.default.createElement("div", {
                    className: "multi-page-modal-container",
                    style: e.modalContainer
                }, u.default.createElement("div", {
                    className: "multi-page-modal-backdrop",
                    style: e.backdrop,
                    onClick: this.closeModal.bind(this)
                }), u.default.createElement("div", {
                    className: "multi-page-modal",
                    style: e.multiPageModal,
                    onTouchStart: this.modalTouchStart.bind(this),
                    onTouchMove: this.modalTouchMove.bind(this)
                }, u.default.createElement("div", {
                    className: "icon multi-page-close",
                    style: e.closeBtn,
                    onClick: this.closeModal.bind(this)
                }), u.default.createElement("div", {
                    className: "multi-page-background",
                    style: e.multiPageBackground
                }), u.default.createElement("div", {
                    className: "pages-container",
                    ref: "pagesContainer",
                    style: e.multiPagesWrap
                }, this.getCurrentPages()), u.default.createElement("div", {
                    className: "bottom-container",
                    style: e.bottomContainer
                }, u.default.createElement("div", {
                    className: "prev-button",
                    style: e.prevBtn,
                    onClick: this.pan.bind(this, -1)
                }, "Previous"), u.default.createElement("div", {
                    className: "breadcrumb-container",
                    style: e.breadcrumbContainer
                }, this.renderBreadcrumbs()), u.default.createElement("div", {
                    className: "next-button",
                    style: e.nextBtn,
                    onClick: this.pan.bind(this, 1)
                }, this.state.pageNum === this.props.pages.length - 1 ? "Done" : "Next"), this.props.bottom)))
            }
        }, {
            key: "getStyles",
            value: function() {
                return {
                    modalContainer: {
                        position: "absolute",
                        top: 0,
                        overflow: "hidden",
                        zIndex: 10,
                        width: "100vw",
                        height: "100vh",
                        visibility: this.props.open ? "visible" : "hidden",
                        pointerEvents: this.props.open ? "initial" : "none"
                    },
                    backdrop: {
                        position: "absolute",
                        zIndex: 1,
                        opacity: this.state.open ? .5 : 0,
                        transition: "opacity 500ms ease",
                        WebkitTransition: "opacity 500ms ease",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#000"
                    },
                    multiPagesWrap: {
                        overflow: "hidden",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        maxWidth: 536,
                        maxHeight: 288,
                        boxSizing: "border-box",
                        textAlign: "center"
                    },
                    multiPageModal: {
                        position: "absolute",
                        width: "80%",
                        height: "77%",
                        maxWidth: 536,
                        maxHeight: 288,
                        boxSizing: "border-box",
                        margin: "0 auto",
                        left: 0,
                        right: 0,
                        top: this.state.open ? "50%" : "150%",
                        transition: "top 500ms ease",
                        WebkitTransition: "top 500ms ease",
                        transform: "translateY(-50%)",
                        WebkitTransform: "translateY(-50%)",
                        borderRadius: 8,
                        zIndex: 2,
                        textAlign: "center"
                    },
                    closeBtn: {
                        position: "absolute",
                        top: 8,
                        left: 8,
                        width: 24,
                        height: 24,
                        zIndex: 2
                    },
                    multiPageBackground: {
                        position: "absolute",
                        width: "100%",
                        height: "60%",
                        background: "linear-gradient(rgb(90, 103, 172), rgb(179, 161, 204))"
                    },
                    bottomContainer: {
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        height: 48
                    },
                    prevBtn: {
                        position: "absolute",
                        display: "inline-block",
                        left: 0,
                        width: 88,
                        height: 32,
                        lineHeight: "34px",
                        margin: 8,
                        color: "#444",
                        backgroundColor: "#ccc",
                        borderRadius: 4,
                        opacity: 0 === this.state.pageNum ? 0 : 1,
                        pointerEvents: 0 === this.state.pageNum ? "none" : "initial",
                        transition: "opacity 250ms ease",
                        WebkitTransition: "opacity 250ms ease"
                    },
                    breadcrumbContainer: {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 20,
                        margin: "0 auto",
                        width: 6 * this.props.pages.length + 10 * this.props.pages.length + 2,
                        height: 8,
                        display: "inline-block"
                    },
                    activeCrumb: {
                        display: "inline-block",
                        margin: "0 5px -1px",
                        width: 8,
                        height: 8,
                        borderRadius: 8,
                        backgroundColor: "#444"
                    },
                    inactiveCrumb: {
                        display: "inline-block",
                        margin: "0 5px",
                        width: 6,
                        height: 6,
                        borderRadius: 6,
                        backgroundColor: "#ccc"
                    },
                    nextBtn: {
                        position: "absolute",
                        display: "inline-block",
                        right: 0,
                        width: 88,
                        height: 32,
                        lineHeight: "34px",
                        margin: 8,
                        color: "#fff",
                        backgroundColor: "#7949B6",
                        borderRadius: 4
                    }
                }
            }
        }]),
        t
    }(u.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PlayBtn = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(0)
      , c = function() {};
    t.PlayBtn = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.playPauseClick = n.playPauseClick.bind(n),
            n
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data != e.data
            }
        }, {
            key: "playPauseClick",
            value: function() {
                this.playTapped || (this.playTapped = !0,
                setTimeout(function() {
                    this.playTapped = !1
                }
                .bind(this), 500),
                (0,
                u.Dispatch)(u.ACTION.PLAY_BTN.CLICK))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.data.disabled
                  , t = this.props.data.playing
                  , n = this.props.data.jump2Start
                  , i = t ? "pause" : n ? "jump-to-start" : "play"
                  , o = e ? .24 : 1;
                return l.default.createElement("div", {
                    style: {
                        opacity: o
                    },
                    className: "play-pause-button icon " + i,
                    onTouchEnd: e ? c : this.playPauseClick,
                    onMouseUp: e ? c : this.playPauseClick
                })
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.SliderInput = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(l)
      , c = (n(4),
    n(15))
      , h = function(e) {
        return e ? {
            Start: function(e) {
                return "touchstart" == e.type
            },
            Move: function(e) {
                return "touchmove" == e.type
            },
            End: function(e) {
                return "touchend" == e.type
            }
        } : {
            Start: function(e) {
                return "mousedown" == e.type
            },
            Move: function(e) {
                return "mousemove" == e.type
            },
            End: function(e) {
                return "mouseup" == e.type
            }
        }
    }(c.ClientInterface.clientMode);
    t.SliderInput = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.subtract = n.subtract.bind(n),
            n.stopSubtract = n.stopSubtract.bind(n),
            n.startSlider = n.startSlider.bind(n),
            n.updateSlider = n.updateSlider.bind(n),
            n.stopSlider = n.stopSlider.bind(n),
            n.add = n.add.bind(n),
            n.stopAdd = n.stopAdd.bind(n),
            n.state = {
                value: n.props.value
            },
            n.shiftUpTimeoutDelay = 500,
            n.shiftDownTimeoutDelay = 500,
            n
        }
        return r(t, e),
        s(t, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState({
                    value: e.value
                })
            }
        }, {
            key: "subtract",
            value: function(e) {
                this.state.value <= this.props.min || !h.Start(e) || (this.setState({
                    subtractTapped: !0
                }),
                this.props.onChange(this.state.value - this.props.step),
                this.shiftDownTimeout = setTimeout(function() {
                    this.state.subtractTapped && (this.shiftDownTimeoutDelay > 25 && (this.shiftDownTimeoutDelay = this.shiftDownTimeoutDelay / 2),
                    this.subtract())
                }
                .bind(this), this.shiftDownTimeoutDelay))
            }
        }, {
            key: "add",
            value: function(e) {
                this.state.value >= this.props.max || !h.Start(e) || (this.setState({
                    addTapped: !0
                }),
                this.props.onChange(this.state.value + this.props.step),
                this.shiftUpTimeout = setTimeout(function() {
                    this.state.addTapped && (this.shiftUpTimeoutDelay > 25 && (this.shiftUpTimeoutDelay = this.shiftUpTimeoutDelay / 2),
                    this.add())
                }
                .bind(this), this.shiftUpTimeoutDelay))
            }
        }, {
            key: "stopSubtract",
            value: function(e) {
                h.End(e) && (this.shiftDownTimeoutDelay = 500,
                clearTimeout(this.shiftDownTimeout),
                this.setState({
                    subtractTapped: !1
                }))
            }
        }, {
            key: "stopAdd",
            value: function(e) {
                h.End(e) && (this.shiftUpTimeoutDelay = 500,
                clearTimeout(this.shiftUpTimeout),
                this.setState({
                    addTapped: !1
                }))
            }
        }, {
            key: "startSlider",
            value: function(e) {
                this.sliding = !0
            }
        }, {
            key: "updateSlider",
            value: function(e) {
                if (this.sliding) {
                    var t = e.touches ? e.touches[0].clientX : e.clientX
                      , n = this.refs.slider.getBoundingClientRect().left
                      , i = this.refs.slider.offsetWidth
                      , o = (t - n) / i;
                    o = Math.max(Math.min(o, 1), 0);
                    var r = o * (this.props.max - this.props.min) + this.props.min;
                    this.props.onChange(Math.round(r))
                }
            }
        }, {
            key: "stopSlider",
            value: function(e) {
                this.sliding = !1
            }
        }, {
            key: "render",
            value: function() {
                var e = (this.state.value - this.props.min) / (this.props.max - this.props.min) * 100;
                return this.styles = {
                    wrapperStyle: {
                        position: "relative",
                        width: "100%",
                        padding: "0 62px",
                        height: "44px",
                        boxSizing: "border-box"
                    },
                    buttonStyle: {
                        position: "absolute",
                        top: 0,
                        display: "inline-block"
                    },
                    sliderStyle: {
                        position: "relative",
                        width: "100%",
                        height: "2px",
                        padding: "22px 0",
                        cursor: "pointer",
                        borderRadius: "2px"
                    },
                    sliderGreyStyle: {
                        position: "absolute",
                        left: 0,
                        height: "2px",
                        width: "100%",
                        backgroundColor: "#b6b6b6",
                        borderRadius: "2px"
                    },
                    sliderBallStyle: {
                        position: "absolute",
                        left: e + "%",
                        width: "28px",
                        height: "28px",
                        margin: "-14px 0 0 -14px",
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        zIndex: 2
                    },
                    sliderFillStyle: {
                        position: "absolute",
                        left: 0,
                        height: "2px",
                        width: e + "%",
                        backgroundColor: "#0076FF",
                        borderRadius: "2px"
                    }
                },
                this.styles.minusButtonStyle = a({
                    left: 0
                }, this.styles.buttonStyle),
                this.styles.plusButtonStyle = a({
                    right: 0
                }, this.styles.buttonStyle),
                u.default.createElement("div", {
                    className: "slider-wrapper",
                    style: this.styles.wrapperStyle
                }, u.default.createElement("div", {
                    className: "icon minus-button",
                    style: this.styles.minusButtonStyle,
                    onMouseDown: this.subtract.bind(this),
                    onTouchStart: this.subtract.bind(this),
                    onMouseUp: this.stopSubtract.bind(this),
                    onTouchEnd: this.stopSubtract.bind(this)
                }), u.default.createElement("div", {
                    ref: "slider",
                    className: "slider-container",
                    style: this.styles.sliderStyle,
                    onTouchStart: this.startSlider.bind(this),
                    onMouseDown: this.startSlider.bind(this),
                    onTouchMove: this.updateSlider.bind(this),
                    onMouseMove: this.updateSlider.bind(this),
                    onTouchEnd: this.stopSlider.bind(this),
                    onMouseUp: this.stopSlider.bind(this)
                }, u.default.createElement("div", {
                    className: "slider-grey-bar",
                    style: this.styles.sliderGreyStyle
                }), u.default.createElement("div", {
                    ref: "sliderBall",
                    className: "slider-ball",
                    style: this.styles.sliderBallStyle
                }), u.default.createElement("div", {
                    className: "slider-fill-bar",
                    style: this.styles.sliderFillStyle
                })), u.default.createElement("div", {
                    className: "icon plus-button",
                    style: this.styles.plusButtonStyle,
                    onMouseDown: this.add.bind(this),
                    onTouchStart: this.add.bind(this),
                    onMouseUp: this.stopAdd.bind(this),
                    onTouchEnd: this.stopAdd.bind(this)
                }))
            }
        }]),
        t
    }(u.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ComposerUI = void 0;
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = i(l)
      , c = n(4)
      , h = n(0)
      , d = (n(115),
    n(117),
    n(243))
      , p = n(227)
      , f = n(230)
      , m = n(244)
      , y = n(248)
      , g = n(242)
      , v = n(224)
      , b = n(118)
      , E = n(247)
      , T = n(245)
      , S = n(106)
      , _ = i(S)
      , w = n(15)
      , O = n(246);
    t.ComposerUI = function(e) {
        function t() {
            return o(this, t),
            r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        s(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this;
                setTimeout(function() {
                    requestAnimationFrame(function() {
                        w.ClientInterface.composerLoad(),
                        _.default.stop(),
                        (0,
                        h.Signal)(h.EVT.COMPOSER_UI.LOADED, {}, e)
                    })
                }, 0)
            }
        }, {
            key: "render",
            value: function() {
                return u.default.createElement("div", {
                    className: "main-view"
                }, u.default.createElement(m.Meta, {
                    data: this.props.data.meta
                }), u.default.createElement("div", {
                    className: "piano-wrapper " + (this.props.data.editSettings.visible ? "closed" : "open")
                }, u.default.createElement("canvas", {
                    id: "piano"
                }), u.default.createElement(f.Sidebar, {
                    data: this.props.data.sideBar,
                    composer: this,
                    config: c.config,
                    viewConfig: this.props.data.viewConfig
                }), u.default.createElement(y.ZoomMenu, {
                    data: this.props.data.zoomMenu,
                    camera: this.props.data.camera,
                    viewId: this.props.data.viewId
                }), u.default.createElement(b.Keyboard, {
                    data: this.props.data.keyboard,
                    size: this.viewConfig
                }), u.default.createElement(E.RowActionMenu, {
                    data: this.props.data.rowActionMenu
                }), u.default.createElement(d.MeasureActionMenu, {
                    data: this.props.data.measureActionMenu
                }), u.default.createElement(g.KeySigScreen, {
                    data: this.props.data.keySigScreen
                }), u.default.createElement(p.PegboardPublishBtn, {
                    data: this.props.data.pegboardPublishBtn,
                    arrangement: this.props.data.arrangement,
                    publishing: this.props.data.publishing
                })), u.default.createElement(O.PianoMenu, {
                    data: this.props.data.pianoMenu
                }), u.default.createElement(v.EditSettings, {
                    data: this.props.data.editSettings,
                    arrangement: this.props.data.arrangement,
                    publishing: this.props.data.publishing
                }), u.default.createElement(T.ModalContainer, {
                    data: this.props.data.modalContainer
                }))
            }
        }]),
        t
    }(u.default.Component)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.KeySigScreen = void 0;
        var s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
          , l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , u = n(1)
          , c = i(u)
          , h = n(29)
          , d = i(h)
          , p = n(4)
          , f = n(0)
          , m = (t.KeySigScreen = function(t) {
            function n(e) {
                o(this, n);
                var t = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                return t.state = {
                    data: (0,
                    d.default)({
                        chromaticMode: !1,
                        keySig: {
                            sharps: 0,
                            minor: !1
                        }
                    })
                },
                t
            }
            return a(n, t),
            l(n, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.data !== e.data && (this.setState({
                        data: this.state.data.merge(e.data, {
                            deep: !0
                        })
                    }),
                    this.setNewKeySig(e.data))
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.props.data !== e.data || this.state.data !== t.data
                }
            }, {
                key: "setNewKeySig",
                value: function(t) {
                    var n = this.state.data.merge(t, {
                        deep: !0
                    })
                      , i = n.keySig.minor
                      , o = n.keySig.sharps
                      , r = n.chromaticMode
                      , a = i ? "Minor" : "Major"
                      , s = (p.keySigMap.sharpsToKey[a.toLowerCase()][o],
                    this.refs.overlay.offsetTop - this.refs.overlay.offsetHeight / 2)
                      , l = {
                        typeTop: this.refs.keyTypes.offsetTop,
                        keyTop: this.refs.keySigs.offsetTop,
                        modeTop: this.refs.keyModes.offsetTop
                    }
                      , u = s + this.refs.keyTypes.offsetHeight / 2 + (i ? 0 : -this.refs.majorKey.offsetHeight)
                      , c = s + this.refs.keySigs.offsetHeight / 2 - this.refs.majorKey.offsetHeight * (o + 7)
                      , h = s + this.refs.keyModes.offsetHeight / 2 + (r ? 0 : -this.refs.majorKey.offsetHeight);
                    this.keySigsTween && this.keySigsTween.stop();
                    var d = function() {
                        this.refs.keyTypes.style.top = u,
                        this.refs.keySigs.style.top = c,
                        this.refs.keyModes.style.top = h,
                        this.keySigsTween = null,
                        this.setState({
                            data: n
                        })
                    }
                    .bind(this);
                    this.keySigsTween = new e.Tween(l).to({
                        typeTop: u,
                        keyTop: c,
                        modeTop: h
                    }, 250).easing(e.Easing.Exponential.Out).onUpdate(function() {
                        this.refs.keyTypes.style.top = l.typeTop,
                        this.refs.keySigs.style.top = l.keyTop,
                        this.refs.keyModes.style.top = l.modeTop
                    }
                    .bind(this)).onStop(d).onComplete(d).start()
                }
            }, {
                key: "keyTypeTouchStart",
                value: function(e) {
                    if (!(0,
                    p.isMobile)() || "mousedown" !== e.type) {
                        var t = "touchstart" === e.type ? e.touches[0].clientY : e.clientY;
                        this.typeTouchStartPos = this.typeTouchDragPos = t,
                        this.keyTypeActive = !0
                    }
                }
            }, {
                key: "keyTypeTouchMove",
                value: function(e) {
                    if (this.keyTypeActive) {
                        e.preventDefault();
                        var t = "touchmove" === e.type ? e.touches[0].clientY : e.clientY
                          , n = t - this.typeTouchDragPos
                          , i = this.refs.overlay.offsetTop - this.refs.overlay.offsetHeight / 2
                          , o = this.refs.keyTypes.offsetTop - this.refs.keyTypes.offsetHeight / 2
                          , r = o + this.refs.keyTypes.offsetHeight
                          , a = o + n < i
                          , s = r + n - this.refs.majorKey.offsetHeight > i;
                        a && s ? this.refs.keyTypes.style.top = this.refs.keyTypes.offsetTop + n : a ? this.refs.keyTypes.style.top = i - this.refs.keyTypes.offsetHeight / 2 + this.refs.majorKey.offsetHeight : s && (this.refs.keyTypes.style.top = i + this.refs.keyTypes.offsetHeight / 2),
                        this.typeTouchDragPos = t
                    }
                }
            }, {
                key: "keyTypeTouchEnd",
                value: function(e) {
                    if (this.keyTypeActive) {
                        var t = "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY;
                        if (Math.abs(this.typeTouchStartPos - t) < 24 && -1 !== e.target.className.indexOf("key-type-selection"))
                            -1 !== e.target.className.indexOf("minor-key") ? this.setNewKeySig({
                                keySig: {
                                    minor: !0
                                }
                            }) : -1 !== e.target.className.indexOf("major-key") && this.setNewKeySig({
                                keySig: {
                                    minor: !1
                                }
                            });
                        else {
                            var n = this.refs.overlay.offsetTop - this.refs.overlay.offsetHeight / 2
                              , i = this.refs.keyTypes.offsetTop - this.refs.keyTypes.offsetHeight / 2;
                            i + this.refs.majorKey.offsetHeight / 2 > n ? this.setNewKeySig({
                                keySig: {
                                    minor: !0
                                }
                            }) : i + 3 * this.refs.majorKey.offsetHeight / 2 > n && this.setNewKeySig({
                                keySig: {
                                    minor: !1
                                }
                            })
                        }
                        this.keyTypeActive = !1
                    }
                }
            }, {
                key: "keyTouchStart",
                value: function(e) {
                    if (!(0,
                    p.isMobile)() || "mousedown" !== e.type) {
                        var t = "touchstart" === e.type ? e.touches[0].clientY : e.clientY;
                        this.keyTouchStartPos = this.keyTouchDragPos = t,
                        this.keyActive = !0
                    }
                }
            }, {
                key: "keyTouchMove",
                value: function(e) {
                    if (this.keyActive) {
                        e.preventDefault();
                        var t = "touchmove" === e.type ? e.touches[0].clientY : e.clientY
                          , n = t - this.keyTouchDragPos
                          , i = this.refs.overlay.offsetTop - this.refs.overlay.offsetHeight / 2
                          , o = this.refs.keySigs.offsetTop - this.refs.keySigs.offsetHeight / 2
                          , r = o + this.refs.keySigs.offsetHeight
                          , a = o + n < i
                          , s = r + n - this.refs.majorKey.offsetHeight > i;
                        a && s ? this.refs.keySigs.style.top = this.refs.keySigs.offsetTop + n : a ? this.refs.keySigs.style.top = i - this.refs.keySigs.offsetHeight / 2 + this.refs.majorKey.offsetHeight : s && (this.refs.keySigs.style.top = i + this.refs.keySigs.offsetHeight / 2),
                        this.keyTouchDragPos = t
                    }
                }
            }, {
                key: "keyTouchEnd",
                value: function(e) {
                    if (this.keyActive) {
                        var t, n = "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY;
                        if (Math.abs(this.keyTouchStartPos - n) < 24 && -1 !== e.target.className.indexOf("key-selection")) {
                            var i = e.target;
                            for (t = 0; i.previousElementSibling; )
                                t++,
                                i = i.previousElementSibling;
                            this.setNewKeySig({
                                keySig: {
                                    sharps: t - 7
                                }
                            })
                        } else {
                            var o = this.refs.overlay.offsetTop - this.refs.overlay.offsetHeight / 2
                              , r = this.refs.keySigs.offsetTop - this.refs.keySigs.offsetHeight / 2;
                            t = Math.round((o - r) / this.refs.majorKey.offsetHeight),
                            this.setNewKeySig({
                                keySig: {
                                    sharps: t - 7
                                }
                            })
                        }
                        this.keyActive = !1
                    }
                }
            }, {
                key: "keyModeTouchStart",
                value: function(e) {
                    if (!(0,
                    p.isMobile)() || "mousedown" !== e.type) {
                        var t = "touchstart" === e.type ? e.touches[0].clientY : e.clientY;
                        this.modeTouchStartPos = this.modeTouchDragPos = t,
                        this.keyModeActive = !0
                    }
                }
            }, {
                key: "keyModeTouchMove",
                value: function(e) {
                    if (this.keyModeActive) {
                        e.preventDefault();
                        var t = "touchmove" === e.type ? e.touches[0].clientY : e.clientY
                          , n = t - this.modeTouchDragPos
                          , i = this.refs.overlay.offsetTop - this.refs.overlay.offsetHeight / 2
                          , o = this.refs.keyModes.offsetTop - this.refs.keyModes.offsetHeight / 2
                          , r = o + this.refs.keyModes.offsetHeight
                          , a = o + n < i
                          , s = r + n - this.refs.majorKey.offsetHeight > i;
                        a && s ? this.refs.keyModes.style.top = this.refs.keyModes.offsetTop + n : a ? this.refs.keyModes.style.top = i - this.refs.keyModes.offsetHeight / 2 + this.refs.majorKey.offsetHeight : s && (this.refs.keyModes.style.top = i + this.refs.keyModes.offsetHeight / 2),
                        this.modeTouchDragPos = t
                    }
                }
            }, {
                key: "keyModeTouchEnd",
                value: function(e) {
                    if (this.keyModeActive) {
                        var t = "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY;
                        if (Math.abs(this.modeTouchStartPos - t) < 24 && -1 !== e.target.className.indexOf("key-mode-selection"))
                            -1 !== e.target.className.indexOf("only-key-notes") ? (this.setNewKeySig({
                                chromaticMode: !1
                            }),
                            (0,
                            f.Dispatch)(f.ACTION.CHROMATIC.CLOSE)) : -1 !== e.target.className.indexOf("all-notes") && (this.setNewKeySig({
                                chromaticMode: !0
                            }),
                            (0,
                            f.Dispatch)(f.ACTION.CHROMATIC.OPEN));
                        else {
                            var n = this.refs.overlay.offsetTop - this.refs.overlay.offsetHeight / 2
                              , i = this.refs.keyModes.offsetTop - this.refs.keyModes.offsetHeight / 2;
                            i + this.refs.majorKey.offsetHeight / 2 > n ? ((0,
                            f.Dispatch)(f.ACTION.CHROMATIC.OPEN),
                            this.setNewKeySig({
                                chromaticMode: !0
                            })) : i + 3 * this.refs.majorKey.offsetHeight / 2 > n && ((0,
                            f.Dispatch)(f.ACTION.CHROMATIC.CLOSE),
                            this.setNewKeySig({
                                chromaticMode: !1
                            }))
                        }
                        this.keyModeActive = !1
                    }
                }
            }, {
                key: "closeScaleScreen",
                value: function(e) {
                    (0,
                    f.Dispatch)(f.ACTION.KEYSIG_SCREEN.CLOSE, {
                        keySig: this.state.data.keySig.asMutable({
                            deep: !0
                        })
                    }),
                    e.preventDefault()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.data.keySig
                      , t = this.state.data.chromaticMode
                      , n = e.minor ? "Minor" : "Major"
                      , i = p.keySigMap.sharpsToKey[n.toLowerCase()][e.sharps]
                      , o = this.props.data.visible
                      , r = e.minor ? Object.keys(p.keySigMap.keyToSharps.minor).map(function(e) {
                        return c.default.createElement("div", {
                            className: "key-selection minor-key",
                            key: "Minor-" + e,
                            style: "Minor" === n && i === e ? m.selectedKey : m.unselectedKey
                        }, e)
                    }
                    .bind(this)) : Object.keys(p.keySigMap.keyToSharps.major).map(function(e) {
                        return c.default.createElement("div", {
                            className: "key-selection major-key",
                            key: "Major-" + e,
                            style: "Major" === n && i === e ? m.selectedKey : m.unselectedKey
                        }, e)
                    }
                    .bind(this));
                    return c.default.createElement("div", {
                        id: "keysig-edit",
                        className: "scale-screen-container noselect",
                        style: s({}, m.scaleScreenContainer, {
                            pointerEvents: o ? "auto" : "none"
                        })
                    }, c.default.createElement("div", {
                        className: "scale-screen",
                        style: s({}, m.scaleScreen, o ? {
                            left: 0
                        } : m.scaleScreenHide)
                    }, c.default.createElement("div", {
                        className: "scale-screen-header",
                        style: m.scaleScreenHeader
                    }, c.default.createElement("div", {
                        className: "icon scale-back-btn",
                        style: m.scaleBackBtn,
                        onTouchStart: this.closeScaleScreen.bind(this),
                        onMouseUp: this.closeScaleScreen.bind(this)
                    }), c.default.createElement("div", {
                        className: "scale-header-text",
                        style: m.scaleHeaderText,
                        onTouchStart: this.closeScaleScreen.bind(this),
                        onMouseUp: this.closeScaleScreen.bind(this)
                    }, "Choose a Key Signature")), c.default.createElement("div", {
                        className: "settings-body scale-settings",
                        style: m.scaleSettingsBody
                    }, c.default.createElement("div", {
                        className: "key-top-gradient",
                        style: m.topGradient
                    }), c.default.createElement("div", {
                        ref: "overlay",
                        className: "selected-key-overlay",
                        style: m.selectedOverlay
                    }), c.default.createElement("div", {
                        className: "key-type-wrapper",
                        style: m.keyTypeWrapper,
                        onTouchStart: this.keyTypeTouchStart.bind(this),
                        onMouseDown: this.keyTypeTouchStart.bind(this),
                        onTouchMove: this.keyTypeTouchMove.bind(this),
                        onMouseMove: this.keyTypeTouchMove.bind(this),
                        onTouchEnd: this.keyTypeTouchEnd.bind(this),
                        onMouseUp: this.keyTypeTouchEnd.bind(this)
                    }, c.default.createElement("div", {
                        ref: "keyTypes",
                        className: "key-type-container",
                        style: m.keyTypeContainer
                    }, c.default.createElement("div", {
                        className: "key-type-selection minor-key",
                        style: e.minor ? m.selectedKeyType : m.unselectedKeyType
                    }, "Minor"), c.default.createElement("div", {
                        className: "key-type-selection major-key",
                        ref: "majorKey",
                        style: e.minor ? m.unselectedKeyType : m.selectedKeyType
                    }, "Major"))), c.default.createElement("div", {
                        className: "key-divider",
                        style: m.keyDivider
                    }), c.default.createElement("div", {
                        className: "key-wrapper",
                        style: m.keyWrapper,
                        onTouchStart: this.keyTouchStart.bind(this),
                        onMouseDown: this.keyTouchStart.bind(this),
                        onTouchMove: this.keyTouchMove.bind(this),
                        onMouseMove: this.keyTouchMove.bind(this),
                        onTouchEnd: this.keyTouchEnd.bind(this),
                        onMouseUp: this.keyTouchEnd.bind(this)
                    }, c.default.createElement("div", {
                        ref: "keySigs",
                        className: "key-container",
                        style: m.keyContainer
                    }, r)), c.default.createElement("div", {
                        className: "key-divider",
                        style: m.keyDivider
                    }), c.default.createElement("div", {
                        className: "key-mode-wrapper",
                        style: m.keyModeWrapper,
                        onTouchStart: this.keyModeTouchStart.bind(this),
                        onMouseDown: this.keyModeTouchStart.bind(this),
                        onTouchMove: this.keyModeTouchMove.bind(this),
                        onMouseMove: this.keyModeTouchMove.bind(this),
                        onTouchEnd: this.keyModeTouchEnd.bind(this),
                        onMouseUp: this.keyModeTouchEnd.bind(this)
                    }, c.default.createElement("div", {
                        ref: "keyModes",
                        className: "key-mode-container",
                        style: m.keyModeContainer
                    }, c.default.createElement("div", {
                        className: "key-mode-selection all-notes",
                        style: t ? m.selectedKeyMode : m.unselectedKeyMode
                    }, "Chromatic"), c.default.createElement("div", {
                        className: "key-mode-selection only-key-notes",
                        style: t ? m.unselectedKeyMode : m.selectedKeyMode
                    }, "Diatonic"))), c.default.createElement("div", {
                        className: "key-bot-gradient",
                        style: m.botGradient
                    })), c.default.createElement("div", {
                        className: "right-overlay",
                        style: m.rightOverlay,
                        onClick: this.closeScaleScreen.bind(this)
                    })), c.default.createElement("div", {
                        className: "scale-screen-backdrop",
                        style: s({}, m.scaleScreenBackdrop, {
                            opacity: o ? 1 : 0
                        })
                    }))
                }
            }]),
            n
        }(c.default.Component),
        {
            scaleScreenContainer: {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 2,
                width: "100vw",
                height: "100%"
            },
            scaleScreenBackdrop: {
                position: "absolute",
                transition: "opacity 500ms ease",
                zIndex: -1,
                height: "100vh",
                width: "100vw",
                backgroundColor: "rgba(0, 0, 0, 0.70)"
            },
            scaleScreenHide: {
                left: "-100vw"
            },
            scaleScreen: {
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 2,
                width: "65vw",
                height: "100%",
                marginRight: "20vw",
                backgroundColor: "#3D2758",
                transition: "left 500ms"
            },
            scaleScreenHeader: {
                display: "inline-block",
                width: "100%",
                height: 44,
                boxSizing: "border-box",
                lineHeight: "44px",
                color: "#fff",
                fontSize: 18,
                backgroundColor: "#562889"
            },
            scaleBackBtn: {
                position: "absolute",
                top: 10,
                left: 16,
                width: 24,
                height: 24
            },
            scaleHeaderText: {
                width: "100%",
                textAlign: "center",
                lineHeight: "48px"
            },
            scaleSettingsBody: {
                padding: 0,
                position: "relative",
                height: "calc(100% - 44px)",
                overflow: "hidden"
            },
            topGradient: {
                position: "absolute",
                top: 0,
                width: "100%",
                height: "40%",
                zIndex: 2,
                pointerEvents: "none",
                background: "linear-gradient(rgba(61, 39, 88, 1), rgba(61, 39, 88, 0))"
            },
            selectedOverlay: {
                position: "absolute",
                width: "100%",
                height: 48,
                top: "50%",
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.08)"
            },
            botGradient: {
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "40%",
                zIndex: 2,
                pointerEvents: "none",
                background: "linear-gradient(rgba(61, 39, 88, 0), rgba(61, 39, 88, 1))"
            },
            keyTypeWrapper: {
                position: "relative",
                display: "inline-block",
                top: 0,
                height: "100%",
                width: "33%"
            },
            keyTypeContainer: {
                position: "absolute",
                left: 0,
                width: "100%",
                display: "inline-block",
                textAlign: "center",
                top: "50%",
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)"
            },
            keyType: {
                height: 48,
                width: "100%",
                fontSize: "24px",
                lineHeight: "48px"
            },
            keyDivider: {
                position: "relative",
                height: "100%",
                width: "1px",
                display: "inline-block",
                backgroundColor: "#665778"
            },
            keyWrapper: {
                position: "relative",
                display: "inline-block",
                top: 0,
                height: "100%",
                width: "33%"
            },
            keyContainer: {
                position: "absolute",
                left: 0,
                display: "inline-block",
                top: "50%",
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                width: "100%"
            },
            key: {
                width: "100%",
                height: 48,
                textAlign: "center",
                fontSize: "24px",
                lineHeight: "48px"
            },
            keyModeWrapper: {
                position: "relative",
                display: "inline-block",
                top: 0,
                height: "100%",
                width: "33%"
            },
            keyModeContainer: {
                position: "absolute",
                left: 0,
                display: "inline-block",
                top: "50%",
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                width: "100%"
            },
            keyMode: {
                width: "100%",
                height: 48,
                textAlign: "center",
                fontSize: "24px",
                lineHeight: "48px"
            },
            rightOverlay: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1
            }
        });
        m.selectedKeyType = s({
            color: "#fff"
        }, m.keyType),
        m.unselectedKeyType = s({
            color: "#665778"
        }, m.keyType),
        m.disabledKey = s({
            color: "#665778",
            opacity: "0.16"
        }, m.key),
        m.selectedKey = s({
            color: "#fff"
        }, m.key),
        m.unselectedKey = s({
            color: "#665778"
        }, m.key),
        m.selectedKeyMode = s({
            color: "#fff"
        }, m.keyMode),
        m.unselectedKeyMode = s({
            color: "#665778"
        }, m.keyMode)
    }
    ).call(t, n(16))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.MeasureActionMenu = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(0)
      , c = (t.MeasureActionMenu = function(e) {
        function t(e) {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "copy",
            value: function(e) {
                e.preventDefault(),
                (0,
                u.Dispatch)(u.ACTION.MEASURE_BAR_MENU.TOGGLE_PASTE_MODE, {
                    pasteMode: !0,
                    copy: !0
                }, this),
                e.stopPropagation()
            }
        }, {
            key: "cut",
            value: function(e) {
                e.preventDefault(),
                (0,
                u.Dispatch)(u.ACTION.MEASURE_BAR_MENU.TOGGLE_PASTE_MODE, {
                    pasteMode: !0,
                    copy: !1
                }, this),
                e.stopPropagation()
            }
        }, {
            key: "exitPaste",
            value: function(e) {
                e.preventDefault(),
                (0,
                u.Dispatch)(u.ACTION.MEASURE_BAR_MENU.TOGGLE_PASTE_MODE, {
                    pasteMode: !1,
                    copy: !1
                }, this),
                e.stopPropagation()
            }
        }, {
            key: "paste",
            value: function(e) {
                e.preventDefault(),
                this.props.data.canPaste && (0,
                u.Dispatch)(u.ACTION.MEASURE_BAR.PASTE),
                e.stopPropagation()
            }
        }, {
            key: "delete",
            value: function(e) {
                e.preventDefault(),
                (0,
                u.Dispatch)(u.ACTION.MEASURE_BAR.DELETE),
                e.stopPropagation()
            }
        }, {
            key: "exit",
            value: function(e) {
                e.preventDefault(),
                (0,
                u.Dispatch)(u.ACTION.MEASURE_BAR_MENU.CLOSE),
                e.stopPropagation()
            }
        }, {
            key: "preventDefault",
            value: function(e) {
                e.preventDefault()
            }
        }, {
            key: "render",
            value: function() {
                var e = [];
                return this.props.data.pasteMode ? (e.push(l.default.createElement(c, {
                    key: "Paste",
                    text: "Paste",
                    icon: this.props.data.canPaste ? "paste" : "paste disabled",
                    onClick: this.paste.bind(this)
                })),
                e.push(l.default.createElement(c, {
                    key: "CancelPaste",
                    text: "Cancel",
                    icon: "cancel",
                    onClick: this.exitPaste.bind(this)
                }))) : (e.push(l.default.createElement(c, {
                    key: "Cut",
                    text: "Cut",
                    icon: "cut",
                    onClick: this.cut.bind(this)
                })),
                e.push(l.default.createElement(c, {
                    key: "Copy",
                    text: "Copy",
                    icon: "copy",
                    onClick: this.copy.bind(this)
                })),
                e.push(l.default.createElement(c, {
                    key: "Delete",
                    text: "Delete",
                    icon: "delete",
                    onClick: this.delete.bind(this)
                })),
                e.push(l.default.createElement(c, {
                    key: "CancelMenu",
                    text: "Cancel",
                    icon: "cancel",
                    onClick: this.exit.bind(this)
                }))),
                l.default.createElement("div", {
                    id: "measure-action-menu-mount"
                }, l.default.createElement("div", {
                    id: "measure-action-menu",
                    className: this.props.data.visible ? "visible" : "",
                    onTouchMove: this.preventDefault
                }, e))
            }
        }]),
        t
    }(l.default.Component),
    function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        a(t, [{
            key: "preventDefault",
            value: function(e) {
                e.preventDefault()
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    className: "menu-item",
                    onTouchMove: this.preventDefault,
                    onClick: this.props.onClick
                }, this.props.text, l.default.createElement("div", {
                    className: "icon " + this.props.icon
                }))
            }
        }]),
        t
    }(l.default.Component))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Meta = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s);
    t.Meta = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.data.arrangementTitle
                  , t = this.props.data.primeSongId
                  , n = this.props.data.primeArrKey
                  , i = this.props.data.ownedArrKey;
                return l.default.createElement("div", {
                    className: "main-menu"
                }, e ? l.default.createElement("span", {
                    id: "arrangement-title"
                }, e) : null, function() {
                    return t ? l.default.createElement("span", {
                        id: "prime-song-id"
                    }, t) : n ? l.default.createElement("span", {
                        id: "prime-arr-key"
                    }, n) : i ? l.default.createElement("span", {
                        id: "owned-arr-key"
                    }, i) : null
                }())
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ModalContainer = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(223)
      , c = n(115)
      , h = n(117)
      , d = n(228)
      , p = n(216)
      , f = n(219)
      , m = n(217);
    t.ModalContainer = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "renderCatalogModal",
            value: function() {
                return l.default.createElement(u.CatalogModal, {
                    data: this.props.data.catalogModal
                })
            }
        }, {
            key: "renderRestrictedModal",
            value: function() {
                return l.default.createElement(d.RestrictedModal, {
                    data: this.props.data.restrictedModal
                })
            }
        }, {
            key: "renderAddNotesModal",
            value: function() {
                return l.default.createElement(p.AddNotesModal, {
                    data: this.props.data.addNotesModal
                })
            }
        }, {
            key: "renderLostConnectionModal",
            value: function() {
                return l.default.createElement(f.LostConnectionModal, {
                    data: this.props.data.lostConnectionModal
                })
            }
        }, {
            key: "renderInvalidArrModal",
            value: function() {
                return l.default.createElement(m.InvalidArrModal, {
                    data: this.props.data.invalidArrModal
                })
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    id: "modal-container"
                }, l.default.createElement("div", {
                    id: "start-over-modal"
                }, l.default.createElement(c.StartOverModal, {
                    data: this.props.data.startOverModal
                })), l.default.createElement("div", {
                    id: "help-modal"
                }, l.default.createElement(h.HelpModal, {
                    data: this.props.data.helpModal
                })), this.renderCatalogModal(), this.renderRestrictedModal(), this.renderAddNotesModal(), this.renderLostConnectionModal(), this.renderInvalidArrModal())
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PianoMenu = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(1)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(15);
    t.PianoMenu = function(e) {
        function t(e) {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return r(t, e),
        a(t, [{
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return this.delay && clearTimeout(this.delay),
                this.props.data.visible ? this.delay = setTimeout(function() {
                    e.visible != e.props.data.visible && (u.ClientInterface.showMenu(),
                    e.visible = !0)
                }, 10) : this.delay = setTimeout(function() {
                    e.visible != e.props.data.visible && (u.ClientInterface.hideMenu(),
                    e.visible = !1)
                }, 10),
                null
            }
        }]),
        t
    }(l.default.Component)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.RowActionMenu = void 0;
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , l = n(1)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(l)
      , c = n(0)
      , h = (t.RowActionMenu = function(e) {
        function t(e) {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return r(t, e),
        s(t, [{
            key: "closeStart",
            value: function() {
                this.doneTapped || (this.doneTapped = !0,
                setTimeout(function() {
                    this.doneTapped = !1
                }
                .bind(this), 250),
                this.setState({
                    donePressed: !0
                }))
            }
        }, {
            key: "close",
            value: function() {
                (0,
                c.Dispatch)(c.ACTION.ROW_MENU.CLOSE)
            }
        }, {
            key: "closeEnd",
            value: function() {
                this.setState({
                    donePressed: !1
                })
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(e) {
                return this.props.data !== e.data
            }
        }, {
            key: "addRow",
            value: function() {
                this.insertTapped || (this.insertTapped = !0,
                setTimeout(function() {
                    this.insertTapped = !1
                }
                .bind(this), 250),
                (0,
                c.Dispatch)(c.ACTION.ROW.ADD),
                this.setState({
                    insertPressed: !0
                }))
            }
        }, {
            key: "addRowEnd",
            value: function() {
                this.setState({
                    insertPressed: !1
                })
            }
        }, {
            key: "removeRow",
            value: function() {
                this.deleteTapped || (this.deleteTapped = !0,
                setTimeout(function() {
                    this.deleteTapped = !1
                }
                .bind(this), 250),
                (0,
                c.Dispatch)(c.ACTION.ROW.REMOVE),
                this.setState({
                    deletePressed: !0
                }))
            }
        }, {
            key: "removeRowEnd",
            value: function() {
                this.setState({
                    deletePressed: !1
                })
            }
        }, {
            key: "render",
            value: function() {
                return u.default.createElement("div", {
                    id: "row-action-menu",
                    style: a({}, h.rowActionMenu, {
                        pointerEvents: this.props.data.visible ? "auto" : "none",
                        opacity: this.props.data.visible ? 1 : 0
                    })
                }, u.default.createElement("div", {
                    className: "top-btn-group"
                }, u.default.createElement("div", {
                    style: h.rowActionText
                }, "Insert or delete 'pegboard' rows")), u.default.createElement("div", {
                    className: "side-btn-gradient",
                    style: h.sideBtnGradient
                }), u.default.createElement("div", {
                    style: a({}, h.sideBtnGroup, {
                        right: this.props.data.visible ? 14 : -130
                    })
                }, u.default.createElement("div", {
                    style: h.sideBtn,
                    onTouchStart: this.addRow.bind(this),
                    onTouchEnd: this.addRowEnd.bind(this),
                    onMouseDown: this.addRow.bind(this),
                    onMouseUp: this.addRowEnd.bind(this)
                }, u.default.createElement("span", {
                    style: h.sideBtnText
                }, "Insert"), u.default.createElement("div", {
                    className: "icon insert-row",
                    style: h.sideIcon
                })), u.default.createElement("div", {
                    style: h.sideBtn,
                    onTouchStart: this.removeRow.bind(this),
                    onTouchEnd: this.removeRowEnd.bind(this),
                    onMouseDown: this.removeRow.bind(this),
                    onMouseUp: this.removeRowEnd.bind(this)
                }, u.default.createElement("span", {
                    style: h.sideBtnText
                }, "Delete"), u.default.createElement("div", {
                    className: "icon delete-row",
                    style: h.sideIcon
                })), u.default.createElement("div", {
                    style: h.sideBtn,
                    onClick: this.close.bind(this),
                    onTouchStart: this.closeStart.bind(this),
                    onTouchEnd: this.closeEnd.bind(this),
                    onMouseDown: this.closeStart.bind(this),
                    onMouseUp: this.closeEnd.bind(this)
                }, u.default.createElement("span", {
                    style: h.sideBtnText
                }, "Done"), u.default.createElement("div", {
                    className: "icon row-action-done",
                    style: h.sideIcon
                }))))
            }
        }]),
        t
    }(u.default.Component),
    {
        rowActionMenu: {
            position: "fixed",
            zIndex: 10,
            top: 0,
            left: 0,
            height: 64,
            width: "100%",
            background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
            transition: "opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1)"
        },
        rowActionText: {
            position: "absolute",
            width: "100%",
            height: 64,
            top: 0,
            lineHeight: "44px",
            color: "#fff",
            fontSize: 16,
            textAlign: "center",
            boxSizing: "border-box",
            paddingLeft: 64
        },
        sideBtnGradient: {
            position: "absolute",
            top: 0,
            right: 0,
            width: 160,
            height: "100vh",
            background: "linear-gradient(90deg, rgba(37, 19, 58, 0), rgba(18, 13, 33, 1))"
        },
        sideBtnGroup: {
            position: "fixed",
            top: "50%",
            transform: "translateY(-50%)",
            WebkitTransform: "translateY(-50%)",
            opacity: 1,
            transition: "right 500ms cubic-bezier(0.215, 0.61, 0.355, 1)"
        },
        sideBtn: {
            position: "relative",
            fontSize: 12,
            color: "#fff",
            width: 90,
            height: 48,
            paddingBottom: 16
        },
        sideBtnText: {
            display: "inline-block",
            height: 48,
            fontSize: 12,
            lineHeight: "48px",
            color: "#fff",
            verticalAlign: "top"
        },
        sideIcon: {
            position: "absolute",
            display: "inline-block",
            right: 0,
            marginRight: "-4px"
        }
    })
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ZoomMenu = void 0;
    var s = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , l = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , u = n(1)
      , c = i(u)
      , h = n(29)
      , d = i(h)
      , p = n(0)
      , f = n(4)
      , m = (n(22),
    t.ZoomMenu = function(e) {
        function t(e) {
            o(this, t);
            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                data: (0,
                d.default)({
                    uiZoomScale: n.setUiZoomScale(n.props.viewId, n.props.camera.zoomScale),
                    fadeOut: !0,
                    visible: !1,
                    indicatorTapped: !1
                })
            },
            n
        }
        return a(t, e),
        l(t, [{
            key: "setUiZoomScale",
            value: function(e, t) {
                return e == f.ID.MEASURE_VIEW ? 0 : t || 1
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                var t = this
                  , n = this.state.data.update("uiZoomScale", function(n) {
                    return t.setUiZoomScale(e.viewId, e.camera.zoomScale)
                });
                e.data.visible != this.state.data.visible && (n = n.update("fadeOut", function(e) {
                    return !0
                }),
                n = n.update("visible", function(e) {
                    return !0
                })),
                this.setState({
                    data: n
                })
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return this.props.data !== e.data || this.props.camera !== e.camera || this.props.viewId !== e.viewId || this.state.data !== t.data
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.setState({
                    data: this.state.data.set("visible", !1)
                })
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                var e = this;
                this.state.data.fadeOut == this.state.data.visible && (this.props.data.visible ? setTimeout(function() {
                    e.setState({
                        data: e.state.data.set("fadeOut", !e.state.data.visible)
                    })
                }, 10) : setTimeout(function() {
                    e.setState({
                        data: e.state.data.set("visible", !e.state.data.fadeOut)
                    })
                }, 500))
            }
        }, {
            key: "closeZoomMenu",
            value: function(e) {
                (0,
                p.Dispatch)(p.ACTION.ZOOM_MENU.CLOSE),
                e.preventDefault(),
                e.stopPropagation()
            }
        }, {
            key: "touchStartZoom",
            value: function(e) {
                if (!this.touchTriggered) {
                    this.touchTriggered = !0,
                    setTimeout(function() {
                        this.touchTriggered = !1
                    }
                    .bind(this), 250),
                    this.setState({
                        data: this.state.data.update("indicatorTapped", function(e) {
                            return !0
                        })
                    });
                    var t = e.touches ? e.touches[0].clientY : e.clientY
                      , n = this.refs.zoomMain.getBoundingClientRect()
                      , i = Math.max(Math.min(1 - (t - n.top) / n.height, 1), 0);
                    this.refs.zoomIndicator.style.bottom = 100 * i + "%",
                    this.refs.blueZoomBar.style.height = 100 * i + "%"
                }
            }
        }, {
            key: "touchMoveZoom",
            value: function(e) {
                e.preventDefault();
                var t = e.touches ? e.touches[0].clientY : e.clientY
                  , n = this.refs.zoomMain.getBoundingClientRect()
                  , i = Math.max(Math.min(1 - (t - n.top) / n.height, 1), 0);
                this.refs.indicatorText.innerHTML = i > .875 ? "1/32 Zoom" : i > .625 ? "1/16 Zoom" : i > .375 ? "1/8 Zoom" : i > .125 ? "1/4 Zoom" : "Bar View",
                this.refs.zoomIndicator.style.bottom = 100 * i + "%",
                this.refs.blueZoomBar.style.height = 100 * i + "%"
            }
        }, {
            key: "touchEndZoom",
            value: function(e) {
                var t, n = e.touches ? e.changedTouches[0].clientY : e.clientY, i = this.refs.zoomMain.getBoundingClientRect(), o = Math.max(Math.min(1 - (n - i.top) / i.height, 1), 0);
                t = o > .875 ? 8 : o > .625 ? 4 : o > .375 ? 2 : o > .125 ? 1 : 0,
                this.props.viewId == f.ID.EDIT_VIEW ? 0 === t ? (0,
                p.Dispatch)(p.ACTION.VIEW.CHANGE, {
                    viewId: f.ID.MEASURE_VIEW
                }, this) : (0,
                p.Dispatch)(p.ACTION.CAMERA.ANIMATE_ZOOM, {
                    zoomScale: t
                }, this) : 0 !== t && (0,
                p.Dispatch)(p.ACTION.VIEW.CHANGE, {
                    viewId: f.ID.EDIT_VIEW,
                    targetContext: {
                        camera: {
                            zoomScale: t
                        }
                    }
                }),
                this.refs.zoomIndicator.style.bottom = 25 * (0 === t ? 0 : Math.log2(t) + 1) + "%",
                this.refs.blueZoomBar.style.height = 25 * (0 === t ? 0 : Math.log2(t) + 1) + "%",
                this.setState({
                    data: this.state.data.update("uiZoomScale", function(e) {
                        return t
                    }).update("indicatorTapped", function(e) {
                        return !1
                    })
                })
            }
        }, {
            key: "renderZoomTicks",
            value: function(e) {
                return [0, 1, 2, 3, 4].map(function(t) {
                    var n = {
                        position: "absolute",
                        top: 25 * t + "%",
                        width: 4,
                        height: 1,
                        backgroundImage: 'url("./res/sidebar/zoom/img_tic@2x-5afc397b00d468b4f8ff4dac8ac3707d.png")',
                        backgroundSize: "4px 1px"
                    };
                    return c.default.createElement("div", {
                        key: (e && e.left ? "left-" : "right-") + t,
                        className: "zoom-ticks",
                        style: n
                    })
                })
            }
        }, {
            key: "renderLeftTicks",
            value: function() {
                return this.renderZoomTicks({
                    left: !0
                })
            }
        }, {
            key: "renderRightTicks",
            value: function() {
                return this.renderZoomTicks({
                    left: !1
                })
            }
        }, {
            key: "setIndicatorText",
            value: function() {
                return this.state.data.indicatorTapped ? 0 === this.state.data.uiZoomScale ? "Bar View" : "1/" + 4 * this.state.data.uiZoomScale + " Zoom" : 0 === this.state.data.uiZoomScale ? "Bar" : "1/" + 4 * this.state.data.uiZoomScale
            }
        }, {
            key: "render",
            value: function() {
                var e = this.state.data.visible;
                return c.default.createElement("div", {
                    id: "zoom-menu",
                    className: "zoom-scale-container",
                    style: s({}, m.zoomScaleContainer, {
                        display: e ? "block" : "none",
                        pointerEvents: e ? "initial" : "none",
                        opacity: this.state.data.fadeOut ? 0 : 1
                    })
                }, c.default.createElement("div", {
                    style: m.zoomMenuHeader
                }, c.default.createElement("div", {
                    style: m.headerText
                }, "Adjust to zoom in and out of time")), c.default.createElement("div", {
                    style: m.zoomIconWrap
                }, c.default.createElement("div", {
                    className: "icon zoom-in-icon"
                }, " ")), c.default.createElement("div", {
                    ref: "zoomMain",
                    className: "zoom-main-container",
                    style: m.zoomMainContainer,
                    onTouchStart: this.touchStartZoom.bind(this),
                    onMouseDown: this.touchStartZoom.bind(this),
                    onTouchMove: this.touchMoveZoom.bind(this),
                    onMouseMove: this.touchMoveZoom.bind(this),
                    onTouchEnd: this.touchEndZoom.bind(this),
                    onMouseUp: this.touchEndZoom.bind(this)
                }, c.default.createElement("div", {
                    className: "zoom-ticks-container left-ticks",
                    style: s({}, m.zoomTicksContainer, m.leftTicks)
                }, this.renderLeftTicks()), c.default.createElement("div", {
                    className: "zoom-slider-container",
                    style: m.zoomSliderContainer
                }, c.default.createElement("div", {
                    className: "zoom-slider",
                    style: m.zoomSlider
                }, c.default.createElement("div", {
                    className: "zoom-indicator",
                    ref: "zoomIndicator",
                    style: s({}, m.zoomIndicator, {
                        bottom: 25 * (0 === this.state.data.uiZoomScale ? 0 : Math.log2(this.state.data.uiZoomScale) + 1) + "%",
                        width: this.state.data.indicatorTapped ? 136 : 48,
                        height: this.state.data.indicatorTapped ? 24 : 16
                    })
                }, c.default.createElement("span", {
                    ref: "indicatorText",
                    className: "zoom-indicator-text",
                    style: s({}, m.zoomIndicatorText, {
                        lineHeight: this.state.data.indicatorTapped ? "26px" : "18px",
                        right: this.state.data.indicatorTapped ? 8 : "50%",
                        transform: this.state.data.indicatorTapped ? "" : "translateX(50%)"
                    })
                }, this.setIndicatorText())), c.default.createElement("div", {
                    className: "blue-zoom-bar",
                    ref: "blueZoomBar",
                    style: s({}, m.blueZoomBar, {
                        height: 25 * (0 === this.state.data.uiZoomScale ? 0 : Math.log2(this.state.data.uiZoomScale) + 1) + "%"
                    })
                }))), c.default.createElement("div", {
                    className: "zoom-ticks-container right-ticks",
                    style: s({}, m.zoomTicksContainer, m.rightTicks)
                }, this.renderRightTicks())), c.default.createElement("div", {
                    style: m.zoomIconWrap
                }, c.default.createElement("div", {
                    className: "icon zoom-out-icon"
                }, " ")), c.default.createElement("div", {
                    onTouchStart: this.closeZoomMenu.bind(this),
                    onMouseUp: this.closeZoomMenu.bind(this),
                    style: m.doneBtn
                }, "Done"), c.default.createElement("div", {
                    className: "zoom-bottom-gradient",
                    style: m.bottomGradient
                }))
            }
        }]),
        t
    }(c.default.Component),
    {
        zoomScaleContainer: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: f.config.sidebarWidth,
            backgroundColor: "#562889",
            transition: "opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1)"
        },
        zoomMenuHeader: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: 64,
            paddingLeft: f.config.sidebarWidth,
            boxSizing: "border-box"
        },
        headerText: {
            width: "100%",
            height: 64,
            textAlign: "center",
            fontSize: 16,
            color: "#fff",
            fontWeight: 600,
            lineHeight: "48px",
            backgroundImage: 'url("./res/sidebar/gradient_top@2x-23f6329f6874d95fb006b5c87c08cfe8.png")',
            backgroundSize: 64,
            backgroundPosition: f.config.sidebarWidth
        },
        zoomIconWrap: {
            width: "100%",
            height: "15%",
            position: "relative"
        },
        zoomMainContainer: {
            position: "relative",
            height: "55%",
            width: "100%",
            margin: "0 auto",
            zIndex: 2
        },
        zoomTicksContainer: {
            position: "absolute",
            top: 0,
            height: "100%",
            width: 4
        },
        rightTicks: {
            left: "50%",
            marginLeft: 11
        },
        leftTicks: {
            left: "50%",
            marginLeft: -15
        },
        zoomSliderContainer: {
            position: "relative",
            zIndex: 1
        },
        zoomSlider: {
            position: "relative",
            width: 2,
            height: "100%",
            margin: "0 auto",
            borderRadius: 2,
            backgroundColor: "#b6b6b6"
        },
        zoomIndicator: {
            position: "absolute",
            left: -23,
            marginBottom: -8,
            borderRadius: 4,
            backgroundColor: "#4a90e2",
            zIndex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            transition: "width 350ms ease, height 350ms ease"
        },
        zoomIndicatorText: {
            position: "absolute",
            fontSize: 12,
            color: "#fff",
            transition: "right 350ms ease, line-height 350ms ease"
        },
        blueZoomBar: {
            position: "absolute",
            left: 0,
            bottom: 0,
            width: 2,
            backgroundColor: "#4a90e2"
        },
        doneBtn: {
            position: "absolute",
            bottom: 0,
            width: 48,
            height: 48,
            margin: 8,
            fontSize: 14,
            color: "#fff",
            fontWeight: 600,
            lineHeight: "48px",
            textAlign: "center",
            zIndex: 2
        },
        bottomGradient: {
            position: "absolute",
            bottom: 0,
            width: 64,
            height: 188,
            zIndex: 1,
            background: "linear-gradient(rgba(0, 0, 0, 0), rgba(166, 116, 159, 1))",
            pointerEvents: "none",
            opacity: .4
        }
    })
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function r(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EditViewInteraction = void 0;
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , s = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var a = o.get;
            if (void 0 !== a)
                return a.call(i)
        }
          , l = n(126)
          , u = n(120)
          , c = n(4)
          , h = n(0)
          , d = (t.EditViewInteraction = function(t) {
            function n(e, t, r, a, s, l, h, E) {
                i(this, n);
                var T = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t, r, a, s, l));
                return T.viewport = h,
                T.arrPlayer = E,
                T.currentGesture = T.gestures[c.ID.GESTURE.NULL_GESTURE] = new d(T),
                T.defaultGesture = T.gestures[c.ID.GESTURE.NULL_GESTURE],
                T.gestures[c.ID.GESTURE.ROW_ACTION_GESTURE] = new p(T),
                T.gestures[c.ID.GESTURE.ZOOM_MENU_GESTURE] = new f(T),
                T.gestures[c.ID.GESTURE.ADD_NOTE_GESTURE] = new m(T),
                T.gestures[c.ID.GESTURE.MINIMAP_GESTURE] = new g(T),
                T.gestures[c.ID.GESTURE.PINCH_GESTURE] = new v(T),
                T.gestures[c.ID.GESTURE.PAN_GESTURE] = new y(T,T.arrPlayer),
                T.gestures[c.ID.GESTURE.PLAYBACK_PAN_GESTURE] = new b(T),
                T.gestures[c.ID.GESTURE.DISABLED_GESTURE] = new u.Gesture(T),
                T
            }
            return r(n, t),
            a(n, [{
                key: "disableGesture",
                value: function() {
                    this.gestures[c.ID.GESTURE.DISABLED_GESTURE].enter()
                }
            }, {
                key: "enableGesture",
                value: function() {
                    this.gestures[c.ID.GESTURE.NULL_GESTURE].enter()
                }
            }, {
                key: "enterPlayBackPanGesture",
                value: function() {
                    this.gestures[c.ID.GESTURE.PLAYBACK_PAN_GESTURE].enter()
                }
            }, {
                key: "enterNullGesture",
                value: function() {
                    this.gestures[c.ID.GESTURE.NULL_GESTURE].enter()
                }
            }, {
                key: "enterZoomMenuGesture",
                value: function() {
                    this.gestures[c.ID.GESTURE.ZOOM_MENU_GESTURE].enter()
                }
            }, {
                key: "initListeners",
                value: function() {
                    s(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "initListeners", this).call(this),
                    e(this.viewport).on("wheel.editView", this._mousewheelPan.bind(this))
                }
            }, {
                key: "removeListeners",
                value: function() {
                    s(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "removeListeners", this).call(this),
                    e(window).off(".editView"),
                    e(this.viewport).off("wheel.editView")
                }
            }, {
                key: "_mousewheelPan",
                value: function(e) {
                    this.camera.pan(0, e.originalEvent.deltaY)
                }
            }]),
            n
        }(u.Interaction),
        function(e) {
            function t() {
                return i(this, t),
                o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return r(t, e),
            a(t, [{
                key: "touchStart",
                value: function(e) {
                    this.interaction.enter(c.ID.GESTURE.ADD_NOTE_GESTURE, e).touchStart(e)
                }
            }]),
            t
        }(u.Gesture))
          , p = function(e) {
            function t(e) {
                return i(this, t),
                o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return r(t, e),
            a(t, [{
                key: "enter",
                value: function(e) {
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enter", this).call(this),
                    (0,
                    h.Dispatch)(h.ACTION.ROW_MENU.OPEN, e, this)
                }
            }]),
            t
        }(u.Gesture)
          , f = function(e) {
            function t(e) {
                return i(this, t),
                o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return r(t, e),
            a(t, [{
                key: "enter",
                value: function(e) {
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enter", this).call(this)
                }
            }, {
                key: "touchStart",
                value: function(e) {
                    (0,
                    h.Dispatch)(h.ACTION.ZOOM_MENU.CLOSE)
                }
            }]),
            t
        }(u.Gesture)
          , m = function(e) {
            function t(e) {
                i(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.mouseMoveDistSqr = 25,
                n.rowActionTapThreshold = 1,
                n.minimapTapThreshold = .75,
                n.startPos = {},
                n.elapsedTime = 0,
                n.clickPoints = [],
                n
            }
            return r(t, e),
            a(t, [{
                key: "_leave",
                value: function() {
                    this.startPos = {},
                    this.elapsedTime = 0,
                    this.clickPoints = []
                }
            }, {
                key: "touchStart",
                value: function(e) {
                    var t = e.data.originalEvent;
                    this.startScreenPos = {
                        x: t.touches ? t.touches[0].clientX : t.clientX,
                        y: t.touches ? t.touches[0].clientY : t.clientY
                    },
                    this.startPos[e.data.identifier || 0] = e.data.getLocalPosition(this.interaction.targetContainer)
                }
            }, {
                key: "touchMove",
                value: function(e) {
                    var t = e.data.originalEvent
                      , n = {
                        x: t.touches ? t.touches[0].clientX : t.clientX,
                        y: t.touches ? t.touches[0].clientY : t.clientY
                    }
                      , i = n.x - this.startScreenPos.x
                      , o = n.y - this.startScreenPos.y;
                    i * i + o * o > this.mouseMoveDistSqr && (1 == Object.keys(this.startPos).length ? this.interaction.enter(c.ID.GESTURE.PAN_GESTURE).touchStart(e) : 2 == Object.keys(this.startPos).length && this.interaction.enter(c.ID.GESTURE.PINCH_GESTURE).touchStart(e))
                }
            }, {
                key: "touchEnd",
                value: function(e) {
                    var t = e.data.identifier || 0;
                    this.clickPoints.push(this.startPos[t]),
                    delete this.startPos[t],
                    0 == Object.keys(this.startPos).length && ((0,
                    h.Dispatch)(h.ACTION.PEG_BOARD.CLICK, this.clickPoints),
                    this.interaction.enter(c.ID.GESTURE.NULL_GESTURE))
                }
            }, {
                key: "update",
                value: function(e) {
                    if (this.elapsedTime += e,
                    this.elapsedTime > this.minimapTapThreshold && 2 == Object.keys(this.startPos).length)
                        this.interaction.enter(c.ID.GESTURE.MINIMAP_GESTURE);
                    else if (this.elapsedTime > this.rowActionTapThreshold && 1 == Object.keys(this.startPos).length) {
                        var t = Object.keys(this.startPos)[0];
                        this.interaction.enter(c.ID.GESTURE.ROW_ACTION_GESTURE, this.startPos[t])
                    }
                }
            }]),
            t
        }(u.Gesture)
          , y = function(e) {
            function t(e, n) {
                i(this, t);
                var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r.minimapTapThreshold = .75,
                r.multiTouchElapsedTime = 0,
                r.multiTouch = !1,
                r.momentumPan = new l.Momentum(r.interaction.camera,r.interaction.clickMask,r.interaction.targetContainer,r.interaction.viewConfig,n),
                r
            }
            return r(t, e),
            a(t, [{
                key: "_leave",
                value: function() {
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_leave", this).call(this),
                    this.multiTouchElapsedTime = 0,
                    this.momentumPan.stop(),
                    this.momentumPan.reset()
                }
            }, {
                key: "enter",
                value: function() {
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enter", this).call(this),
                    this.momentumPan.reset()
                }
            }, {
                key: "touchStart",
                value: function(e) {
                    var t = e.data.originalEvent;
                    this.multiTouch = t.touches && t.touches.length > 1,
                    this.momentumPan.touchStart(e)
                }
            }, {
                key: "touchMove",
                value: function(e) {
                    this.momentumPan.touchMove(e)
                }
            }, {
                key: "touchEnd",
                value: function(e) {
                    var t = e.data.originalEvent;
                    this.multiTouch = t.touches && t.touches.length > 1,
                    this.multiTouch || (this.multiTouchElapsedTime = 0),
                    this.momentumPan.touchEnd(e)
                }
            }, {
                key: "update",
                value: function(e) {
                    if (this.multiTouch && (this.multiTouchElapsedTime += e),
                    this.momentumPan.update(e),
                    this.multiTouchElapsedTime > this.minimapTapThreshold)
                        return void this.interaction.enter(c.ID.GESTURE.MINIMAP_GESTURE);
                    this.momentumPan.stopped() && this.interaction.enter(c.ID.GESTURE.NULL_GESTURE)
                }
            }]),
            t
        }(u.Gesture)
          , g = function(e) {
            function t() {
                return i(this, t),
                o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return r(t, e),
            a(t, [{
                key: "_leave",
                value: function() {
                    (0,
                    h.Dispatch)(h.ACTION.MINIMAP.CLOSE)
                }
            }, {
                key: "enter",
                value: function() {
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enter", this).call(this),
                    (0,
                    h.Dispatch)(h.ACTION.MINIMAP.OPEN)
                }
            }, {
                key: "touchEnd",
                value: function(e) {
                    this.interaction.enter(c.ID.GESTURE.NULL_GESTURE)
                }
            }]),
            t
        }(u.Gesture)
          , v = function(e) {
            function t(e) {
                i(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.pinchThreshold = 50,
                n._resetStates(),
                n
            }
            return r(t, e),
            a(t, [{
                key: "_resetStates",
                value: function() {
                    this.pinchAccX = 0,
                    this.pinchDistX = 0,
                    this.pinchDistY = 0
                }
            }, {
                key: "_leave",
                value: function() {
                    this._resetStates()
                }
            }, {
                key: "touchStart",
                value: function(e) {}
            }, {
                key: "touchMove",
                value: function(e) {
                    var t = e.data.originalEvent;
                    if (t.touches && t.touches.length > 1) {
                        var n = t.touches
                          , i = Math.abs(n[0].clientX - n[1].clientX)
                          , o = Math.abs(n[0].clientY - n[1].clientY)
                          , r = i - (this.pinchDistX || i)
                          , a = o - (this.pinchDistY || o);
                        a * a > r * r ? r = 0 : a = 0,
                        this.pinchAccX += r,
                        this.pinchDistX = i,
                        this.pinchDistY = o,
                        this.pinchAccX < -this.pinchThreshold ? ((0,
                        h.Dispatch)(h.ACTION.CHROMATIC.CLOSE),
                        this._resetStates()) : this.pinchAccX > this.pinchThreshold && ((0,
                        h.Dispatch)(h.ACTION.CHROMATIC.OPEN),
                        this._resetStates()),
                        a * a > 0 && (0,
                        h.Dispatch)(h.ACTION.CAMERA.PINCH_ZOOM, {
                            dy: a
                        })
                    }
                }
            }, {
                key: "touchEnd",
                value: function(e) {
                    (0,
                    h.Dispatch)(h.ACTION.CAMERA.ZOOM_TO_NEAREST),
                    this.interaction.enter(c.ID.GESTURE.NULL_GESTURE)
                }
            }]),
            t
        }(u.Gesture)
          , b = function(e) {
            function t(e) {
                i(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.mouseMoveDistSqr = 25,
                n.startPos = {},
                n.elapsedTime = 0,
                n.startScreenPos = {},
                n
            }
            return r(t, e),
            a(t, [{
                key: "_leave",
                value: function() {
                    this.startPos = {},
                    this.elapsedTime = 0
                }
            }, {
                key: "touchStart",
                value: function(e) {
                    var t = e.data.originalEvent;
                    this.startScreenPos = {
                        x: t.touches ? t.touches[0].clientX : t.clientX,
                        y: t.touches ? t.touches[0].clientY : t.clientY
                    },
                    this.startPos[e.data.identifier || 0] = !0
                }
            }, {
                key: "touchMove",
                value: function(e) {
                    var t = e.data.originalEvent
                      , n = {
                        x: t.touches ? t.touches[0].clientX : t.clientX,
                        y: t.touches ? t.touches[0].clientY : t.clientY
                    }
                      , i = n.x - this.startScreenPos.x || n.x
                      , o = n.y - this.startScreenPos.y || n.y;
                    i * i + o * o > this.mouseMoveDistSqr && 1 == Object.keys(this.startPos).length && this.interaction.enter(c.ID.GESTURE.PAN_GESTURE).touchStart(e)
                }
            }, {
                key: "touchEnd",
                value: function(e) {
                    this.interaction.enter(c.ID.GESTURE.NULL_GESTURE)
                }
            }, {
                key: "update",
                value: function(e) {
                    this.elapsedTime += e
                }
            }]),
            t
        }(u.Gesture)
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.MeasureViewInteraction = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, i)
        }
        if ("value"in o)
            return o.value;
        var a = o.get;
        if (void 0 !== a)
            return a.call(i)
    }
      , l = n(126)
      , u = n(0)
      , c = n(4)
      , h = n(120)
      , d = (t.MeasureViewInteraction = function(e) {
        function t(e, n, r, a, s, l, u) {
            i(this, t);
            var y = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r, a, s, l));
            return y.currentGesture = y.gestures[c.ID.GESTURE.NULL_GESTURE] = new d(y),
            y.defaultGesture = y.gestures[c.ID.GESTURE.NULL_GESTURE],
            y.gestures[c.ID.GESTURE.PINCH_GESTURE] = new f(y),
            y.gestures[c.ID.GESTURE.PAN_GESTURE] = new p(y,u),
            y.gestures[c.ID.GESTURE.ZOOM_MENU_GESTURE] = new m(y),
            y.gestures[c.ID.GESTURE.DISABLED_GESTURE] = new h.Gesture(y),
            y
        }
        return r(t, e),
        a(t, [{
            key: "enterZoomMenuGesture",
            value: function() {
                this.gestures[c.ID.GESTURE.ZOOM_MENU_GESTURE].enter()
            }
        }, {
            key: "enterNullGesture",
            value: function() {
                this.gestures[c.ID.GESTURE.NULL_GESTURE].enter()
            }
        }, {
            key: "disableGesture",
            value: function() {
                this.gestures[c.ID.GESTURE.DISABLED_GESTURE].enter()
            }
        }, {
            key: "enableGesture",
            value: function() {
                this.gestures[c.ID.GESTURE.NULL_GESTURE].enter()
            }
        }, {
            key: "initListeners",
            value: function(e) {
                s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "initListeners", this).call(this),
                e.zoomMenu.visible ? this.enterZoomMenuGesture() : this.enterNullGesture()
            }
        }, {
            key: "removeListeners",
            value: function() {
                s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeListeners", this).call(this)
            }
        }]),
        t
    }(h.Interaction),
    function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        a(t, [{
            key: "touchStart",
            value: function(e) {
                this.interaction.enter(c.ID.GESTURE.PAN_GESTURE, e).touchStart(e)
            }
        }]),
        t
    }(h.Gesture))
      , p = function(e) {
        function t(e, n) {
            i(this, t);
            var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return r.momentumPan = new l.Momentum(r.interaction.camera,r.interaction.clickMask,r.interaction.targetContainer,r.interaction.viewConfig,n),
            r
        }
        return r(t, e),
        a(t, [{
            key: "_leave",
            value: function() {
                s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_leave", this).call(this),
                this.momentumPan.reset()
            }
        }, {
            key: "enter",
            value: function() {
                s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enter", this).call(this),
                this.momentumPan.reset()
            }
        }, {
            key: "touchStart",
            value: function(e) {
                this.momentumPan.touchStart(e)
            }
        }, {
            key: "touchMove",
            value: function(e) {
                e.data.originalEvent.touches.length > 1 ? this.interaction.enter(c.ID.GESTURE.PINCH_GESTURE, e).touchMove(e) : this.momentumPan.touchMove(e)
            }
        }, {
            key: "touchEnd",
            value: function(e) {
                this.momentumPan.touchEnd(e)
            }
        }, {
            key: "update",
            value: function(e) {
                this.momentumPan.update(e),
                this.momentumPan.stopped() && this.interaction.enter(c.ID.GESTURE.NULL_GESTURE)
            }
        }]),
        t
    }(h.Gesture)
      , f = function(e) {
        function t(e) {
            i(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.pinchZoomTriggerDistSqr = 50,
            n.pinchDist = 0,
            n.pinchDelta = 0,
            n.noPinch = !1,
            n
        }
        return r(t, e),
        a(t, [{
            key: "_leave",
            value: function() {
                this.pinchDist = 0,
                this.pinchDelta = 0
            }
        }, {
            key: "touchMove",
            value: function(e) {
                this.noPinch && this.interaction.enter(c.ID.GESTURE.NULL_GESTURE);
                var t = e.data.originalEvent
                  , n = t.touches
                  , i = Math.pow(n[0].clientY - n[1].clientY, 2);
                Math.pow(n[0].clientX - n[1].clientX, 2) > i && (i = 0),
                this.pinchDelta += i - (this.pinchDist || i),
                this.pinchDist = i,
                this.pinchDelta > this.pinchZoomTriggerDistSqr && ((0,
                u.Dispatch)(u.ACTION.CAMERA.ZOOM_IN),
                this.pinchDelta = 0,
                this.pinchDist = null)
            }
        }, {
            key: "touchEnd",
            value: function(e) {
                this.interaction.enter(c.ID.GESTURE.NULL_GESTURE)
            }
        }]),
        t
    }(h.Gesture)
      , m = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        a(t, [{
            key: "enter",
            value: function(e) {
                s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "enter", this).call(this)
            }
        }, {
            key: "touchStart",
            value: function(e) {
                (0,
                u.Dispatch)(u.ACTION.ZOOM_MENU.CLOSE, {}, this),
                e.stopPropagation()
            }
        }, {
            key: "touchEnd",
            value: function(e) {
                e.stopPropagation()
            }
        }]),
        t
    }(h.Gesture)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = n(41)
      , a = n(127)
      , s = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a)
      , l = function() {
        function e() {
            i(this, e);
            try {
                var t = JSON.parse(s.default.getDraft());
                t && (this.localSong = (0,
                r.JSON2Arrangement)(t)),
                this.needsUpdate = !1
            } catch (e) {
                console.log(e),
                this.destroy()
            }
        }
        return o(e, [{
            key: "update",
            value: function(e) {
                e.fromDraft = !0,
                e.lastSaved = (new Date).toJSON(),
                s.default.setDraft(JSON.stringify((0,
                r.Arrangement2JSON)(e).arrJSON)),
                this.localSong = (0,
                r.JSON2Arrangement)((0,
                r.Arrangement2JSON)(e).arrJSON),
                this.needsUpdate = !1
            }
        }, {
            key: "destroy",
            value: function() {
                s.default.removeDraft(),
                this.localSong = null
            }
        }]),
        e
    }();
    t.default = l
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , a = n(0)
      , s = n(4)
      , l = function() {
        function e(t, n, o) {
            i(this, e),
            this.type = n.evtName,
            this._snapShot = JSON.stringify(t._export2BeatList()),
            this.timeStamp = o,
            this._initAttributes(t, n)
        }
        return r(e, [{
            key: "_initAttributes",
            value: function(e, t) {
                switch (t.evtName) {
                case a.EVT.ARRANGEMENT.LOAD:
                    break;
                case a.EVT.MEASURE.KEYSIG_UPDATE:
                    this.oldKeySig = t.oldKeySig,
                    this.keySig = t.keySig;
                    break;
                case a.EVT.ARRANGEMENT.TIMESIG_UPDATE:
                    this.numerator = t.numerator;
                    break;
                case a.EVT.ROW.ADD:
                    this.deltaBeat = t.deltaBeat,
                    this.startBeat = t.startBeat;
                    break;
                case a.EVT.ROW.REMOVE:
                    this.deltaBeat = -t.deltaBeat,
                    this.startBeat = t.startBeat;
                    break;
                case a.EVT.NOTE.EDIT:
                    this.keyLabels = {},
                    this.fallBackKeySig = o({}, e.keySig),
                    t.notesToAdd.forEach(function(e) {
                        this.keyLabels[e.pitch] = 1
                    }
                    .bind(this)),
                    t.notesToRemove.forEach(function(e) {
                        this.keyLabels[e.pitch] = -1
                    }
                    .bind(this));
                    break;
                case a.EVT.MEASURE.DELETE:
                    this.targetIndices = t.targetIndices;
                    break;
                case a.EVT.MEASURE.PASTE:
                    this.copy = t.copy,
                    this.targetIndices = t.targetIndices,
                    this.pastePoints = t.pastePoints;
                    break;
                default:
                    this.description = ""
                }
            }
        }, {
            key: "getDescription",
            value: function(e) {
                var t = this;
                e = e || {};
                var n = e.undo;
                switch (this.type) {
                case a.EVT.ARRANGEMENT.LOAD:
                    return "Snapshot for arrangement loaded";
                case a.EVT.MEASURE.KEYSIG_UPDATE:
                    var i = n ? this.oldKeySig : this.keySig;
                    return (i.minor ? s.keySigMap.sharpsToKey.minor : s.keySigMap.sharpsToKey.major)[i.sharps] + " " + (i.minor ? "Minor" : "Major");
                case a.EVT.ARRANGEMENT.TIMESIG_UPDATE:
                    return "";
                case a.EVT.ROW.ADD:
                    return (n ? "Removed" : "Added") + " row";
                case a.EVT.ROW.REMOVE:
                    return (n ? "Added" : "Removed") + " row";
                case a.EVT.NOTE.EDIT:
                    var o = e.keySigReference || this.fallBackKeySig
                      , r = Object.keys(this.keyLabels)
                      , l = r.filter(function(e) {
                        return t.keyLabels[e] > 0
                    })
                      , u = r.filter(function(e) {
                        return t.keyLabels[e] < 0
                    });
                    if (n) {
                        var c = l;
                        l = u,
                        u = c
                    }
                    l = l.map(function(e) {
                        return (0,
                        s.pitch2KeyLabel)(parseInt(e), o)
                    }),
                    u = u.map(function(e) {
                        return (0,
                        s.pitch2KeyLabel)(parseInt(e), o)
                    });
                    var h = [];
                    return l.length > 0 && h.push("Added " + l.join(",")),
                    u.length > 0 && h.push("Removed " + u.join(",")),
                    h.join("\n");
                case a.EVT.MEASURE.DELETE:
                    var d = this.targetIndices.length;
                    return (n ? "Added" : "Removed") + " " + d + " bar" + (d > 1 ? "s" : "");
                case a.EVT.MEASURE.PASTE:
                    if (this.copy) {
                        var d = this.targetIndices.length * this.pastePoints.length;
                        return (n ? "Removed" : "Added") + " " + d + " bar" + (d > 1 ? "s" : "")
                    }
                    var d = this.targetIndices.length * (this.pastePoints.length - 1);
                    return 0 === d ? "Moved " + this.targetIndices.length + " bar" + (1 === this.targetIndices.length ? "" : "s") : (n ? "Removed" : "Added") + " " + d + " bar" + (d > 1 ? "s" : "")
                }
                return ""
            }
        }, {
            key: "merge",
            value: function(e) {
                switch (this.type) {
                case a.EVT.NOTE.EDIT:
                    for (var t in e.keyLabels)
                        this.keyLabels[t] = this.keyLabels[t] || 0,
                        this.keyLabels[t] += e.keyLabels[t];
                    0 == Object.keys(this.keyLabels).filter(function(e) {
                        return 0 != this.keyLabels[e]
                    }
                    .bind(this)).length && (this.skippable = !0)
                }
            }
        }, {
            key: "applyTo",
            value: function(e) {
                e._loadBeatList(JSON.parse(this._snapShot))
            }
        }]),
        e
    }();
    t.default = l
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), l = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, i)
        }
        if ("value"in o)
            return o.value;
        var a = o.get;
        if (void 0 !== a)
            return a.call(i)
    }, u = n(31), c = n(67), h = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        s(t, [{
            key: "get",
            value: function() {
                var e = l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "get", this).call(this);
                return e ? (e.reset(),
                e) : new c.Note
            }
        }], [{
            key: "getInstance",
            value: function() {
                return a || (a = new t),
                a
            }
        }]),
        t
    }(u.ObjectPool);
    window.notePool = h.getInstance(),
    t.default = h.getInstance()
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), l = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, i)
        }
        if ("value"in o)
            return o.value;
        var a = o.get;
        if (void 0 !== a)
            return a.call(i)
    }, u = n(31), c = (n(67),
    n(214)), h = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        s(t, [{
            key: "get",
            value: function() {
                return l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "get", this).call(this) || new c.OffScreenNote
            }
        }], [{
            key: "getInstance",
            value: function() {
                return a || (a = new t),
                a
            }
        }]),
        t
    }(u.ObjectPool);
    window.offscreen = h.getInstance(),
    t.default = h.getInstance()
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), l = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, n, i)
        }
        if ("value"in o)
            return o.value;
        var a = o.get;
        if (void 0 !== a)
            return a.call(i)
    }, u = n(7), c = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(u), h = n(31), d = function(e) {
        function t() {
            return i(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return r(t, e),
        s(t, [{
            key: "get",
            value: function(e, n, i, o, r, a) {
                var s = l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "get", this).call(this) || new c.default.Sprite;
                return s.texture = a,
                s.alpha = e,
                s.position.set(n, i),
                s.anchor.set(o, r),
                s
            }
        }], [{
            key: "getInstance",
            value: function() {
                return a || (a = new t),
                a
            }
        }]),
        t
    }(h.ObjectPool);
    t.default = d.getInstance()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ArrangementController = void 0;
        var i = n(0);
        t.ArrangementController = {
            getPrimeSongJSON: function(t) {
                return new Promise(function(n, i) {
                    t || n(null),
                    e.get("/s/piano/prime_song_json/" + t, function(e) {
                        n(e)
                    })
                }
                )
            },
            getPrimeArrangementJSON: function(t) {
                return new Promise(function(n, i) {
                    t || n(null),
                    e.get("/s/piano/prime_arr_json/" + t, function(e) {
                        n(e)
                    })
                }
                )
            },
            getOwnedArrangementJSON: function(t) {
                return new Promise(function(n, i) {
                    t || n(null),
                    e.get("/s/piano/owned_arr_json/" + t, function(e) {
                        n(e)
                    })
                }
                )
            },
            getPreviewArrangement: function(t) {
                return new Promise(function(n, o) {
                    t || n(null),
                    e.ajax({
                        type: "POST",
                        url: "/s/piano/preview_json",
                        headers: {
                            "cache-control": "no-cache"
                        },
                        data: JSON.stringify(t),
                        dataType: "json",
                        contentType: "application/json"
                    }).done(function(e) {
                        (0,
                        i.Dispatch)(i.ACTION.EDIT_SETTINGS.PREVIEW),
                        n(e)
                    }).fail(function(e) {
                        o(e)
                    })
                }
                )
            }
        }
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = t.Clock = function(e) {
        this.autoStart = void 0 === e || e,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    ;
    i.prototype = {
        constructor: i,
        start: function() {
            this.startTime = performance.now(),
            this.oldTime = this.startTime,
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime(),
            this.running = !1
        },
        getElapsedTime: function() {
            return this.getDelta(),
            this.elapsedTime
        },
        getDelta: function() {
            var e = 0;
            if (this.autoStart && !this.running && this.start(),
            this.running) {
                var t = performance.now();
                e = .001 * (t - this.oldTime),
                this.oldTime = t,
                this.elapsedTime += e
            }
            return e
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.Stats = function() {
        function e(e, t, n) {
            var i = document.createElement(e);
            return i.id = t,
            i.style.cssText = n,
            i
        }
        function t(t, n, i) {
            var o = e("div", t, "padding:0 0 3px 3px;text-align:left;background:" + i)
              , r = e("div", t + "Text", "font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:" + n);
            r.innerHTML = t.toUpperCase(),
            o.appendChild(r);
            var a = e("div", t + "Graph", "width:74px;height:30px;background:" + n);
            o.appendChild(a);
            for (var s = 0; s < 74; s++)
                a.appendChild(e("span", "", "width:1px;height:30px;float:left;opacity:0.9;background:" + i));
            return o
        }
        function n(e) {
            for (var t = u.children, n = 0; n < t.length; n++)
                t[n].style.display = n === e ? "block" : "none";
            l = e
        }
        function i(e, t) {
            e.appendChild(e.firstChild).style.height = Math.min(30, 30 - 30 * t) + "px"
        }
        var o = self.performance && self.performance.now ? self.performance.now.bind(performance) : Date.now
          , r = o()
          , a = r
          , s = 0
          , l = 0
          , u = e("div", "stats", "width:80px;opacity:0.9;cursor:pointer");
        u.addEventListener("mousedown", function(e) {
            e.preventDefault(),
            n(++l % u.children.length)
        }, !1);
        var c = 0
          , h = 1 / 0
          , d = 0
          , p = t("fps", "#0ff", "#002")
          , f = p.children[0]
          , m = p.children[1];
        u.appendChild(p);
        var y = 0
          , g = 1 / 0
          , v = 0
          , b = t("ms", "#0f0", "#020")
          , E = b.children[0]
          , T = b.children[1];
        if (u.appendChild(b),
        self.performance && self.performance.memory) {
            var S = 0
              , _ = 1 / 0
              , w = 0
              , O = t("mb", "#f08", "#201")
              , k = O.children[0]
              , C = O.children[1];
            u.appendChild(O)
        }
        return n(l),
        {
            REVISION: 14,
            domElement: u,
            setMode: n,
            begin: function() {
                r = o()
            },
            end: function() {
                var e = o();
                if (y = e - r,
                g = Math.min(g, y),
                v = Math.max(v, y),
                E.textContent = (0 | y) + " MS (" + (0 | g) + "-" + (0 | v) + ")",
                i(T, y / 200),
                s++,
                e > a + 1e3 && (c = Math.round(1e3 * s / (e - a)),
                h = Math.min(h, c),
                d = Math.max(d, c),
                f.textContent = c + " FPS (" + h + "-" + d + ")",
                i(m, c / 100),
                a = e,
                s = 0,
                void 0 !== S)) {
                    var t = performance.memory.usedJSHeapSize
                      , n = performance.memory.jsHeapSizeLimit;
                    S = Math.round(9.54e-7 * t),
                    _ = Math.min(_, S),
                    w = Math.max(w, S),
                    k.textContent = S + " MB (" + _ + "-" + w + ")",
                    i(C, t / n)
                }
                return e
            },
            update: function() {
                r = this.end()
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Player = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = n(431)
      , a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , s = function() {
        function e() {
            i(this, e),
            window.webkit ? this.initIOSPlayer() : "undefined" != typeof Android ? this.initAndroidPlayer() : this.initDesktopPlayer()
        }
        return o(e, [{
            key: "initIOSPlayer",
            value: function() {
                window.webkit.messageHandlers.noteOn && window.webkit.messageHandlers.noteOff && (this.play = this.playIOS),
                window.webkit.messageHandlers.allNotesOff && (this.allNotesOff = window.webkit.messageHandlers.allNotesOff.postMessage)
            }
        }, {
            key: "playIOS",
            value: function(e, t, n) {
                window.webkit.messageHandlers.noteOn.postMessage({
                    pitch: e,
                    velocity: t
                })
            }
        }, {
            key: "initAndroidPlayer",
            value: function() {
                Android.noteOn && Android.noteOff && (this.play = this.playAndroid),
                Android.allNotesOff && (this.allNotesOff = Android.allNotesOff)
            }
        }, {
            key: "playAndroid",
            value: function(e, t, n) {
                Android.noteOn(e, t)
            }
        }, {
            key: "initDesktopPlayer",
            value: function() {
                a.default.loadPlugin && (a.default.loadPlugin({
                    instrument: "acoustic_grand_piano",
                    targetFormat: /iPad|iPhone|iPod/.test(navigator.userAgent) ? "mp3" : "ogg",
                    onprogress: function(e, t) {
                        console.log(e, t)
                    },
                    onsuccess: function() {
                        console.log("loaded MIDI"),
                        this.loaded = !0
                    }
                    .bind(this)
                }),
                this.play = this.playDesktop)
            }
        }, {
            key: "playDesktop",
            value: function(e, t, n) {
                this.loaded && (a.default.setVolume(0, t),
                a.default.noteOn(0, e, t, 0),
                a.default.noteOff(0, e, n))
            }
        }, {
            key: "play",
            value: function(e, t, n) {
                console.log("play Stubbed")
            }
        }, {
            key: "allNotesOff",
            value: function() {
                console.log("allNotesOff Stubbed")
            }
        }]),
        e
    }()
      , l = new s;
    t.Player = l
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        r.default.ajax({
            url: "/s/piano/midi_2_json",
            data: {
                name: e.name,
                file: e.file
            },
            type: "POST"
        }).success(t.success)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.uploadMidi = i;
    var o = n(11)
      , r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(o)
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , s = n(7)
      , l = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(s)
      , u = n(128)
      , c = (n(22),
    n(4))
      , h = n(200)
      , d = n(202)
      , p = n(113)
      , f = n(249)
      , m = n(207)
      , y = n(208)
      , g = n(114)
      , v = n(215)
      , b = function(e) {
        function t(e, n, r, a, s) {
            i(this, t);
            var u = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, c.ID.EDIT_VIEW));
            return u.viewConfig = e,
            u.viewport = c.refs.viewport,
            u.h = u.viewport.offsetHeight,
            u.w = u.viewport.offsetWidth,
            u.backgroundLayer = new l.default.Container,
            u.staticContainer = new l.default.Container,
            u.dynamicOverLay = new l.default.Container,
            u.dynamicContainer = new l.default.Container,
            u.camera = new h.EditCam([u.dynamicContainer, u.dynamicOverLay],1,u,{
                w: u.w,
                h: u.h
            },e,a),
            u.pegMap = new v.Pegmap(u.camera,e,s),
            u.renderer = new d.EditViewRenderer(u.pegMap,u.camera,e,a),
            u.keyboard = new m.Keyboard(a,u.camera,e,r),
            u.keySigIndicator = new y.KeySigIndicator(a,e),
            u.interactionHandler = new f.EditViewInteraction(u.staticContainer,u.camera,u.renderer,u.dynamicContainer,e,u,u.viewport,s),
            u.hud = new p.Hud(u.w,u.h,e),
            u.toastMsg = new g.ToastMsg(e),
            u.hud.addChild(u.keyboard),
            u.hud.addChild(u.keySigIndicator),
            u.staticContainer.addChild(u.hud),
            u.staticContainer.addChild(u.toastMsg),
            u.dynamicContainer.addChild(u.renderer.measureLinesContainer),
            u.dynamicContainer.addChild(u.pegMap),
            u.dynamicContainer.addChild(u.renderer.measureBgContainer),
            u.dynamicContainer.addChild(u.renderer.container),
            u.container.addChild(u.backgroundLayer),
            u.container.addChild(u.dynamicContainer),
            u.container.addChild(u.staticContainer),
            u.container.addChild(u.dynamicOverLay),
            u
        }
        return r(t, e),
        a(t, [{
            key: "update",
            value: function(e) {
                this.keyboard.update(e)
            }
        }]),
        t
    }(u.View);
    t.default = b
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(7)
      , s = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(a)
      , l = n(128)
      , u = (n(22),
    n(4))
      , c = (n(118),
    n(0),
    n(203))
      , h = n(205)
      , d = n(113)
      , p = n(114)
      , f = n(250)
      , m = function(e) {
        function t(e, n, r, a) {
            i(this, t);
            var l = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r, u.ID.MEASURE_VIEW));
            return l.viewConfig = n,
            l.viewport = u.refs.viewport,
            l.h = l.viewport.offsetHeight,
            l.w = l.viewport.offsetWidth,
            l.staticContainer = new s.default.Container,
            l.dynamicContainer = new s.default.Container,
            l.camera = new c.MeasureCam(l,[l.dynamicContainer],n,e),
            l.hud = new d.Hud(l.w,l.h,n),
            l.toastMsg = new p.ToastMsg(n),
            l.renderer = new h.MeasureViewRenderer(l.dynamicContainer,l.camera,n,e),
            l.interactionHandler = new f.MeasureViewInteraction(l.staticContainer,l.camera,l.renderer,l.dynamicContainer,n,l,a),
            l.staticContainer.addChild(l.hud),
            l.staticContainer.addChild(l.toastMsg),
            l.container.addChild(l.dynamicContainer),
            l.container.addChild(l.staticContainer),
            l
        }
        return r(t, e),
        t
    }(l.View);
    t.default = m
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , r = n(1)
          , a = (t(r),
        n(4))
          , s = n(188)
          , l = t(s)
          , u = n(192)
          , c = t(u)
          , h = n(191)
          , d = t(h)
          , p = n(0)
          , f = n(189)
          , m = n(190)
          , y = n(194)
          , g = n(106)
          , v = t(g)
          , b = n(193)
          , E = t(b);
        window.onerror = E.default,
        window.onload = function() {
            window.ArrMeta.debugMode && v.default.enable(),
            (0,
            y.checkWebGLSupport)() ? a.refs.webComposer = new T : alert("Unable to initialize WebGL. Your browser may not support it.");
            var t = e('meta[name="csrf-token"]').attr("content");
            e.ajaxPrefilter(function(e, n, i) {
                "post" === e.type.toLowerCase() && i.setRequestHeader("X-CSRF-Token", t)
            })
        }
        ;
        var T = function() {
            function e() {
                i(this, e),
                this.history = new d.default(a.config.historyLength),
                this.arrPlayer = new c.default,
                this.arrMan = new l.default(this.arrPlayer,this.history),
                this.arrMan.initialize(),
                this.composerUIController = new m.ComposerUIController(this.arrMan,this.arrPlayer,this.history),
                this.initEventListeners(),
                this.composerUIController.renderView()
            }
            return o(e, [{
                key: "initEventListeners",
                value: function() {
                    this.oLoadPixiGraphics = this.loadPixiGraphics.bind(this),
                    p.Event.on(p.EVT.COMPOSER_UI.LOADED, this.oLoadPixiGraphics)
                }
            }, {
                key: "loadPixiGraphics",
                value: function() {
                    console.log("Composer UI loaded"),
                    this.composerGraphics = new f.ComposerGraphics(this,this.composerUIController,this.arrMan,this.arrPlayer)
                }
            }]),
            e
        }()
    }
    ).call(t, n(11))
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = MIDI
}
], [263]);
