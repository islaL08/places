# ESPA

A college app for a performing arts student, with the whole of Shakespeare living inside it.

**Open it:** https://islal08.github.io/places/

## Put it on your Home Screen

- **iPhone:** open the link in Safari, tap the Share button, then **Add to Home Screen**.
- **Android:** open the link in Chrome and tap **Install** (or Menu, then **Add to Home screen**).

Once added it opens full screen like any other app, and it works offline: the whole library is saved on the phone after the first visit. Everything you put in it, your timetable, jobs, scripts, highlights and notes, is stored on your device only and is never uploaded.

## What's inside

**College**

- **Dashboard**: the day drawn as an arc, what is on now, what is next, what is due.
- **Timetable**, **To-do list**, **Events** and **Reminders**, each with an add to calendar button so your phone does the nagging.
- **My teachers**: every job and script filed under the person who set it.
- **Assistant**: see below.

**Places**, the actor's backstage

- **Prompt Book**: all 38 of Shakespeare's plays with study notes, character profiles and a line-by-line modern English translation of the whole canon; over a thousand monologues; the 154 sonnets; a directory of screen monologues; your own scripts and highlights.
- **Rehearsal Room**: run your lines with the text hidden, and let the microphone check you word by word.
- **Cold Reads**: a speech you have never seen, a short prep, then perform.
- **Warm-Up Room**: guided voice and body warm-ups with a timer, plus tongue twisters.
- **Rolebook**: a dossier for every part you are cast in.
- **Prompter**: a teleprompter for any speech or scene.

## The assistant

Out of the box it works offline: paste an email or a note and it pulls the jobs out and puts them on your list, with the right teacher and date, with no internet at all.

Add your own Claude key in **Settings** and it wakes up properly. It then streams its answers, reads photos of task sheets, and can actually change the app rather than telling you to: write on your to-do list, tick things off, save events, set reminders, add a class, and search every speech in the library by character, play or length so it can hand you a two minute audition piece.

- Get a key from [console.anthropic.com](https://console.anthropic.com). You pay only for the messages you send.
- The key is saved in your phone's own storage, nowhere else. It is never in this repository, and it is never sent anywhere except to Anthropic.
- **Connect** in Settings sends one tiny message and tells you whether it worked.
- **Deeper thinking** makes it reason harder before answering. Slower, and it costs a little more.

## Privacy

Nothing personal ships in this code: no names, no timetable, no buildings, no keys. A fresh install starts empty and you fill it in, or restore a backup file kept on your own device. Settings has **Save a backup** and **Restore a backup** for exactly that.

## Sources and credits

- **Shakespeare's plays:** [Folger Digital Texts](https://www.folger.edu/explore/shakespeares-works/), Folger Shakespeare Library, used under [CC BY-NC 3.0](https://creativecommons.org/licenses/by-nc/3.0/). Changes: the texts are split into scenes and speeches for this app; the wording is unchanged. The modern English translations, study notes and character notes are new work written for this app. Non-commercial use only.
- **The sonnets and the modern classics** (Chekhov, Ibsen, Shaw, Wilde, Synge, O'Neill, Galsworthy, Robins): public-domain editions sourced from Project Gutenberg. Translators are credited on each speech.
- **Screen monologues:** listings only. The words belong to their writers; each entry links to the official published script.

## Updating (for whoever maintains it)

The source lives outside this folder in `prompt-book/build/`. To publish a change:

```
python3 build/assemble.py && python3 build/site.py
cd app && git add -A && git commit -m "Update ESPA" && git push
```

GitHub Pages redeploys in about a minute. The service worker's cache name is generated from the content, so installed copies pick up the new version on their next launch.
