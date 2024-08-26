FROM squidfunk/mkdocs-material
COPY user-requirements.txt /tmp
RUN pip install -r /tmp/user-requirements.txt
ENTRYPOINT ["mkdocs"]
CMD ["serve", "--dev-addr=0.0.0.0:8000"]
