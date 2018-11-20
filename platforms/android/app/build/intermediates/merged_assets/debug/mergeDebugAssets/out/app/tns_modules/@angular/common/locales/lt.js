/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/lt", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
            return 1;
        if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 &&
            !(n % 100 >= 11 && n % 100 <= 19))
            return 3;
        if (!(f === 0))
            return 4;
        return 5;
    }
    exports.default = [
        'lt', [['pr. p.', 'pop.'], ['priešpiet', 'popiet'], u], u,
        [
            ['S', 'P', 'A', 'T', 'K', 'P', 'Š'], ['sk', 'pr', 'an', 'tr', 'kt', 'pn', 'št'],
            [
                'sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis',
                'penktadienis', 'šeštadienis'
            ],
            ['Sk', 'Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št']
        ],
        u,
        [
            ['S', 'V', 'K', 'B', 'G', 'B', 'L', 'R', 'R', 'S', 'L', 'G'],
            [
                'saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.',
                'lapkr.', 'gruod.'
            ],
            [
                'sausio', 'vasario', 'kovo', 'balandžio', 'gegužės', 'birželio', 'liepos', 'rugpjūčio',
                'rugsėjo', 'spalio', 'lapkričio', 'gruodžio'
            ]
        ],
        [
            ['S', 'V', 'K', 'B', 'G', 'B', 'L', 'R', 'R', 'S', 'L', 'G'],
            [
                'saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.',
                'lapkr.', 'gruod.'
            ],
            [
                'sausis', 'vasaris', 'kovas', 'balandis', 'gegužė', 'birželis', 'liepa', 'rugpjūtis',
                'rugsėjis', 'spalis', 'lapkritis', 'gruodis'
            ]
        ],
        [['pr. Kr.', 'po Kr.'], u, ['prieš Kristų', 'po Kristaus']], 1, [6, 0],
        ['y-MM-dd', u, 'y \'m\'. MMMM d \'d\'.', 'y \'m\'. MMMM d \'d\'., EEEE'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u],
        [',', ' ', ';', '%', '+', '−', '×10^', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], '€', 'Euras', {
            'AUD': [u, '$'],
            'BDT': [],
            'BRL': [u, 'R$'],
            'BYN': [u, 'Br'],
            'CAD': [u, '$'],
            'CNY': [u, '¥'],
            'GBP': [u, '£'],
            'HKD': [u, '$'],
            'ILS': [],
            'INR': [],
            'JPY': [u, '¥'],
            'KHR': [],
            'KRW': [u, '₩'],
            'LAK': [],
            'MNT': [],
            'MXN': [u, '$'],
            'NZD': [u, '$'],
            'PLN': [u, 'zl'],
            'PYG': [u, 'Gs'],
            'RUB': [u, 'rb'],
            'TWD': [u, '$'],
            'USD': [u, '$'],
            'VND': [],
            'XAF': [],
            'XCD': [u, '$'],
            'XOF': [],
            'XPF': []
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9sdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLGdCQUFnQixDQUFTO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxPQUFPLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekQ7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQy9FO2dCQUNFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0I7Z0JBQzdFLGNBQWMsRUFBRSxhQUFhO2FBQzlCO1lBQ0QsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7U0FDM0M7UUFDRCxDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVEO2dCQUNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU87Z0JBQ3BGLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1lBQ0Q7Z0JBQ0UsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVc7Z0JBQ3RGLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVU7YUFDN0M7U0FDRjtRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RDtnQkFDRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPO2dCQUNwRixRQUFRLEVBQUUsUUFBUTthQUNuQjtZQUNEO2dCQUNFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxXQUFXO2dCQUNwRixVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTO2FBQzdDO1NBQ0Y7UUFDRCxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLHdCQUF3QixFQUFFLDhCQUE4QixDQUFDO1FBQ3hFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUNqRSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDM0QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgZiA9IHBhcnNlSW50KG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLCAxMCkgfHwgMDtcbiAgaWYgKG4gJSAxMCA9PT0gMSAmJiAhKG4gJSAxMDAgPj0gMTEgJiYgbiAlIDEwMCA8PSAxOSkpIHJldHVybiAxO1xuICBpZiAobiAlIDEwID09PSBNYXRoLmZsb29yKG4gJSAxMCkgJiYgbiAlIDEwID49IDIgJiYgbiAlIDEwIDw9IDkgJiZcbiAgICAgICEobiAlIDEwMCA+PSAxMSAmJiBuICUgMTAwIDw9IDE5KSlcbiAgICByZXR1cm4gMztcbiAgaWYgKCEoZiA9PT0gMCkpIHJldHVybiA0O1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnbHQnLCBbWydwci4gcC4nLCAncG9wLiddLCBbJ3ByaWXFoXBpZXQnLCAncG9waWV0J10sIHVdLCB1LFxuICBbXG4gICAgWydTJywgJ1AnLCAnQScsICdUJywgJ0snLCAnUCcsICfFoCddLCBbJ3NrJywgJ3ByJywgJ2FuJywgJ3RyJywgJ2t0JywgJ3BuJywgJ8WhdCddLFxuICAgIFtcbiAgICAgICdzZWttYWRpZW5pcycsICdwaXJtYWRpZW5pcycsICdhbnRyYWRpZW5pcycsICd0cmXEjWlhZGllbmlzJywgJ2tldHZpcnRhZGllbmlzJyxcbiAgICAgICdwZW5rdGFkaWVuaXMnLCAnxaFlxaF0YWRpZW5pcydcbiAgICBdLFxuICAgIFsnU2snLCAnUHInLCAnQW4nLCAnVHInLCAnS3QnLCAnUG4nLCAnxaB0J11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsnUycsICdWJywgJ0snLCAnQicsICdHJywgJ0InLCAnTCcsICdSJywgJ1InLCAnUycsICdMJywgJ0cnXSxcbiAgICBbXG4gICAgICAnc2F1cy4nLCAndmFzLicsICdrb3YuJywgJ2JhbC4nLCAnZ2VnLicsICdiaXLFvi4nLCAnbGllcC4nLCAncnVncC4nLCAncnVncy4nLCAnc3BhbC4nLFxuICAgICAgJ2xhcGtyLicsICdncnVvZC4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnc2F1c2lvJywgJ3Zhc2FyaW8nLCAna292bycsICdiYWxhbmTFvmlvJywgJ2dlZ3XFvsSXcycsICdiaXLFvmVsaW8nLCAnbGllcG9zJywgJ3J1Z3BqxavEjWlvJyxcbiAgICAgICdydWdzxJdqbycsICdzcGFsaW8nLCAnbGFwa3JpxI1pbycsICdncnVvZMW+aW8nXG4gICAgXVxuICBdLFxuICBbXG4gICAgWydTJywgJ1YnLCAnSycsICdCJywgJ0cnLCAnQicsICdMJywgJ1InLCAnUicsICdTJywgJ0wnLCAnRyddLFxuICAgIFtcbiAgICAgICdzYXVzLicsICd2YXMuJywgJ2tvdi4nLCAnYmFsLicsICdnZWcuJywgJ2JpcsW+LicsICdsaWVwLicsICdydWdwLicsICdydWdzLicsICdzcGFsLicsXG4gICAgICAnbGFwa3IuJywgJ2dydW9kLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdzYXVzaXMnLCAndmFzYXJpcycsICdrb3ZhcycsICdiYWxhbmRpcycsICdnZWd1xb7ElycsICdiaXLFvmVsaXMnLCAnbGllcGEnLCAncnVncGrFq3RpcycsXG4gICAgICAncnVnc8SXamlzJywgJ3NwYWxpcycsICdsYXBrcml0aXMnLCAnZ3J1b2RpcydcbiAgICBdXG4gIF0sXG4gIFtbJ3ByLiBLci4nLCAncG8gS3IuJ10sIHUsIFsncHJpZcWhIEtyaXN0xbMnLCAncG8gS3Jpc3RhdXMnXV0sIDEsIFs2LCAwXSxcbiAgWyd5LU1NLWRkJywgdSwgJ3kgXFwnbVxcJy4gTU1NTSBkIFxcJ2RcXCcuJywgJ3kgXFwnbVxcJy4gTU1NTSBkIFxcJ2RcXCcuLCBFRUVFJ10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sIFsnezF9IHswfScsIHUsIHUsIHVdLFxuICBbJywnLCAnwqAnLCAnOycsICclJywgJysnLCAn4oiSJywgJ8OXMTBeJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzDCoCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLCAn4oKsJywgJ0V1cmFzJywge1xuICAgICdBVUQnOiBbdSwgJyQnXSxcbiAgICAnQkRUJzogW10sXG4gICAgJ0JSTCc6IFt1LCAnUiQnXSxcbiAgICAnQllOJzogW3UsICdCciddLFxuICAgICdDQUQnOiBbdSwgJyQnXSxcbiAgICAnQ05ZJzogW3UsICfCpSddLFxuICAgICdHQlAnOiBbdSwgJ8KjJ10sXG4gICAgJ0hLRCc6IFt1LCAnJCddLFxuICAgICdJTFMnOiBbXSxcbiAgICAnSU5SJzogW10sXG4gICAgJ0pQWSc6IFt1LCAnwqUnXSxcbiAgICAnS0hSJzogW10sXG4gICAgJ0tSVyc6IFt1LCAn4oKpJ10sXG4gICAgJ0xBSyc6IFtdLFxuICAgICdNTlQnOiBbXSxcbiAgICAnTVhOJzogW3UsICckJ10sXG4gICAgJ05aRCc6IFt1LCAnJCddLFxuICAgICdQTE4nOiBbdSwgJ3psJ10sXG4gICAgJ1BZRyc6IFt1LCAnR3MnXSxcbiAgICAnUlVCJzogW3UsICdyYiddLFxuICAgICdUV0QnOiBbdSwgJyQnXSxcbiAgICAnVVNEJzogW3UsICckJ10sXG4gICAgJ1ZORCc6IFtdLFxuICAgICdYQUYnOiBbXSxcbiAgICAnWENEJzogW3UsICckJ10sXG4gICAgJ1hPRic6IFtdLFxuICAgICdYUEYnOiBbXVxuICB9LFxuICBwbHVyYWxcbl07XG4iXX0=