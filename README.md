# Places

The actor's backstage, as an app for your phone.

**Open it:** https://islal08.github.io/places/

## Put it on your Home Screen

- **iPhone:** open the link in Safari, tap the Share button, then **Add to Home Screen**.
- **Android:** open the link in Chrome and tap **Install** (or Menu, then **Add to Home screen**).

Once added it opens full screen like any other app, and it works offline: the whole library is saved on the phone after the first visit. Your scripts, highlights, notes and roles are stored on your device only and are never uploaded.

## What's inside

- **Prompt Book**: all 38 of Shakespeare's plays with study notes, character profiles and a line-by-line modern English translation; over a thousand monologues; the 154 sonnets; a directory of screen monologues; your own scripts and highlights.
- **Rehearsal Room**: run your lines with the text hidden, and let the microphone check you word by word.
- **Cold Reads**: a speech you have never seen, a short prep, then perform.
- **Warm-Up Room**: guided voice and body warm-ups with a timer, plus tongue twisters.
- **Rolebook**: a dossier for every part you are cast in.
- **Prompter**: a teleprompter for any speech or scene.

## Sources and credits

- **Shakespeare's plays:** [Folger Digital Texts](https://www.folger.edu/explore/shakespeares-works/), Folger Shakespeare Library, used under [CC BY-NC 3.0](https://creativecommons.org/licenses/by-nc/3.0/). Changes: the texts are split into scenes and speeches for this app; the wording is unchanged. The modern English translations, study notes and character notes are new work written for Places. Non-commercial use only.
- **The sonnets and the modern classics** (Chekhov, Ibsen, Shaw, Wilde, Synge, O'Neill, Galsworthy, Robins): public-domain editions sourced from Project Gutenberg. Translators are credited on each speech.
- **Screen monologues:** listings only. The words belong to their writers; each entry links to the official published script.

## Updating (for whoever maintains it)

The source lives outside this folder in `prompt-book/build/`. To publish a change:

```
python3 build/assemble.py && python3 build/site.py
cd app && git add -A && git commit -m "Update Places" && git push
```

GitHub Pages redeploys in about a minute. The service worker's cache name is generated from the content, so installed copies pick up the new version on their next launch.
