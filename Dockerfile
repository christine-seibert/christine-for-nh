FROM zensical/zensical:latest
COPY user-requirements.txt .
RUN pip install -r user-requirements.txt
ENTRYPOINT ["zensical"]
CMD ["serve", "--dev-addr=0.0.0.0:8000"]
