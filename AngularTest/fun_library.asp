<%
response.expires=-1

dim nn
nn = "[{""instr"":""инструкция к первому блоку вопросов. Нужно делать так, и не нужно делать не так"",""time_limit"":0,""random_ans_ord"":0,""items"":[{""text"":""first QQQ"",""id"":10,""dim"":{""type"":1,""mode"":2,""sel"":0,""time_restrict"":1,""subscl"":[{""txt"":""var1"",""id"":111},{""txt"":""var2"",""id"":112},{""txt"":""var3"",""id"":113}]}}]},"
nn = nn + "{""instr"":""инструкция ко второму блоку вопросов"",""time_limit"":0,""random_ans_ord"":0,""items"":[]}]"

response.write(nn)

%>