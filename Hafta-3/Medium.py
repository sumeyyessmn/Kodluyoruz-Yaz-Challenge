#!/usr/bin/env python
# coding: utf-8

# ## Problem: Bir çiftlikte toplamda 36 baş tavuk ve koyun bulunmaktadır. Bu hayvanlardan toplamda 100 bacak çıkmaktadır. Çiftlikte kaçar tane tavuk ve koyun olduğunu bulan kod parçacığını yazar mısın?

# In[7]:


toplamBas = 36
toplamBacak = 100


# In[8]:


tavukSayisi = (4*toplamBas - toplamBacak) / 2


# In[9]:


koyunSayisi = toplamBas -tavukSayisi


# In[10]:


print(f"Çiftlikte {int(tavukSayisi)} kadar tavuk, {int(koyunSayisi)} kadar koyun bulunmaktadır.")


# In[ ]:




