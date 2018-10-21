** rstudio-rmarkdown-project-skeleton **

A sample RStudio project file that contains everything you need to start documenting. 

# Instructions

1. Rename **your-project-name.Rproj** to match your project name and double-click it to open with [RStudio](https://www.rstudio.com/products/rstudio/download/).
2. Open **_bookdown.yml** and change replace **your_documentation_name** with your documentation name.
3. Change **chapter_name** from **Section** to something else if **Section** does not suit your needs.
4. Under **rmd_files** you will be able to include the file list for your documentation. As you add more files, include them in this array so that RStudio knows where to grab its information,
5. Open **_output.yml** and change the *css* atrribute to your own stylesheet or any others included in the **css** folders.
6. Around *line 29* you will need to change **Your Documentation Name** to what you would like displayed as the title in your **TOC**.
7. Around *line 30* you will find the HTML code to include an image below the TOC and a link.
8. The notifications.css contains requierd CSS for using noticiations.You can see the notification usage in **index.Rmd**.
9. Start writing your documentation using *markdown* and build the project using **Build --> Build All**
10. You documentation HTML will be generated inside the **_book** directory.
11. If you are using the notifications, you will need to copy the images inside img to your output img directory.
12. You can automate this using Gulp, a sample Gulpfile image has been included.


# Version History

## Version 1.0

1. Initial Commit and Creation of this ReadMe File

