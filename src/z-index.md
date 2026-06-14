# Z-Index

To keep track of the z-index used in this repo.

| Value    | Component                        | Notes                              |
|----------|----------------------------------|------------------------------------|
| z-10     | not-found.tsx                    | Content above background           |
| z-40     | mobile-nav.tsx                   | Full-screen overlay                |
| z-50     | header.tsx                       | Sticky header                      |
| z-50     | back-to-top.tsx                  | Fixed bottom-right button          |
| z-[60]   | scroll-progress.tsx              | Fixed top bar, above header        |
| z-9998   | body::after (globals.css)        | Grain texture overlay, pointer-events: none |
