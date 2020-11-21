import pandas as pd
df = pd.read_csv("data_3.csv", header = None, names = ['메뉴', '가격', '가게', '링크', '장소'], encoding = 'utf-8')
for x in range(len(df)):
    if (type(df['가게'][x]) == str):
        df.loc[x, '가게'] = "<a href = " + df['링크'][x] + ">" + df['가게'][x] + "</a>"
df_filtered = df.sort_values(by = '가격')
df_filtered = df_filtered.drop('링크', axis = 1)
df_filtered = df_filtered.dropna(axis = 0)
df_filtered.to_html("price.html", escape = False)